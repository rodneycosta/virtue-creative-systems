# VFxM Official Release Checklist

## Website

- [x] Product page route exists: `/products/virtue-fx-manager/`
- [x] Store catalog route exists: `/store/`
- [x] Store route exists: `/store/virtue-fx-manager/`
- [x] Download route exists: `/download/vfxm/`
- [x] Install docs route exists: `/docs/install/`
- [x] Activation docs route exists: `/docs/activation/`
- [x] License docs route exists: `/docs/license/`
- [x] Legacy `/license/` route points users to docs and contains no activation form
- [x] Support route exists: `/support/`
- [x] Checkout success/cancel routes exist
- [x] Legal draft pages exist
- [x] Checkout buttons do not pretend payment is live
- [x] Public site config can switch checkout/download links from setup mode to live mode

## Polar.sh & Local Keygen

- [ ] Obtain Polar.sh sandbox Organization Access Token (OAT) and product price IDs
- [x] Worker route exists to initiate Polar.sh checkouts: `/v1/checkout/create`
- [ ] Configure Polar.sh environment variables on Worker (`POLAR_ACCESS_TOKEN`, `POLAR_WEBHOOK_SECRET`, `POLAR_ENV`)
- [ ] Set up success redirection URL: `https://virtuecreativesystems.com/checkout/success/`
- [ ] Configure Polar.sh webhook endpoint: `https://YOUR-WORKER-DOMAIN/webhooks/polar`
- [ ] Configure Resend API Key in Worker secrets for license key email delivery

## Cloudflare

- [x] Worker scaffold created
- [x] D1 migration created
- [ ] Create production/staging D1 database
- [ ] Apply migrations
- [ ] Create private R2 bucket
- [ ] Upload tested release artifact, public or protected
- [ ] Add release row to `release_files`
- [ ] Configure Worker secrets
- [ ] Deploy staging Worker
- [ ] Run end-to-end activation/deactivation/download tests

## VFxM App

- [ ] Provide app source repository
- [ ] Compile official release with `VIRTUE_ENABLE_LICENSE=ON`
- [ ] Add activation dialog
- [ ] Store raw license only in OS credential storage, or do not store it
- [ ] Verify entitlement tokens offline
- [ ] Add deactivate-this-computer flow
- [ ] Add copy diagnostics without raw license key or raw machine ID

## Release Gate

The product is not ready for official sale until checkout, webhook receipt, license sync, app activation, validation, offline grace, app deactivation, release download, and checksum verification pass in staging.
