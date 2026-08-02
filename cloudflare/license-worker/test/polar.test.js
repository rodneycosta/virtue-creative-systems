import test from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { createCheckout, extractWebhookEvent, generateLocalLicenseKey, verifyPolarWebhook } from "../src/polar.js";

function computeSvixSignature(id, timestamp, body, secret) {
  const base64Secret = secret.startsWith("whsec_") ? secret.substring(6) : secret;
  const key = Buffer.from(base64Secret, "base64");
  const signedContent = `${id}.${timestamp}.${body}`;
  return crypto.createHmac("sha256", key).update(signedContent).digest("base64");
}

test("extractWebhookEvent normalizes Polar webhook payload", () => {
  const payload = {
    type: "order.created",
    timestamp: "2026-06-18T00:00:00Z",
    data: {
      id: "ord_polar123",
      total_amount: 2900,
      product_price_id: "price_com123",
      status: "paid",
      customer: {
        id: "cust_123",
        email: "customer@example.com"
      }
    }
  };

  const event = extractWebhookEvent(payload);
  assert.equal(event.eventName, "order_created");
  assert.equal(event.email, "customer@example.com");
  assert.equal(event.variantId, "price_com123");
  assert.equal(event.amount, "29.00");
  assert.equal(event.orderId, "ord_polar123");
  assert.equal(event.status, "paid");
});

test("extractWebhookEvent maps mock direct payloads", () => {
  const payload = {
    isMock: true,
    email: "mock-user@example.com",
    variant: "studio",
    amount: "49.00",
    order_id: "tx_mock456"
  };

  const event = extractWebhookEvent(payload);
  assert.equal(event.eventName, "order_created");
  assert.equal(event.email, "mock-user@example.com");
  assert.equal(event.variantId, "studio");
  assert.equal(event.amount, "49.00");
  assert.equal(event.orderId, "tx_mock456");
});

test("generateLocalLicenseKey produces valid VFXM passkeys", () => {
  const key = generateLocalLicenseKey();
  assert.match(key, /^VFXM-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/);
});

test("verifyPolarWebhook accepts valid Svix signature and rejects invalid", async () => {
  const secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"; // Base64 encoded secret bytes
  const env = { POLAR_WEBHOOK_SECRET: secret };

  const id = "msg_test123";
  const timestamp = "1700000000";
  const body = JSON.stringify({ type: "order.created", data: {} });
  
  const correctBase64 = computeSvixSignature(id, timestamp, body, secret);
  
  const mockRequest = (sigHeader, idHeader, tsHeader) => {
    return {
      headers: {
        get: (name) => {
          if (name === "webhook-signature" || name === "svix-signature") return sigHeader;
          if (name === "webhook-id" || name === "svix-id") return idHeader;
          if (name === "webhook-timestamp" || name === "svix-timestamp") return tsHeader;
          return null;
        }
      }
    };
  };

  const reqValid = mockRequest(`v1,${correctBase64}`, id, timestamp);
  const resultValid = await verifyPolarWebhook(reqValid, env, body);
  assert.equal(resultValid, true);

  const reqInvalid = mockRequest(`v1,invalid_sig_here`, id, timestamp);
  const resultInvalid = await verifyPolarWebhook(reqInvalid, env, body);
  assert.equal(resultInvalid, false);

  const reqMissing = mockRequest(null, id, timestamp);
  const resultMissing = await verifyPolarWebhook(reqMissing, env, body);
  assert.equal(resultMissing, false);
});

test("createCheckout returns mock redirect when credentials are unset", async () => {
  const env = {};
  const result = await createCheckout(env, {
    variantId: "commercial",
    redirectUrl: "https://example.com/success"
  });
  assert.equal(result.ok, true);
  assert.equal(result.url, "https://example.com/success");
});
