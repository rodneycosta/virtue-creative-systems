import { ERROR_CODES, publicMessage } from "./errors.js";
import {
  createSignedDownloadPath,
  hashEmail,
  hashLicenseKey,
  hmacHex,
  sha256Hex,
  signEntitlementToken,
  verifyEntitlementToken,
  verifyHmacHex,
  verifySignedDownloadPath,
} from "./crypto.js";
import { callLicenseApi, extractWebhookEvent } from "./lemonsqueezy.js";
import {
  addDaysIso,
  entitlementPayload,
  evaluateActivation,
  graceStatus,
  licenseStatusCode,
  nowIso,
} from "./policy.js";

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin");
  const allowed = String(env.VFXM_ALLOWED_ORIGINS || "https://virtuecreativesystems.com")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const headers = {
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    Vary: "Origin",
  };
  if (origin && allowed.includes(origin)) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

function json(request, env, body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...corsHeaders(request, env),
    },
  });
}

function errorJson(request, env, code, status = 400, extra = {}) {
  return json(request, env, { ok: false, code, message: publicMessage(code), ...extra }, status);
}

async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

function requireDb(env) {
  if (!env.DB) throw new Error("D1 binding DB is required");
  return env.DB;
}

function requireSecret(env, name) {
  if (!env[name]) throw new Error(`${name} is required`);
  return env[name];
}

function validateActivationInput(body) {
  const missing = [];
  for (const key of ["license_key", "machine_hash", "platform", "app_version"]) {
    if (!body?.[key]) missing.push(key);
  }
  if (body?.product_code && body.product_code !== "vfxm") missing.push("product_code:vfxm");
  return missing;
}

async function getLicenseByHash(db, licenseHash) {
  return db.prepare("SELECT * FROM licenses WHERE license_hash = ?").bind(licenseHash).first();
}

async function getActiveActivation(db, licenseId, machineHash) {
  return db
    .prepare("SELECT * FROM license_activations WHERE license_id = ? AND machine_hash = ? AND status = 'active'")
    .bind(licenseId, machineHash)
    .first();
}

async function activeActivationCount(db, licenseId) {
  const row = await db
    .prepare("SELECT COUNT(*) AS count FROM license_activations WHERE license_id = ? AND status = 'active'")
    .bind(licenseId)
    .first();
  return Number(row?.count || 0);
}

async function upsertLicense(db, license) {
  const existing = await getLicenseByHash(db, license.license_hash);
  const createdAt = existing?.created_at || nowIso();
  const updatedAt = nowIso();
  await db
    .prepare(
      `INSERT INTO licenses (
        id, provider, provider_store_id, provider_license_id, provider_order_id, provider_customer_id,
        product_code, product_id, variant_id, license_hash, email_hash, tier, status, activation_limit,
        expires_at, created_at, updated_at, last_provider_sync_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(license_hash) DO UPDATE SET
        provider = excluded.provider,
        provider_store_id = excluded.provider_store_id,
        provider_license_id = COALESCE(excluded.provider_license_id, licenses.provider_license_id),
        provider_order_id = COALESCE(excluded.provider_order_id, licenses.provider_order_id),
        provider_customer_id = COALESCE(excluded.provider_customer_id, licenses.provider_customer_id),
        product_id = COALESCE(excluded.product_id, licenses.product_id),
        variant_id = COALESCE(excluded.variant_id, licenses.variant_id),
        email_hash = COALESCE(excluded.email_hash, licenses.email_hash),
        tier = excluded.tier,
        status = excluded.status,
        activation_limit = excluded.activation_limit,
        expires_at = excluded.expires_at,
        updated_at = excluded.updated_at,
        last_provider_sync_at = excluded.last_provider_sync_at`,
    )
    .bind(
      existing?.id || null,
      license.provider,
      license.provider_store_id || null,
      license.provider_license_id || null,
      license.provider_order_id || null,
      license.provider_customer_id || null,
      license.product_code || "vfxm",
      license.product_id || null,
      license.variant_id || null,
      license.license_hash,
      license.email_hash || null,
      license.tier || "personal",
      license.status || "active",
      Number(license.activation_limit || 2),
      license.expires_at || null,
      createdAt,
      updatedAt,
      nowIso(),
    )
    .run();
  return getLicenseByHash(db, license.license_hash);
}

function tierFromVariant(env, variantId) {
  if (variantId && variantId === env.LEMONSQUEEZY_VFXM_STUDIO_VARIANT_ID) return "studio";
  if (variantId && (variantId === env.LEMONSQUEEZY_VFXM_NFR_VARIANT_ID || variantId === env.LEMONSQUEEZY_VFXM_CREATOR_NFR_VARIANT_ID)) return "creator-nfr";
  if (variantId && variantId === env.LEMONSQUEEZY_VFXM_TRIAL_VARIANT_ID) return "trial";
  return "personal";
}

function activationLimitForTier(env, tier) {
  if (tier === "trial") return Number(env.VFXM_TRIAL_ACTIVATION_LIMIT || 1);
  if (tier === "studio") return Number(env.VFXM_STUDIO_ACTIVATION_LIMIT || 5);
  return Number(env.VFXM_PERSONAL_ACTIVATION_LIMIT || 2);
}

async function syncLicenseWithProvider(env, licenseKey, licenseHash) {
  const result = await callLicenseApi(env, "validate", { license_key: licenseKey });
  if (!result.configured || !result.ok) return null;

  const attributes = result.data?.license_key || result.data?.data?.attributes || result.data || {};
  const variantId = String(attributes.variant_id || attributes.variant?.id || "");
  const tier = tierFromVariant(env, variantId);
  return upsertLicense(requireDb(env), {
    provider: "lemonsqueezy",
    provider_store_id: env.LEMONSQUEEZY_STORE_ID || null,
    provider_license_id: String(attributes.id || attributes.license_key_id || ""),
    provider_order_id: String(attributes.order_id || ""),
    provider_customer_id: String(attributes.customer_id || ""),
    product_code: "vfxm",
    product_id: String(attributes.product_id || env.LEMONSQUEEZY_VFXM_PRODUCT_ID || ""),
    variant_id: variantId,
    license_hash: licenseHash,
    email_hash: null,
    tier,
    status: attributes.status || "active",
    activation_limit: Number(attributes.activation_limit || activationLimitForTier(env, tier)),
    expires_at: attributes.expires_at || null,
  });
}

async function issueToken(env, license, activation) {
  const graceDays = Number(env.VFXM_DEFAULT_GRACE_DAYS || 14);
  const payload = entitlementPayload({ license, activation, graceDays });
  const token = await signEntitlementToken(payload, requireSecret(env, "VFXM_TOKEN_PRIVATE_KEY"));
  return { token, payload };
}

async function handleActivate(request, env) {
  const body = await readJson(request);
  const missing = validateActivationInput(body);
  if (missing.length) return errorJson(request, env, ERROR_CODES.VALIDATION_ERROR, 400, { missing });

  const db = requireDb(env);
  const licenseHash = await hashLicenseKey(body.license_key, requireSecret(env, "VFXM_LICENSE_HASH_SECRET"));
  let license = await getLicenseByHash(db, licenseHash);
  if (!license) license = await syncLicenseWithProvider(env, body.license_key, licenseHash);
  if (!license) return errorJson(request, env, ERROR_CODES.CONFIG_MISSING, 503);

  const statusCode = licenseStatusCode(license.status);
  if (statusCode !== ERROR_CODES.LICENSE_VALID) return errorJson(request, env, statusCode, 403);

  const existingActivation = await getActiveActivation(db, license.id, body.machine_hash);
  const activeCount = await activeActivationCount(db, license.id);
  const decision = evaluateActivation({
    activationLimit: license.activation_limit,
    activeActivationCount: activeCount,
    sameMachineActive: Boolean(existingActivation),
  });
  if (!decision.allowed) return errorJson(request, env, decision.code, 403, {
    activation_limit: license.activation_limit,
    activation_count: activeCount,
  });

  const now = nowIso();
  let activation = existingActivation;
  if (activation) {
    await db.prepare("UPDATE license_activations SET last_seen_at = ?, platform = ?, app_version = ? WHERE id = ?")
      .bind(now, body.platform, body.app_version, activation.id)
      .run();
    activation = await getActiveActivation(db, license.id, body.machine_hash);
  } else {
    const activationInstanceId = crypto.randomUUID();
    await db.prepare(
      `INSERT INTO license_activations (
        license_id, activation_instance_id, machine_hash, device_label, platform, app_version,
        status, activated_at, last_seen_at
      ) VALUES (?, ?, ?, ?, ?, ?, 'active', ?, ?)`,
    )
      .bind(license.id, activationInstanceId, body.machine_hash, body.device_label || null, body.platform, body.app_version, now, now)
      .run();
    activation = await getActiveActivation(db, license.id, body.machine_hash);
  }

  const issued = await issueToken(env, license, activation);
  return json(request, env, {
    ok: true,
    code: decision.code,
    status: "active",
    plan: license.tier,
    activation_limit: license.activation_limit,
    activation_count: await activeActivationCount(db, license.id),
    this_machine_active: true,
    issued_at: issued.payload.issued_at,
    next_check_at: issued.payload.online_check_required_after,
    grace_until: issued.payload.grace_until,
    expires_at: license.expires_at,
    update_channel: env.VFXM_RELEASE_CHANNEL || "stable",
    minimum_supported_app_version: null,
    entitlement_token: issued.token,
  });
}

async function handleValidate(request, env) {
  const body = await readJson(request);
  if (body?.entitlement_token) {
    const verified = await verifyEntitlementToken(body.entitlement_token, requireSecret(env, "VFXM_TOKEN_PUBLIC_KEY"));
    if (!verified.valid) {
      return errorJson(
        request,
        env,
        verified.reason === "expired" ? ERROR_CODES.LICENSE_TOKEN_EXPIRED : ERROR_CODES.LICENSE_SIGNATURE_INVALID,
        401,
      );
    }
    return json(request, env, {
      ok: true,
      code: graceStatus(verified.payload.grace_until),
      status: verified.payload.license_status,
      grace_until: verified.payload.grace_until,
      next_check_at: verified.payload.online_check_required_after,
    });
  }

  return handleActivate(request, env);
}

async function handleDeactivate(request, env) {
  const body = await readJson(request);
  const db = requireDb(env);
  let licenseHash = null;
  let activationInstanceId = body?.activation_instance_id || null;
  let machineHash = body?.machine_hash || null;

  if (body?.entitlement_token) {
    const verified = await verifyEntitlementToken(body.entitlement_token, requireSecret(env, "VFXM_TOKEN_PUBLIC_KEY"));
    if (!verified.valid) return errorJson(request, env, ERROR_CODES.LICENSE_SIGNATURE_INVALID, 401);
    licenseHash = verified.payload.license_hash;
    activationInstanceId = activationInstanceId || verified.payload.activation_instance_id;
    machineHash = machineHash || verified.payload.machine_hash;
  } else if (body?.license_key) {
    licenseHash = await hashLicenseKey(body.license_key, requireSecret(env, "VFXM_LICENSE_HASH_SECRET"));
  }

  if (!licenseHash || (!activationInstanceId && !machineHash)) {
    return errorJson(request, env, ERROR_CODES.VALIDATION_ERROR, 400);
  }

  const license = await getLicenseByHash(db, licenseHash);
  if (!license) return errorJson(request, env, ERROR_CODES.LICENSE_INVALID, 404);

  const activation = activationInstanceId
    ? await db.prepare("SELECT * FROM license_activations WHERE license_id = ? AND activation_instance_id = ? AND status = 'active'")
      .bind(license.id, activationInstanceId).first()
    : await getActiveActivation(db, license.id, machineHash);
  if (!activation) return errorJson(request, env, ERROR_CODES.LICENSE_MACHINE_NOT_ACTIVE, 404);

  await db.prepare(
    "UPDATE license_activations SET status = 'deactivated', deactivated_at = ?, deactivation_reason = ? WHERE id = ?",
  )
    .bind(nowIso(), "customer-request", activation.id)
    .run();

  if (activation.provider_instance_id && body?.license_key) {
    await callLicenseApi(env, "deactivate", {
      license_key: body.license_key,
      instance_id: activation.provider_instance_id,
    });
  }

  return json(request, env, { ok: true, code: "LICENSE_DEACTIVATED", status: "deactivated" });
}

async function handleStatus(request, env) {
  const url = new URL(request.url);
  const licenseHashPrefix = url.searchParams.get("license_hash_prefix");
  if (!licenseHashPrefix || licenseHashPrefix.length < 8) return errorJson(request, env, ERROR_CODES.VALIDATION_ERROR, 400);
  const row = await requireDb(env)
    .prepare("SELECT product_code, tier, status, activation_limit, expires_at, updated_at FROM licenses WHERE license_hash LIKE ? LIMIT 1")
    .bind(`${licenseHashPrefix}%`)
    .first();
  if (!row) return errorJson(request, env, ERROR_CODES.LICENSE_INVALID, 404);
  return json(request, env, { ok: true, license: row });
}

async function handleLatestRelease(request, env) {
  const url = new URL(request.url);
  const platform = url.searchParams.get("platform") || "macos";
  const channel = url.searchParams.get("channel") || env.VFXM_RELEASE_CHANNEL || "stable";
  const release = await requireDb(env)
    .prepare(
      "SELECT id, product_code, version, platform, channel, file_name, sha256, size_bytes, min_reaper_version, release_notes, created_at FROM release_files WHERE product_code = 'vfxm' AND platform = ? AND channel = ? AND is_latest = 1 LIMIT 1",
    )
    .bind(platform, channel)
    .first();
  if (!release) return errorJson(request, env, ERROR_CODES.RELEASE_NOT_FOUND, 404);
  return json(request, env, { ok: true, release });
}

async function findRelease(db, platform, version, channel) {
  if (version && version !== "latest") {
    return db
      .prepare("SELECT * FROM release_files WHERE product_code = 'vfxm' AND platform = ? AND version = ? AND channel = ? LIMIT 1")
      .bind(platform, version, channel)
      .first();
  }
  return db
    .prepare("SELECT * FROM release_files WHERE product_code = 'vfxm' AND platform = ? AND channel = ? AND is_latest = 1 LIMIT 1")
    .bind(platform, channel)
    .first();
}

async function handleDownloadRequest(request, env) {
  const body = await readJson(request);
  const db = requireDb(env);
  const platform = body?.platform || "macos";
  const channel = body?.channel || env.VFXM_RELEASE_CHANNEL || "stable";
  const release = await findRelease(db, platform, body?.version || "latest", channel);
  if (!release) return errorJson(request, env, ERROR_CODES.RELEASE_NOT_FOUND, 404);

  let licenseHash = null;
  if (body?.entitlement_token) {
    const verified = await verifyEntitlementToken(body.entitlement_token, requireSecret(env, "VFXM_TOKEN_PUBLIC_KEY"));
    if (!verified.valid) return errorJson(request, env, ERROR_CODES.LICENSE_SIGNATURE_INVALID, 401);
    licenseHash = verified.payload.license_hash;
  } else if (body?.license_key) {
    licenseHash = await hashLicenseKey(body.license_key, requireSecret(env, "VFXM_LICENSE_HASH_SECRET"));
  } else {
    return errorJson(request, env, ERROR_CODES.VALIDATION_ERROR, 400);
  }

  const license = await getLicenseByHash(db, licenseHash);
  if (!license) return errorJson(request, env, ERROR_CODES.LICENSE_INVALID, 403);
  const statusCode = licenseStatusCode(license.status);
  if (statusCode !== ERROR_CODES.LICENSE_VALID) return errorJson(request, env, statusCode, 403);
  if (!env.RELEASES || !env.VFXM_DOWNLOAD_SIGNING_SECRET) {
    return errorJson(request, env, ERROR_CODES.DOWNLOAD_NOT_CONFIGURED, 503);
  }

  const ttl = Number(env.VFXM_DOWNLOAD_URL_TTL_SECONDS || 900);
  const expiresAt = Math.floor(Date.now() / 1000) + ttl;
  const signed = await createSignedDownloadPath(env.VFXM_DOWNLOAD_SIGNING_SECRET, release.id, expiresAt, licenseHash);
  const url = new URL(request.url);
  const downloadUrl = `${url.origin}/v1/download/file/${release.id}?exp=${signed.expires}&sig=${signed.signature}&lh=${licenseHash.slice(0, 16)}`;

  await db.prepare(
    "INSERT INTO download_events (license_id, release_file_id, requested_at, status, ip_hash, user_agent_hash) VALUES (?, ?, ?, 'issued', ?, ?)",
  )
    .bind(
      license.id,
      release.id,
      nowIso(),
      request.headers.get("CF-Connecting-IP") ? await hmacHex(env.VFXM_EMAIL_HASH_SECRET || env.VFXM_LICENSE_HASH_SECRET, request.headers.get("CF-Connecting-IP")) : null,
      request.headers.get("User-Agent") ? await hmacHex(env.VFXM_EMAIL_HASH_SECRET || env.VFXM_LICENSE_HASH_SECRET, request.headers.get("User-Agent")) : null,
    )
    .run();

  return json(request, env, {
    ok: true,
    download_url: downloadUrl,
    sha256: release.sha256,
    file_name: release.file_name,
    expires_at: new Date(expiresAt * 1000).toISOString(),
    release_notes: release.release_notes || null,
  });
}

async function handleDownloadFile(request, env, releaseFileId) {
  if (!env.RELEASES || !env.VFXM_DOWNLOAD_SIGNING_SECRET) return errorJson(request, env, ERROR_CODES.DOWNLOAD_NOT_CONFIGURED, 503);
  const url = new URL(request.url);
  const exp = url.searchParams.get("exp");
  const sig = url.searchParams.get("sig");
  const licenseHashPrefix = url.searchParams.get("lh");
  const license = await requireDb(env)
    .prepare("SELECT license_hash FROM licenses WHERE license_hash LIKE ? LIMIT 1")
    .bind(`${licenseHashPrefix || ""}%`)
    .first();
  const ok = await verifySignedDownloadPath(
    env.VFXM_DOWNLOAD_SIGNING_SECRET,
    releaseFileId,
    exp,
    license?.license_hash || "",
    sig,
    Math.floor(Date.now() / 1000),
  );
  if (!ok) return errorJson(request, env, ERROR_CODES.LICENSE_SIGNATURE_INVALID, 401);

  const release = await requireDb(env).prepare("SELECT * FROM release_files WHERE id = ?").bind(releaseFileId).first();
  if (!release) return errorJson(request, env, ERROR_CODES.RELEASE_NOT_FOUND, 404);
  const object = await env.RELEASES.get(release.r2_key);
  if (!object) return errorJson(request, env, ERROR_CODES.RELEASE_NOT_FOUND, 404);
  return new Response(object.body, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${release.file_name}"`,
      "Cache-Control": "private, max-age=0, no-store",
    },
  });
}

async function handleWebhook(request, env) {
  const rawBody = await request.text();
  const signature = request.headers.get("X-Signature") || "";
  const secret = requireSecret(env, "LEMONSQUEEZY_WEBHOOK_SECRET");
  const signatureOk = await verifyHmacHex(secret, rawBody, signature);
  if (!signatureOk) return errorJson(request, env, ERROR_CODES.WEBHOOK_SIGNATURE_INVALID, 401);

  const db = requireDb(env);
  const payloadHash = await sha256Hex(rawBody);
  const payload = JSON.parse(rawBody);
  const event = extractWebhookEvent(payload);
  const existing = await db.prepare("SELECT id, status FROM webhook_events WHERE payload_hash = ?").bind(payloadHash).first();
  if (existing) return json(request, env, { ok: true, duplicate: true, status: existing.status });

  await db.prepare(
    "INSERT INTO webhook_events (provider, event_name, provider_event_id, payload_hash, received_at, status) VALUES ('lemonsqueezy', ?, ?, ?, ?, 'received')",
  )
    .bind(event.eventName, event.providerEventId, payloadHash, nowIso())
    .run();

  try {
    const licenseSecret = requireSecret(env, "VFXM_LICENSE_HASH_SECRET");
    if (event.eventName === "order_refunded") {
      await db.prepare("UPDATE licenses SET status = 'refunded', updated_at = ? WHERE provider_order_id = ?")
        .bind(nowIso(), event.orderId).run();
    } else if (event.eventName.includes("license_key") || event.eventName === "order_created") {
      const providerLicenseKey = event.licenseKeyId || event.orderId || event.providerEventId || payloadHash;
      const tier = tierFromVariant(env, event.variantId);
      const providerLicenseHash = event.licenseKey
        ? await hashLicenseKey(event.licenseKey, licenseSecret)
        : await hmacHex(licenseSecret, `provider:${providerLicenseKey}`);
      await upsertLicense(db, {
        provider: "lemonsqueezy",
        provider_store_id: event.storeId || env.LEMONSQUEEZY_STORE_ID,
        provider_license_id: event.licenseKeyId,
        provider_order_id: event.orderId,
        provider_customer_id: event.customerId,
        product_code: "vfxm",
        product_id: event.productId || env.LEMONSQUEEZY_VFXM_PRODUCT_ID,
        variant_id: event.variantId,
        license_hash: providerLicenseHash,
        email_hash: await hashEmail(event.email, env.VFXM_EMAIL_HASH_SECRET || licenseSecret),
        tier,
        status: event.status,
        activation_limit: activationLimitForTier(env, tier),
      });
    } else if (event.eventName.includes("subscription_cancelled") || event.eventName.includes("subscription_expired")) {
      await db.prepare("UPDATE licenses SET status = 'expired', updated_at = ? WHERE provider_customer_id = ?")
        .bind(nowIso(), event.customerId).run();
    }
    await db.prepare("UPDATE webhook_events SET status = 'processed', processed_at = ? WHERE payload_hash = ?")
      .bind(nowIso(), payloadHash)
      .run();
  } catch (error) {
    await db.prepare("UPDATE webhook_events SET status = 'error', error_message = ? WHERE payload_hash = ?")
      .bind(String(error?.message || "processing failed").slice(0, 500), payloadHash)
      .run();
    return errorJson(request, env, ERROR_CODES.LICENSE_SERVER_UNAVAILABLE, 500);
  }

  return json(request, env, { ok: true });
}

export async function handleRequest(request, env) {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(request, env) });
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/g, "") || "/";

  try {
    if (request.method === "GET" && path === "/health") return json(request, env, { ok: true, service: "vfxm-license-worker" });
    if (request.method === "POST" && path === "/webhooks/lemonsqueezy") return handleWebhook(request, env);
    if (request.method === "POST" && path === "/v1/license/activate") return handleActivate(request, env);
    if (request.method === "POST" && path === "/v1/license/validate") return handleValidate(request, env);
    if (request.method === "POST" && path === "/v1/license/deactivate") return handleDeactivate(request, env);
    if (request.method === "GET" && path === "/v1/license/status") return handleStatus(request, env);
    if (request.method === "GET" && path === "/v1/releases/latest") return handleLatestRelease(request, env);
    if (request.method === "POST" && path === "/v1/download/request") return handleDownloadRequest(request, env);
    const downloadMatch = path.match(/^\/v1\/download\/file\/(\d+)$/);
    if (request.method === "GET" && downloadMatch) return handleDownloadFile(request, env, Number(downloadMatch[1]));
    return errorJson(request, env, "NOT_FOUND", 404, { message: "Not found" });
  } catch (error) {
    const message = error?.message || "server error";
    if (message.includes("required")) return errorJson(request, env, ERROR_CODES.CONFIG_MISSING, 503, { detail: message });
    return errorJson(request, env, ERROR_CODES.LICENSE_SERVER_UNAVAILABLE, 500);
  }
}

export default {
  fetch: handleRequest,
};
