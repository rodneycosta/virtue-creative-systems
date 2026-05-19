# Virtue Creative Systems

Official website, store frontend, and release infrastructure for Virtue FX Manager.

## Stack

- Static website in `WEBSITE/`
- Cloudflare Pages-compatible build validation
- Cloudflare Worker licensing/store backend in `cloudflare/license-worker/`
- Lemon Squeezy planned for hosted checkout, merchant-of-record payments, and license keys

## Local Commands

```sh
npm run build
npm run test:worker
npm run check
python3 -m http.server 4173 -d WEBSITE
```

Open `http://127.0.0.1:4173/` after starting the local server.

## Store Mode

The website never handles card data and never activates licenses. It can open Lemon Squeezy checkout in two safe ways:

1. Static hosted checkout URLs configured with `VFXM_PERSONAL_CHECKOUT_URL`, `VFXM_STUDIO_CHECKOUT_URL`, or `STORE_CHECKOUT_URL`.
2. Server-created checkout URLs through the Worker endpoint `POST /v1/checkout/create`, configured with `VFXM_CHECKOUT_API_URL`.

If checkout config is missing, the site shows `Store setup pending` instead of a fake purchase flow.
