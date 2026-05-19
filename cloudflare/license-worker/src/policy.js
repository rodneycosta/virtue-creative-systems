import { ERROR_CODES } from "./errors.js";

export const VALID_LICENSE_STATUSES = new Set(["active"]);
export const BLOCKED_LICENSE_STATUS_CODES = {
  disabled: ERROR_CODES.LICENSE_DISABLED,
  expired: ERROR_CODES.LICENSE_EXPIRED,
  refunded: ERROR_CODES.LICENSE_REFUNDED,
  revoked: ERROR_CODES.LICENSE_DISABLED,
  inactive: ERROR_CODES.LICENSE_INVALID,
};

export function nowIso(nowMs = Date.now()) {
  return new Date(nowMs).toISOString();
}

export function addDaysIso(days, nowMs = Date.now()) {
  return new Date(nowMs + Number(days) * 24 * 60 * 60 * 1000).toISOString();
}

export function normalizeLicenseStatus(status) {
  return String(status || "inactive").toLowerCase();
}

export function licenseStatusCode(status) {
  const normalized = normalizeLicenseStatus(status);
  if (VALID_LICENSE_STATUSES.has(normalized)) return ERROR_CODES.LICENSE_VALID;
  return BLOCKED_LICENSE_STATUS_CODES[normalized] || ERROR_CODES.LICENSE_INVALID;
}

export function evaluateActivation({ activationLimit, activeActivationCount, sameMachineActive }) {
  if (sameMachineActive) {
    return { allowed: true, refresh: true, code: ERROR_CODES.LICENSE_MACHINE_ALREADY_ACTIVE };
  }
  if (Number(activeActivationCount) >= Number(activationLimit)) {
    return { allowed: false, refresh: false, code: ERROR_CODES.LICENSE_ACTIVATION_LIMIT_REACHED };
  }
  return { allowed: true, refresh: false, code: ERROR_CODES.LICENSE_VALID };
}

export function graceStatus(graceUntil, nowMs = Date.now()) {
  if (!graceUntil) return ERROR_CODES.LICENSE_GRACE_EXPIRED;
  return Date.parse(graceUntil) > nowMs ? ERROR_CODES.LICENSE_GRACE_ACTIVE : ERROR_CODES.LICENSE_GRACE_EXPIRED;
}

export function entitlementPayload({ license, activation, graceDays, features = [] }, nowMs = Date.now()) {
  const issuedAt = nowIso(nowMs);
  const nextCheckAt = addDaysIso(1, nowMs);
  const graceUntil = addDaysIso(graceDays, nowMs);
  return {
    product: "vfxm",
    license_hash: license.license_hash,
    activation_instance_id: activation.activation_instance_id,
    machine_hash: activation.machine_hash,
    license_status: normalizeLicenseStatus(license.status),
    tier: license.tier,
    issued_at: issuedAt,
    online_check_required_after: nextCheckAt,
    grace_until: graceUntil,
    expires_at: license.expires_at || null,
    features,
    signature_version: 1,
  };
}
