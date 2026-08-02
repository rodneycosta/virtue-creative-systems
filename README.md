# Virtue Creative Systems

Official website, store frontend, and release infrastructure for Virtue FX Manager.

Last updated: 2026-06-15

---

## Repository Contents

| Directory / File | Purpose |
|---|---|
| `WEBSITE/` | **Production website** — vanilla HTML/CSS/JS. This is the ONLY source deployed to `virtuecreativesystems.com`. |
| `cloudflare/license-worker/` | Cloudflare Worker scaffold for licensing and store backend |
| `docs/` | Internal planning and implementation docs |
| `scripts/` | Build validation and config generation scripts |

---

## ⚠️ Critical Deployment Rule

> **The live production website (`virtuecreativesystems.com`) MUST only be deployed from `WEBSITE/`.**  
> The Next.js project at `REAPER_PLUGINS/VIRTUE_FX_MANAGER/website` is **deprecated and must NEVER be deployed**.  
> See `DEPLOYMENT_RULES.md` for full details.

**Deploy command (always run from this directory):**
```sh
npx wrangler pages deploy WEBSITE --project-name virtue-fx-manager --branch main
```

---

## Stack

- Static website in `WEBSITE/` — vanilla HTML/CSS/JS
- Cloudflare Pages — hosting
- Cloudflare Worker — license/store backend (`cloudflare/license-worker/`)
- Cloudflare D1 — license, activation, webhook event database
- Polar.sh — payment processing, checkout, and webhook license generation

---

## Local Development

```sh
# Install dependencies
npm install

# Run local website server
python3 -m http.server 4173 -d WEBSITE

# Run Worker tests
npm run test:worker

# Validate website (links, meta, SEO)
npm run check
```

Open `http://127.0.0.1:4173/` after starting the local server.

---

## Store Mode

The website never handles card data and never activates licenses. It opens Polar checkout in one of two safe ways:

1. **Static hosted checkout URLs** — configured with `VFXM_PERSONAL_CHECKOUT_URL`, `VFXM_STUDIO_CHECKOUT_URL`, or `STORE_CHECKOUT_URL`.
2. **Server-created checkout URLs** — through the Worker endpoint `POST /v1/checkout/create`, configured with `VFXM_CHECKOUT_API_URL`.

If checkout config is missing, the site shows `Store setup pending` instead of a fake purchase flow.

---

## Current System State (August 2026)

| System | Status |
|---|---|
| Website (static) | ✅ Deployed at virtuecreativesystems.com |
| Trial system | ✅ Hardware-bound signed JWT trial active |
| License Worker | ✅ Production-enabled and deployed |
| Polar.sh checkout | ✅ Configured and active |
| D1 database | ✅ Provisioned and active |
| Public installer downloads | ✅ Integrated and active |

---

## Key Documents

| Document | Purpose |
|---|---|
| `DEPLOYMENT_RULES.md` | Critical rule about which directory deploys to production |
| `LICENSE_ACTIVATION.md` | How trial and paid activation work (full reference) |
| `INSTALL.md` | macOS and Windows install instructions |
| `UNINSTALL.md` | How to uninstall and remove trial/license data |
| `SUPPORT.md` | Support contact and troubleshooting |
| `RELEASE_NOTES.md` | Current build state and known issues |
| `CHANGELOG.md` | History of changes |
| `docs/step-by-step-release-setup.md` | Complete guide to configure Lemon Squeezy, D1, R2, and the app activation flow |
| `VIRTUE_FX_MANAGER/SECURE_TRIAL_SYSTEM_PLAN.md` | Plan to replace email+OTP trial with hardware-bound Ed25519 signed token |
| `VIRTUE_FX_MANAGER/TRIAL_SYSTEM_CURRENT_STATE.md` | Full reference for the current interim trial system |
