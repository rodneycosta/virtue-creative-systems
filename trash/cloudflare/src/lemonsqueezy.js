const LEMON_SQUEEZY_API_BASE = "https://api.lemonsqueezy.com/v1";

export async function createCheckout(env, { variantId, productName, redirectUrl, receiptLinkUrl, testMode = true }) {
  const apiKey = env.LEMONSQUEEZY_API_KEY;
  const storeId = env.LEMONSQUEEZY_STORE_ID;
  if (!apiKey || !storeId || !variantId) {
    return { ok: false, configured: false, status: 503, data: null };
  }

  const payload = {
    data: {
      type: "checkouts",
      attributes: {
        product_options: {
          name: productName || "Virtue FX Manager",
          redirect_url: redirectUrl || "",
          receipt_button_text: "Download Virtue FX Manager",
          receipt_link_url: receiptLinkUrl || "",
          enabled_variants: [Number(variantId)],
        },
        checkout_options: {
          embed: false,
          media: true,
          logo: true,
          desc: true,
          discount: true,
          button_color: "#073f3b",
          button_text_color: "#ffffff",
        },
        checkout_data: {
          custom: {
            product_code: "vfxm",
            variant_key: String(variantId),
          },
        },
        test_mode: Boolean(testMode),
      },
      relationships: {
        store: {
          data: {
            type: "stores",
            id: String(storeId),
          },
        },
        variant: {
          data: {
            type: "variants",
            id: String(variantId),
          },
        },
      },
    },
  };

  const response = await fetch(`${LEMON_SQUEEZY_API_BASE}/checkouts`, {
    method: "POST",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  return { ok: response.ok, configured: true, status: response.status, data };
}

export async function callLicenseApi(env, action, formFields) {
  const body = new URLSearchParams(formFields);
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  };
  if (env.LEMONSQUEEZY_API_KEY) headers.Authorization = `Bearer ${env.LEMONSQUEEZY_API_KEY}`;

  const response = await fetch(`${LEMON_SQUEEZY_API_BASE}/licenses/${action}`, {
    method: "POST",
    headers,
    body,
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  return { ok: response.ok, configured: true, status: response.status, data };
}

export function normalizeLicenseApiResponse(data) {
  const license = data?.license_key || data?.data?.attributes || data || {};
  const meta = data?.meta || {};
  const instance = data?.instance || {};
  return {
    activated: data?.activated,
    deactivated: data?.deactivated,
    valid: data?.valid,
    error: data?.error || null,
    providerLicenseId: String(license.id || ""),
    providerInstanceId: instance.id ? String(instance.id) : null,
    status: String(license.status || "inactive").toLowerCase(),
    activationLimit: Number(license.activation_limit || 2),
    activationUsage: Number(license.activation_usage || 0),
    expiresAt: license.expires_at || null,
    storeId: String(meta.store_id || license.store_id || ""),
    orderId: String(meta.order_id || license.order_id || ""),
    productId: String(meta.product_id || license.product_id || ""),
    variantId: String(meta.variant_id || license.variant_id || ""),
    customerId: String(meta.customer_id || license.customer_id || ""),
    email: meta.customer_email || license.customer_email || null,
  };
}

export function extractWebhookEvent(payload) {
  const meta = payload?.meta || {};
  const data = payload?.data || {};
  return {
    eventName: meta.event_name || meta.eventName || data.type || "unknown",
    providerEventId: meta.webhook_id || meta.event_id || data.id || null,
    storeId: String(data?.relationships?.store?.data?.id || data?.attributes?.store_id || ""),
    orderId: String(data?.relationships?.order?.data?.id || data?.attributes?.order_id || data.id || ""),
    productId: String(data?.relationships?.product?.data?.id || data?.attributes?.product_id || ""),
    variantId: String(data?.relationships?.variant?.data?.id || data?.attributes?.variant_id || ""),
    customerId: String(data?.relationships?.customer?.data?.id || data?.attributes?.customer_id || ""),
    licenseKeyId: String(data?.id || data?.attributes?.license_key_id || ""),
    licenseKey: data?.attributes?.key || data?.attributes?.license_key || null,
    status: String(data?.attributes?.status || data?.attributes?.license_key_status || "active").toLowerCase(),
    email: data?.attributes?.user_email || data?.attributes?.customer_email || null,
  };
}

export async function getLemonSqueezyLicenseKey(env, licenseId) {
  const apiKey = env.LEMONSQUEEZY_API_KEY;
  if (!apiKey || !licenseId) return null;
  const response = await fetch(`${LEMON_SQUEEZY_API_BASE}/license-keys/${licenseId}`, {
    headers: {
      Accept: "application/vnd.api+json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  if (!response.ok) return null;
  const payload = await response.json();
  return payload?.data;
}
