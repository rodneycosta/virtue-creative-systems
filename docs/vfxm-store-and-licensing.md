# VFxM Store and Licensing Plan

This is the implementation direction for selling Virtue FX Manager without making the website look complicated.

## Current status

- Product: Virtue FX Manager for REAPER
- Release state: in development / early access not public yet
- Website store: placeholder page is live-ready
- Payments: not connected
- License keys: not generated yet
- App activation: not connected yet
- Installer delivery: not connected yet

## Recommended first paid-release flow

1. Customer visits `store.html`.
2. Customer chooses the Virtue FX Manager license.
3. Checkout provider processes payment.
4. A webhook creates a customer record and license record.
5. Customer receives a receipt, license key, and download link.
6. VFxM asks for the license key inside the app.
7. The app calls a license activation endpoint.
8. The endpoint returns active / inactive / expired / blocked status.
9. The app stores a local activation token so it can keep working without checking every launch.

## Store provider decision

Pick one before implementing real checkout:

- Stripe: strong developer control, but tax/VAT handling needs careful setup.
- Lemon Squeezy: simpler software sales and license-key style products.
- Paddle: merchant-of-record style flow, useful for global tax handling.

For a small software launch, merchant-of-record can reduce tax/admin work. If full control matters more, Stripe is cleaner technically.

## License data model

Minimum database tables:

- `customers`: email, name, checkout provider customer id, created date.
- `orders`: customer id, provider order id, product id, amount, currency, status.
- `licenses`: license key hash, customer id, product id, status, seats, activations allowed, created date.
- `activations`: license id, machine fingerprint hash, app version, platform, activated date, last check date.
- `releases`: version, platform, download url, checksum, release notes, required license status.

Never store raw license keys if avoidable. Store a hash and show the raw key only once to the customer.

## Activation API

Future endpoints:

- `POST /api/license/activate`
- `POST /api/license/check`
- `POST /api/license/deactivate`
- `GET /api/releases/latest`

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
- File delivery: Cloudflare R2 or private GitHub Releases plus signed download URLs

## Next implementation tasks

1. Choose checkout provider.
2. Decide first license policy: one user / how many machines / update period.
3. Create database schema.
4. Add webhook endpoint for paid orders.
5. Add license key generator and activation endpoints.
6. Add VFxM app activation screen.
7. Add protected installer delivery.
8. Test purchase, refund, license revoke, machine reset, and offline grace period.
