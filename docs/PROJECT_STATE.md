# VFxM Project State - June 2026

This document records the current phase, environment details, configuration, and verification checklist for the Virtue FX Manager (VFxM) licensing, worker backend, and website deployment. In case of an agent environment reset, use this document to understand the active setup and skip repetitive exploration.

---

## 1. System Overview

- **Product**: Virtue FX Manager (VFxM) – a native C++ visual plugin manager extension for Cockos REAPER.
- **Worker Backend**: A Cloudflare Worker at `cloudflare/license-worker` that implements license validation, offline grace logic, Polar.sh checkout creation, webhooks, and contact form submissions.
- **Website**: A React-based web interface running in UMD mode (compiled in-browser by Babel standalone) located in `WEBSITE/` (production) and `prototype/` (staging/testing).

---

## 2. Active Environments & Worker Info

### Cloudflare Worker
- **Name**: `virtue-licensing-service`
- **Worker Domain**: `https://virtue-licensing-service.virtuecreativesystems.workers.dev`
- **Staging/Staging Worker Name (Alternative)**: `vfxm-license-worker`
- **Main Code Path**: `cloudflare/license-worker/src/index.js`
- **Configuration**: `cloudflare/license-worker/wrangler.toml`

### Databases (Cloudflare D1)
1. **Active Database**: `vfxm-licenses`
   - **ID**: `5c3f4e69-56b8-46b2-a71d-bc90c94c64f7`
   - **Binding**: `DB`
   - **Status**: Remote and contains correct schema with `provider_license_id` column.
2. **Old/Deprecated Database**: `virtue-license-db` (ID: `cf1c491d-ce53-41d6-ac88-28f26f6328e9`)
   - *Do not bind to this database; it is missing columns and causes 500 exceptions on recovery.*

### Website Deployment (Cloudflare Pages)
- **Production Domain**: `https://www.virtuecreativesystems.com/` (or `virtuecreativesystems.com`)
- **Pages Project Name**: `virtue-fx-manager`
- **Branch**: `main`
- **Vanilla Path**: `WEBSITE/` (All live changes must be pushed here)
- **Staging Path**: `prototype/` (Used for initial iteration and layout checks)

---

## 3. Worker Secrets & Configuration

The deployed worker (`virtue-licensing-service`) has the following production secrets configured:
- `VFXM_LICENSE_HASH_SECRET`: Hashes license keys before D1 lookup to protect customer privacy.
- `VFXM_EMAIL_HASH_SECRET`: Hashes customer emails for lookup/recovery.
- `VFXM_DOWNLOAD_SIGNING_SECRET`: Signs dynamic download urls.
- `VFXM_TOKEN_PRIVATE_KEY` / `VFXM_TOKEN_PUBLIC_KEY`: Elliptic Curve (ES256) keys for signing entitlement JWT tokens returned to the app.
- `RESEND_API_KEY`: Production Resend key for actual customer email delivery.
- `POLAR_ACCESS_TOKEN` / `POLAR_WEBHOOK_SECRET`: Connects Worker to Polar.sh checkouts.

---

## 4. Current Website State ("Coming Soon" Mode)

We are **not selling anything currently**, so all customer-facing checkout buttons and trial downloads have been replaced by static "Coming soon" state text or labels to prevent checkout failures:

### Modifications Deployed:
- **Hero actions (`hero.jsx`)**: Main CTA changed to **`Coming soon`** (disabled, pointer-events: none). Checklist says **`Trial (Coming soon)`**.
- **Header Actions (`app.jsx` & `store.jsx`)**: Actions contain `Trial (Coming soon)` and `Buy (Coming soon)` to avoid confusing duplicates. Hrefs are set to `#` or disabled.
- **Footer Links (`app.jsx`, `store.jsx`, `contact.jsx`)**: Footer lists `Trial (Coming soon)` and `Buy (Coming soon)`.
- **EULA Auto-load**: The EULA links are set to `/store/?show_eula=true` so that the modal popup renders automatically on load.
- **Disclaimer footnote**: Updated on all footers to match the exact wording requested (specifying Cockos/third-party plugin thumbnails are for identification/comparison only).
- **Contact page (`contact/index.html` & `contact.jsx`)**: Fully styled React page mirroring the primary site layout. Connects cleanly to the backend `v1/contact/submit` worker endpoint.

---

## 5. Verification Commands

Run the following commands in the workspace root to check for build errors, HTML validator problems, or broken unit tests:

```sh
# Generate site config & validate HTML references
npm run check

# Manual deployment of WEBSITE changes to Cloudflare Pages
npx wrangler pages deploy WEBSITE --project-name virtue-fx-manager --branch main

# Run license worker unit tests locally
cd cloudflare/license-worker
npm test
```

---

## 6. How to Turn on Live Sales (Transition Checklist)

When ready to transition from "Coming Soon" to Live Sales:

1. **Polar Products**: Configure live digital products in Polar.sh and copy the price IDs.
2. **Update store links**:
   - Restore the product checkout URLs in `store.jsx` and `pricing.jsx`.
   - Restore the Trial download url path.
3. **Change CTA labels**:
   - Revert "Coming soon" buttons in headers/footers/cards back to `Buy now !` and `Download Trial`.
4. **Deploy Page Changes**:
   - Run `npm run check` and redeploy using `npx wrangler pages deploy WEBSITE --project-name virtue-fx-manager --branch main`.
