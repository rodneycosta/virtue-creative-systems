const encoder = new TextEncoder();

function randomHex(byteLength = 32) {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

const pair = await crypto.subtle.generateKey(
  { name: "ECDSA", namedCurve: "P-256" },
  true,
  ["sign", "verify"],
);

const privateJwk = await crypto.subtle.exportKey("jwk", pair.privateKey);
const publicJwk = await crypto.subtle.exportKey("jwk", pair.publicKey);
const webhookSeed = await crypto.subtle.digest("SHA-256", encoder.encode(randomHex(32)));
const webhookSecret = [...new Uint8Array(webhookSeed)]
  .slice(0, 20)
  .map((byte) => byte.toString(16).padStart(2, "0"))
  .join("");

console.log("Copy these values into Cloudflare Worker secrets. Do not commit them.\n");
console.log(`VFXM_LICENSE_HASH_SECRET=${randomHex(32)}`);
console.log(`VFXM_EMAIL_HASH_SECRET=${randomHex(32)}`);
console.log(`VFXM_DOWNLOAD_SIGNING_SECRET=${randomHex(32)}`);
console.log(`LEMONSQUEEZY_WEBHOOK_SECRET=${webhookSecret}`);
console.log(`VFXM_TOKEN_PRIVATE_KEY=${JSON.stringify(privateJwk)}`);
console.log(`VFXM_TOKEN_PUBLIC_KEY=${JSON.stringify(publicJwk)}`);
