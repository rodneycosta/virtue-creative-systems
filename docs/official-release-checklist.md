# VFxM Official Release Checklist

## Website

- [x] Product page route exists: `/products/virtue-fx-manager/`
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

## Lemon Squeezy

- [ ] Create VFxM product
- [ ] Enable license keys
- [ ] Create Personal, Studio, Creator/NFR, and optional Trial variants
- [ ] Configure hosted checkout URL or server-side checkout creation
- [ ] Configure success URL: `/checkout/success/`
- [ ] Configure cancel URL: `/checkout/cancel/`
- [ ] Configure webhook URL: `/webhooks/lemonsqueezy`
- [ ] Add webhook secret to Worker secrets

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
