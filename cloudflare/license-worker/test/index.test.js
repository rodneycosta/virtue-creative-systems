import test from "node:test";
import assert from "node:assert/strict";
import { handleRecoverLicense, handleResetActivations } from "../src/index.js";
import { hashEmail, hashLicenseKey } from "../src/crypto.js";

test("handleRecoverLicense queries and returns matching licenses", async () => {
  const licenseSecret = "test-hash-secret";
  const email = "user@example.com";
  const emailHash = await hashEmail(email, licenseSecret);

  let capturedQuery = null;
  let capturedBind = null;

  const mockDb = {
    prepare(sql) {
      capturedQuery = sql;
      return {
        bind(...args) {
          capturedBind = args;
          return {
            async all() {
              return {
                results: [
                  {
                    provider_license_id: "VFXM-1234-5678-9012-3456",
                    tier: "studio",
                    status: "active",
                    activation_limit: 5,
                    provider_order_id: "ord_12345"
                  }
                ]
              };
            }
          };
        }
      };
    }
  };

  const env = {
    DB: mockDb,
    VFXM_LICENSE_HASH_SECRET: licenseSecret,
    RESEND_API_KEY: "mock_resend_key"
  };

  const request = {
    headers: {
      get: () => null
    },
    json: async () => ({ email })
  };

  const response = await handleRecoverLicense(request, env);
  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(data.ok, true);
  assert.equal(data.success, true);
  assert.match(capturedQuery, /activation_limit/);
  assert.match(capturedQuery, /provider_order_id/);
  assert.deepEqual(capturedBind, [emailHash]);
});

test("handleResetActivations deactivates active license installations", async () => {
  const licenseSecret = "test-hash-secret";
  const licenseKey = "VFXM-1111-2222-3333-4444";
  const licenseHash = await hashLicenseKey(licenseKey, licenseSecret);

  let queries = [];
  let binds = [];

  const mockDb = {
    prepare(sql) {
      queries.push(sql);
      return {
        bind(...args) {
          binds.push(args);
          return {
            async first() {
              if (sql.includes("SELECT * FROM licenses")) {
                return { id: 42, license_hash: licenseHash, tier: "commercial", status: "active" };
              }
              return null;
            },
            async run() {
              return { meta: { changes: 2 } };
            }
          };
        }
      };
    }
  };

  const env = {
    DB: mockDb,
    VFXM_LICENSE_HASH_SECRET: licenseSecret
  };

  // 1. Test application/x-www-form-urlencoded parsing
  const requestForm = {
    headers: {
      get: (name) => name.toLowerCase() === "content-type" ? "application/x-www-form-urlencoded" : null
    },
    text: async () => `license_key=${encodeURIComponent(licenseKey)}&instance_name=web_portal`
  };

  const responseForm = await handleResetActivations(requestForm, env);
  const dataForm = await responseForm.json();

  assert.equal(responseForm.status, 200);
  assert.equal(dataForm.ok, true);
  assert.equal(dataForm.deactivated, true);
  assert.equal(dataForm.reset_count, 2);

  // Verify that the queries executed correctly
  assert.ok(queries[0].includes("SELECT * FROM licenses"));
  assert.equal(binds[0][0], licenseHash);
  assert.ok(queries[1].includes("UPDATE license_activations"));
  assert.equal(binds[1][2], 42); // license.id
});
