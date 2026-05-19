const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

function bytesToHex(bytes) {
  return [...new Uint8Array(bytes)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function hexToBytes(hex) {
  if (!/^[a-f0-9]+$/i.test(hex) || hex.length % 2 !== 0) return null;
  const bytes = new Uint8Array(hex.length / 2);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = Number.parseInt(hex.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
}

function timingSafeEqualHex(a, b) {
  const left = hexToBytes(a);
  const right = hexToBytes(b);
  if (!left || !right || left.length !== right.length) return false;
  let diff = 0;
  for (let index = 0; index < left.length; index += 1) diff |= left[index] ^ right[index];
  return diff === 0;
}

export function base64urlEncodeBytes(bytes) {
  let binary = "";
  const view = new Uint8Array(bytes);
  for (let index = 0; index < view.length; index += 1) binary += String.fromCharCode(view[index]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function base64urlDecodeBytes(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

export function base64urlEncodeJson(value) {
  return base64urlEncodeBytes(textEncoder.encode(JSON.stringify(value)));
}

export function base64urlDecodeJson(value) {
  return JSON.parse(textDecoder.decode(base64urlDecodeBytes(value)));
}

export async function hmacHex(secret, value) {
  if (!secret) throw new Error("Missing HMAC secret");
  const key = await crypto.subtle.importKey(
    "raw",
    textEncoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, typeof value === "string" ? textEncoder.encode(value) : value);
  return bytesToHex(signature);
}

export async function verifyHmacHex(secret, value, expectedHex) {
  const actual = await hmacHex(secret, value);
  return timingSafeEqualHex(actual, expectedHex || "");
}

export async function sha256Hex(value) {
  const digest = await crypto.subtle.digest("SHA-256", typeof value === "string" ? textEncoder.encode(value) : value);
  return bytesToHex(digest);
}

export async function hashLicenseKey(rawLicenseKey, secret) {
  return hmacHex(secret, String(rawLicenseKey || "").trim());
}

export async function hashEmail(email, secret) {
  const normalized = String(email || "").trim().toLowerCase();
  return normalized ? hmacHex(secret, normalized) : null;
}

function parseJwk(value) {
  if (!value) throw new Error("Missing JWK");
  if (typeof value === "object") return value;
  return JSON.parse(value);
}

export async function signEntitlementToken(payload, privateJwk) {
  const header = { alg: "ES256", typ: "JWT" };
  const unsigned = `${base64urlEncodeJson(header)}.${base64urlEncodeJson(payload)}`;
  const key = await crypto.subtle.importKey(
    "jwk",
    parseJwk(privateJwk),
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, key, textEncoder.encode(unsigned));
  return `${unsigned}.${base64urlEncodeBytes(signature)}`;
}

export async function verifyEntitlementToken(token, publicJwk, nowMs = Date.now()) {
  const parts = String(token || "").split(".");
  if (parts.length !== 3) return { valid: false, reason: "format" };

  const [encodedHeader, encodedPayload, encodedSignature] = parts;
  const header = base64urlDecodeJson(encodedHeader);
  if (header.alg !== "ES256") return { valid: false, reason: "algorithm" };

  const key = await crypto.subtle.importKey(
    "jwk",
    parseJwk(publicJwk),
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["verify"],
  );
  const unsigned = `${encodedHeader}.${encodedPayload}`;
  const verified = await crypto.subtle.verify(
    { name: "ECDSA", hash: "SHA-256" },
    key,
    base64urlDecodeBytes(encodedSignature),
    textEncoder.encode(unsigned),
  );
  if (!verified) return { valid: false, reason: "signature" };

  const payload = base64urlDecodeJson(encodedPayload);
  if (payload.expires_at && Date.parse(payload.expires_at) <= nowMs) return { valid: false, reason: "expired", payload };
  return { valid: true, payload };
}

export async function createSignedDownloadPath(secret, releaseFileId, expiresAtEpoch, licenseHash) {
  const body = `${releaseFileId}.${expiresAtEpoch}.${licenseHash || "public"}`;
  const signature = await hmacHex(secret, body);
  return { expires: expiresAtEpoch, signature };
}

export async function verifySignedDownloadPath(secret, releaseFileId, expiresAtEpoch, licenseHash, signature, nowEpoch) {
  if (Number(expiresAtEpoch) <= nowEpoch) return false;
  const body = `${releaseFileId}.${expiresAtEpoch}.${licenseHash || "public"}`;
  return verifyHmacHex(secret, body, signature);
}
