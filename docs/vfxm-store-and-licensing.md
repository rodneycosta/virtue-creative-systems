# VFxM Store and Licensing Plan

This is the implementation direction for selling Virtue FX Manager without making the website look complicated.

## Current status

- Product: Virtue FX Manager for REAPER
- Release state: official release infrastructure in progress
- Website store: `/store/virtue-fx-manager/`
- Payments: Lemon Squeezy setup pending
- License keys: Lemon Squeezy license-key product setup pending
- License API: Cloudflare Worker scaffold added under `cloudflare/license-worker`
- License database: Cloudflare D1 migration scaffold added
- Downloads: public installer downloads are acceptable for first release; optional R2-backed protected URL scaffold exists
- App activation: blocked until the VFxM app source code is provided
- Installer delivery: blocked until tested release artifacts exist

## Recommended first paid-release flow

1. Customer visits `/store/virtue-fx-manager/`.
2. Customer chooses the Virtue FX Manager license.
3. Checkout provider processes payment.
4. A webhook creates a customer record and license record.
5. Customer receives a receipt and license/passkey from the provider.
6. VFxM asks for the license key inside the app.
7. The app calls the backend license activation endpoint.
8. The endpoint returns active / inactive / expired / blocked status.
9. The app stores a local activation token so it can keep working without checking every launch.

## Store provider decision

Pick one before implementing real checkout:

Selected direction: Lemon Squeezy for store, merchant-of-record checkout, and license keys. Cloudflare Worker, D1, and R2 are used for the VFxM-facing licensing and protected-download backend.

## License data model

Implemented D1 migration tables:

- `licenses`
- `license_activations`
- `webhook_events`
- `release_files`
- `download_events`
- `admin_audit_log`

Never store raw license keys, raw passkeys, raw machine serials, raw card data, or unnecessary personal data.

## Activation API

Worker endpoints:

- `GET /health`
- `POST /v1/license/activate`
- `POST /v1/license/validate`
- `POST /v1/license/deactivate`
- `GET /v1/license/status`
- `GET /v1/releases/latest`
- `POST /v1/download/request`
- `POST /webhooks/lemonsqueezy`

Suggested activation request:

```json
{
  "licenseKey": "VFXM-XXXX-XXXX-XXXX",
  "machineFingerprint": "hashed-machine-id",
  "appVersion": "1.0.0",
  "platform": "macos"
}
```

Suggested activation response:

```json
{
  "status": "active",
  "licenseId": "lic_123",
  "activationsRemaining": 1,
  "message": "License active"
}
```

## Cloudflare-friendly architecture

- Static site: existing `WEBSITE/`
- API: Cloudflare Worker or Pages Functions
- Database: Cloudflare D1 for customers, orders, licenses, activations, releases
- Secrets: checkout provider webhook secret, license signing secret
- File delivery: public installer download for first release, or Cloudflare R2 with signed download URLs if protected delivery is needed later

## Next implementation tasks

1. Create Lemon Squeezy product/variants/license keys.
2. Add real env/secrets in Cloudflare.
3. Create D1 database and R2 bucket.
4. Apply D1 migrations.
5. Upload a signed/tested release artifact to public hosting or R2.
6. Insert release metadata into `release_files`, using `public_download_url` for public delivery or `r2_key` for protected delivery.
7. Provide the VFxM app source repo so the app activation UI and token verification can be implemented.
8. Run the full staging checkout, webhook, activation, offline grace, deactivation, and protected-download test plan.
