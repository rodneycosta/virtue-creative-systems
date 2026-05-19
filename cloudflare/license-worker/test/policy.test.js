import test from "node:test";
import assert from "node:assert/strict";
import { ERROR_CODES } from "../src/errors.js";
import { evaluateActivation, graceStatus, licenseStatusCode } from "../src/policy.js";

test("same machine activation refresh does not consume another seat", () => {
  const result = evaluateActivation({ activationLimit: 2, activeActivationCount: 2, sameMachineActive: true });

  assert.equal(result.allowed, true);
  assert.equal(result.refresh, true);
  assert.equal(result.code, ERROR_CODES.LICENSE_MACHINE_ALREADY_ACTIVE);
});

test("activation limit blocks new machines", () => {
  const result = evaluateActivation({ activationLimit: 2, activeActivationCount: 2, sameMachineActive: false });

  assert.equal(result.allowed, false);
  assert.equal(result.code, ERROR_CODES.LICENSE_ACTIVATION_LIMIT_REACHED);
});

test("license status maps disabled, expired, refunded, and active states", () => {
  assert.equal(licenseStatusCode("active"), ERROR_CODES.LICENSE_VALID);
  assert.equal(licenseStatusCode("disabled"), ERROR_CODES.LICENSE_DISABLED);
  assert.equal(licenseStatusCode("expired"), ERROR_CODES.LICENSE_EXPIRED);
  assert.equal(licenseStatusCode("refunded"), ERROR_CODES.LICENSE_REFUNDED);
});

test("offline grace reports active until the grace date passes", () => {
  assert.equal(graceStatus(new Date(Date.now() + 1000).toISOString()), ERROR_CODES.LICENSE_GRACE_ACTIVE);
  assert.equal(graceStatus(new Date(Date.now() - 1000).toISOString()), ERROR_CODES.LICENSE_GRACE_EXPIRED);
});
