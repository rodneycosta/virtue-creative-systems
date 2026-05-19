import test from "node:test";
import assert from "node:assert/strict";
import { extractWebhookEvent } from "../src/lemonsqueezy.js";

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
