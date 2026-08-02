function base64ToBytes(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function createCheckout(env, { variantId, productName, redirectUrl, receiptLinkUrl, testMode = true, customerEmail }) {
  const token = env.POLAR_ACCESS_TOKEN;
  const polarEnv = env.POLAR_ENV || "sandbox";

  // If no credentials, run in mock sandbox/development mode
  if (!token || token.startsWith("mock_")) {
    const mockCheckoutUrl = redirectUrl || "https://virtuecreativesystems.com/checkout/success/";
    return {
      ok: true,
      configured: true,
      status: 200,
      url: mockCheckoutUrl
    };
  }

  const polarHost = polarEnv === "production"
    ? "api.polar.sh"
    : "sandbox-api.polar.sh";

  const payload = {
    products: [variantId],
    success_url: redirectUrl,
    customer_email: customerEmail || undefined
  };

  try {
    const response = await fetch(`https://${polarHost}/v1/checkouts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    let data = null;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    return {
      ok: response.ok,
      configured: true,
      status: response.status,
      url: response.ok ? data?.url : null,
      error: response.ok ? null : (data?.detail || "checkout creation failed")
    };
  } catch (err) {
    return { ok: false, configured: true, status: 500, error: err.message };
  }
}

export function extractWebhookEvent(payload) {
  const isMock = payload?.is_mock || payload?.isMock || false;
  const type = payload?.type || "unknown";
  
  let eventName = "unknown";
  if (isMock || type === "order.created") {
    eventName = "order_created";
  } else if (type === "order.refunded") {
    eventName = "order_refunded";
  }

  const data = payload?.data || {};
  const customer = data?.customer || {};

  return {
    isMock,
    eventName,
    providerEventId: payload?.id || data?.id || "evt_" + Math.random().toString(36).substring(2, 15),
    email: customer?.email || payload?.email || payload?.customer_email || "customer@example.com",
    variantId: data?.product_price_id || data?.product_id || payload?.variant_id || payload?.variant || "commercial",
    amount: data?.total_amount ? (data.total_amount / 100).toFixed(2) : (payload?.amount || "29.00"),
    orderId: data?.id || payload?.order_id || "tx_" + Math.random().toString(36).substring(2, 15),
    status: (data?.status || payload?.status || "paid").toLowerCase(),
  };
}

export function generateLocalLicenseKey() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const segment = () => {
    let s = "";
    for (let i = 0; i < 4; i++) {
      s += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return s;
  };
  return `VFXM-${segment()}-${segment()}-${segment()}-${segment()}`;
}

export async function verifyPolarWebhook(request, env, rawBody) {
  const secret = env.POLAR_WEBHOOK_SECRET;
  if (!secret || secret.startsWith("mock_")) {
    return true;
  }

  const id = request.headers.get("webhook-id") || request.headers.get("svix-id");
  const timestamp = request.headers.get("webhook-timestamp") || request.headers.get("svix-timestamp");
  const signature = request.headers.get("webhook-signature") || request.headers.get("svix-signature");

  if (!id || !timestamp || !signature) {
    return false;
  }

  try {
    let base64Secret = secret;
    if (secret.startsWith("whsec_")) {
      base64Secret = secret.substring(6);
    } else if (secret.startsWith("polar_whs_")) {
      base64Secret = secret.substring(10);
    }

    // Add base64 padding if missing
    base64Secret = base64Secret.padEnd(base64Secret.length + (4 - (base64Secret.length % 4)) % 4, "=");

    const secretBytes = base64ToBytes(base64Secret);
    const signedContent = `${id}.${timestamp}.${rawBody}`;

    const key = await crypto.subtle.importKey(
      "raw",
      secretBytes,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const signedBuffer = await crypto.subtle.sign(
      "HMAC",
      key,
      new TextEncoder().encode(signedContent)
    );

    const computedSignature = btoa(String.fromCharCode(...new Uint8Array(signedBuffer)));
    const passedSignatures = signature.split(" ");
    
    for (const sig of passedSignatures) {
      const parts = sig.split(",");
      if (parts.length === 2 && parts[0] === "v1" && parts[1] === computedSignature) {
        return true;
      }
    }
    return false;
  } catch (err) {
    console.error("Svix signature verification failed:", err);
    return false;
  }
}
