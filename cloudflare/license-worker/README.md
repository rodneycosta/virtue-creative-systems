# VFxM License Worker

Cloudflare Worker scaffold for Virtue FX Manager official release checkout creation, app-side licensing, and protected downloads.

## Routes

- `GET /health`
- `POST /v1/checkout/create`
- `POST /webhooks/lemonsqueezy`
- `POST /v1/license/activate`
- `POST /v1/license/validate`
- `POST /v1/license/deactivate`
- `GET /v1/license/status`
- `GET /v1/releases/latest`
- `POST /v1/download/request`
- `GET /v1/download/file/:id`

## Security Model

- Webhooks are verified with Lemon Squeezy `X-Signature` HMAC SHA-256 over the raw request body.
- Checkout creation uses Lemon Squeezy server-side API keys only inside the Worker.
- Raw license keys/passkeys are never stored.
- License keys are stored as `HMAC-SHA256(secret, license_key)`.
- Customer email is optional and stored only as an HMAC hash.
- Raw machine identifiers are not accepted; the VFxM app must send a privacy-safe `machine_hash`.
- Offline use is represented by signed ES256 entitlement tokens.
- Release files can be public for the first launch, because activation happens inside VFxM.
- If protected downloads are enabled later, R2 files are delivered through short-lived signed Worker URLs, not raw bucket URLs.

## Local Commands

```sh
npm test
wrangler d1 migrations apply vfxm-licenses --local
wrangler dev
```

## Deploy Checklist

1. Create the D1 database and update `wrangler.toml`.
2. Create the private R2 bucket and update `wrangler.toml`.
3. Apply migrations locally and in staging.
4. Configure Worker secrets from `.env.example`.
5. Configure Lemon Squeezy product, variants, license keys, and webhook URL.
6. Upload a test release artifact to public hosting or R2.
7. Insert a matching `release_files` row with version, platform, checksum, and either `public_download_url` or `r2_key`.
8. Run a Lemon Squeezy test checkout.
9. Confirm webhook idempotency and license sync.
10. Activate, validate, deactivate, and request a protected download using a staging VFxM build.
