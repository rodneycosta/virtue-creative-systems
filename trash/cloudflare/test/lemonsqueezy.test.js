import test from "node:test";
import assert from "node:assert/strict";
import { createCheckout, extractWebhookEvent, normalizeLicenseApiResponse } from "../src/lemonsqueezy.js";

test("extractWebhookEvent normalizes Lemon Squeezy webhook metadata", () => {
  const event = extractWebhookEvent({
    meta: { event_name: "license_key_created", webhook_id: "evt_1" },
    data: {
      id: "lic_1",
      attributes: {
        store_id: "store_1",
        order_id: "order_1",
        product_id: "product_1",
        variant_id: "variant_1",
        customer_id: "customer_1",
        customer_email: "person@example.com",
        key: "VFXM-TEST-KEY",
        status: "active",
      },
    },
  });

  assert.equal(event.eventName, "license_key_created");
  assert.equal(event.providerEventId, "evt_1");
  assert.equal(event.licenseKeyId, "lic_1");
  assert.equal(event.email, "person@example.com");
  assert.equal(event.licenseKey, "VFXM-TEST-KEY");
  assert.equal(event.status, "active");
});

test("normalizeLicenseApiResponse extracts Lemon Squeezy license API metadata", () => {
  const normalized = normalizeLicenseApiResponse({
    activated: true,
    license_key: {
      id: 22,
      status: "active",
      activation_limit: 2,
      activation_usage: 1,
      expires_at: null,
    },
    instance: {
      id: "instance_123",
    },
    meta: {
      store_id: 10,
      order_id: 20,
      product_id: 30,
      variant_id: 40,
      customer_id: 50,
      customer_email: "buyer@example.com",
    },
  });

  assert.equal(normalized.providerLicenseId, "22");
  assert.equal(normalized.providerInstanceId, "instance_123");
  assert.equal(normalized.storeId, "10");
  assert.equal(normalized.productId, "30");
  assert.equal(normalized.variantId, "40");
  assert.equal(normalized.email, "buyer@example.com");
});

test("createCheckout posts a JSON API checkout request without exposing secrets", async () => {
  const originalFetch = globalThis.fetch;
  let captured = null;
  globalThis.fetch = async (url, init) => {
    captured = { url, init };
    return Response.json({
      data: {
        attributes: {
          url: "https://store.lemonsqueezy.com/checkout/custom/test",
        },
      },
    });
  };

  try {
    const result = await createCheckout(
      {
        LEMONSQUEEZY_API_KEY: "secret-api-key",
        LEMONSQUEEZY_STORE_ID: "123",
      },
      {
        variantId: "456",
        productName: "Virtue FX Manager",
        redirectUrl: "https://virtuecreativesystems.com/checkout/success/",
        receiptLinkUrl: "https://virtuecreativesystems.com/download/vfxm/",
        testMode: true,
      },
    );

    const body = JSON.parse(captured.init.body);
    assert.equal(result.ok, true);
    assert.equal(captured.url, "https://api.lemonsqueezy.com/v1/checkouts");
    assert.equal(captured.init.headers.Authorization, "Bearer secret-api-key");
    assert.equal(body.data.relationships.store.data.id, "123");
    assert.equal(body.data.relationships.variant.data.id, "456");
    assert.equal(body.data.attributes.product_options.enabled_variants[0], 456);
    assert.equal(body.data.attributes.test_mode, true);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
