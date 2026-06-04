import test from "node:test";
import assert from "node:assert/strict";
import {
  createSignedDownloadPath,
  hashLicenseKey,
  hmacHex,
  signEntitlementToken,
  verifyEntitlementToken,
  verifyHmacHex,
  verifySignedDownloadPath,
} from "../src/crypto.js";

test("valid webhook-style HMAC signature is accepted and invalid signature is rejected", async () => {
  const secret = "webhook-secret";
  const body = JSON.stringify({ meta: { event_name: "order_created" }, data: { id: "1" } });
  const signature = await hmacHex(secret, body);

  assert.equal(await verifyHmacHex(secret, body, signature), true);
  assert.equal(await verifyHmacHex(secret, body, "00".repeat(32)), false);
});

test("license key hashing does not store the raw license key", async () => {
  const raw = "VFXM-TEST-1234";
  const hash = await hashLicenseKey(raw, "license-secret");

  assert.notEqual(hash, raw);
  assert.match(hash, /^[a-f0-9]{64}$/);
  assert.equal(hash, await hashLicenseKey(raw, "license-secret"));
});

test("entitlement token signs and verifies with ES256", async () => {
  const pair = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
  const privateJwk = await crypto.subtle.exportKey("jwk", pair.privateKey);
  const publicJwk = await crypto.subtle.exportKey("jwk", pair.publicKey);
  const payload = {
    product: "vfxm",
    license_hash: "abc",
    activation_instance_id: "act_1",
    machine_hash: "machine-hash",
    license_status: "active",
    tier: "commercial",
    issued_at: new Date().toISOString(),
    online_check_required_after: new Date(Date.now() + 1000).toISOString(),
    grace_until: new Date(Date.now() + 1000).toISOString(),
    expires_at: new Date(Date.now() + 1000).toISOString(),
    features: [],
    signature_version: 1,
  };

  const token = await signEntitlementToken(payload, privateJwk);
  const verified = await verifyEntitlementToken(token, publicJwk);

  assert.equal(verified.valid, true);
  assert.equal(verified.payload.product, "vfxm");
});

test("expired entitlement token is rejected", async () => {
  const pair = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
  const privateJwk = await crypto.subtle.exportKey("jwk", pair.privateKey);
  const publicJwk = await crypto.subtle.exportKey("jwk", pair.publicKey);
  const token = await signEntitlementToken(
    {
      product: "vfxm",
      expires_at: new Date(Date.now() - 1000).toISOString(),
    },
    privateJwk,
  );

  const verified = await verifyEntitlementToken(token, publicJwk);

  assert.equal(verified.valid, false);
  assert.equal(verified.reason, "expired");
});

test("signed download path expires and binds to release plus license hash", async () => {
  const secret = "download-secret";
  const releaseFileId = 42;
  const licenseHash = "abc123";
  const expires = Math.floor(Date.now() / 1000) + 60;
  const signed = await createSignedDownloadPath(secret, releaseFileId, expires, licenseHash);

  assert.equal(await verifySignedDownloadPath(secret, releaseFileId, expires, licenseHash, signed.signature, Math.floor(Date.now() / 1000)), true);
  assert.equal(await verifySignedDownloadPath(secret, releaseFileId + 1, expires, licenseHash, signed.signature, Math.floor(Date.now() / 1000)), false);
  assert.equal(await verifySignedDownloadPath(secret, releaseFileId, expires - 120, licenseHash, signed.signature, Math.floor(Date.now() / 1000)), false);
});
