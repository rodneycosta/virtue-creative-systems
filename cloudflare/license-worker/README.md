# VFxM License Worker

Cloudflare Worker for Virtue FX Manager official release checkout Link creation, app-side licensing, and protected downloads.

## Routes

- `GET /health`
- `POST /v1/checkout/create`
- `POST /webhooks/polar`
- `POST /v1/license/activate`
- `POST /v1/license/validate`
- `POST /v1/license/deactivate`
- `GET /v1/license/status`
- `GET /v1/releases/latest`
- `POST /v1/download/request`
- `GET /v1/download/file/:id`

## Security Model

- Webhooks are verified using Svix Standard Webhooks signature verification.
- Checkout session creation uses Polar access token only inside the Worker.
- Raw license keys/passkeys are never stored.
- License keys are stored as `HMAC-SHA256(secret, license_key)`.
- Customer email is optional and stored only as an HMAC hash.
- Raw machine identifiers are not accepted; the VFxM app must send a privacy-safe `machine_hash`.
- Offline use is represented by signed ES256 entitlement tokens.
- Release files can be public for the first launch, because activation happens inside VFxM.
- If protected downloads are enabled later, R2 files are delivered through short-lived signed Worker URLs, not raw bucket URLs.

## Local Commands

- Run tests: `npm test`
- Apply migrations locally: `wrangler d1 migrations apply vfxm-licenses --local`
- Run worker: `wrangler dev`

## Deploy Checklist

1. Create the D1 database and update `wrangler.toml`.
2. Create the private R2 bucket and update `wrangler.toml`.
3. Apply migrations locally and in staging.
4. Configure Worker secrets from `.env.example`.
5. Configure Polar access token and webhook URL.
6. Upload a test release artifact to public hosting or R2.
7. Insert a matching `release_files` row with version, platform, checksum, and either `public_download_url` or `r2_key`.
8. Run a Polar test checkout session.
9. Confirm webhook idempotency and license sync.
10. Activate, validate, deactivate, and request a protected download using a staging VFxM build.

