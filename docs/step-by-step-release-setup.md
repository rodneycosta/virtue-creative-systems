# Step-By-Step VFxM Store, Download, And Licensing Setup

This guide starts from the current repository state and gets Virtue FX Manager ready for a real paid release.

Important: the website does not activate licenses. Customers buy and download on the website, then activate inside VFxM in REAPER.

## 0. Revoke The Exposed Lemon Squeezy Key

The API key pasted into chat must be treated as compromised.

1. Open Lemon Squeezy.
2. Go to `Settings` > `API`.
3. Delete/revoke the exposed API key.
4. Create a new API key later in this guide.
5. Do not paste the new key into chat, GitHub, or any file in this repo.

## 1. Confirm The Website Works Locally

```sh
cd /Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE
npm run check
python3 -m http.server 4173 -d WEBSITE
```

Open:

```text
http://127.0.0.1:4173/store/
http://127.0.0.1:4173/store/virtue-fx-manager/
http://127.0.0.1:4173/download/vfxm/
```

Expected result: the store says `Store setup pending` until Lemon Squeezy and Cloudflare are configured.

## 2. Create The Lemon Squeezy Product

In Lemon Squeezy:

1. Create a store if you do not already have one.
2. Create a product named `Virtue FX Manager`.
3. Product category/description:
   - `Visual Plugin Manager for REAPER`
   - Do not describe it as a universal DAW tool.
4. Create variants:
   - `Personal License`
   - `Studio License`
   - `Creator / NFR License`, optional or private
   - `Trial`, only later if VFxM app trial logic is implemented
5. For each paid variant, enable license keys.
6. Set activation limits:
   - Personal: `2`
   - Studio: your chosen studio seat count
   - NFR: your chosen policy
7. Set success URL:
   - `https://virtuecreativesystems.com/checkout/success/`
8. Set receipt/download button URL:
   - `https://virtuecreativesystems.com/download/vfxm/`

Write down these non-secret IDs:

```text
LEMONSQUEEZY_STORE_ID=
LEMONSQUEEZY_VFXM_PRODUCT_ID=
LEMONSQUEEZY_VFXM_PERSONAL_VARIANT_ID=
LEMONSQUEEZY_VFXM_STUDIO_VARIANT_ID=
LEMONSQUEEZY_VFXM_NFR_VARIANT_ID=
```

These IDs are safe to share with me. API keys and webhook secrets are not.

## 3. Choose Checkout Mode

Use Option A first if you want the fastest path.

### Option A: Hosted Checkout URLs

In Lemon Squeezy, copy each hosted checkout URL and add them to Cloudflare Pages environment variables:

```text
VFXM_PERSONAL_CHECKOUT_URL=
VFXM_STUDIO_CHECKOUT_URL=
VFXM_NFR_CHECKOUT_URL=
VFXM_PERSONAL_PRICE_LABEL=
VFXM_STUDIO_PRICE_LABEL=
VFXM_NFR_PRICE_LABEL=
```

This makes the static website buttons open Lemon Squeezy directly.

### Option B: Worker-Created Checkout

Use this if you want the Worker to create checkout URLs through the Lemon Squeezy API.

Set this Cloudflare Pages public env var:

```text
VFXM_CHECKOUT_API_URL=https://YOUR-WORKER-DOMAIN/v1/checkout/create
```

Set the Lemon Squeezy API key only as a Worker secret, never in Pages.

## 4. Create Cloudflare D1 And R2

```sh
cd /Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE/cloudflare/license-worker
npx wrangler login
npx wrangler d1 create vfxm-licenses
npx wrangler r2 bucket create vfxm-releases
```

After `d1 create`, Cloudflare prints a `database_id`. Put it into:

```text
cloudflare/license-worker/wrangler.toml
```

Replace:

```text
database_id = "replace-with-cloudflare-d1-database-id"
bucket_name = "replace-with-vfxm-release-bucket"
```

with your real D1 database ID and R2 bucket name.

## 5. Apply The D1 Migration

Local test:

```sh
npx wrangler d1 migrations apply vfxm-licenses --local
```

Production/staging:

```sh
npx wrangler d1 migrations apply vfxm-licenses --remote
```

## 6. Generate Secrets Locally

Run:

```sh
cd /Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE
npm run generate:secrets
```

This prints values for:

```text
VFXM_LICENSE_HASH_SECRET
VFXM_EMAIL_HASH_SECRET
VFXM_DOWNLOAD_SIGNING_SECRET
LEMONSQUEEZY_WEBHOOK_SECRET
VFXM_TOKEN_PRIVATE_KEY
VFXM_TOKEN_PUBLIC_KEY
```

Do not save those values into the repo. Paste them into Cloudflare Worker secrets.

## 7. Add Cloudflare Worker Secrets

```sh
cd /Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE/cloudflare/license-worker
npx wrangler secret put LEMONSQUEEZY_API_KEY
npx wrangler secret put LEMONSQUEEZY_WEBHOOK_SECRET
npx wrangler secret put VFXM_LICENSE_HASH_SECRET
npx wrangler secret put VFXM_EMAIL_HASH_SECRET
npx wrangler secret put VFXM_TOKEN_PRIVATE_KEY
npx wrangler secret put VFXM_TOKEN_PUBLIC_KEY
npx wrangler secret put VFXM_DOWNLOAD_SIGNING_SECRET
```

Paste each value only when Wrangler asks for it.

## 8. Add Worker Variables

Edit `cloudflare/license-worker/wrangler.toml` or set equivalent Worker vars in Cloudflare:

```text
LEMONSQUEEZY_STORE_ID=
LEMONSQUEEZY_VFXM_PRODUCT_ID=
LEMONSQUEEZY_VFXM_PERSONAL_VARIANT_ID=
LEMONSQUEEZY_VFXM_STUDIO_VARIANT_ID=
LEMONSQUEEZY_VFXM_NFR_VARIANT_ID=
STORE_MODE=test
VFXM_SITE_ORIGIN=https://virtuecreativesystems.com
VFXM_CHECKOUT_SUCCESS_URL=https://virtuecreativesystems.com/checkout/success/
VFXM_RECEIPT_DOWNLOAD_URL=https://virtuecreativesystems.com/download/vfxm/
```

Keep `STORE_MODE=test` until a full test checkout works.

## 9. Deploy The Worker

```sh
cd /Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE/cloudflare/license-worker
npx wrangler deploy
```

After deployment, test:

```sh
curl https://YOUR-WORKER-DOMAIN/health
```

Expected:

```json
{ "ok": true, "service": "vfxm-license-worker" }
```

## 10. Configure Lemon Squeezy Webhook

In Lemon Squeezy:

1. Go to `Settings` > `Webhooks`.
2. Add webhook URL:
   - `https://YOUR-WORKER-DOMAIN/webhooks/lemonsqueezy`
3. Use the same `LEMONSQUEEZY_WEBHOOK_SECRET` value you put into Cloudflare.
4. Enable events:
   - `order_created`
   - `order_refunded`
   - `license_key_created`
   - `license_key_updated`
   - subscription events only if you later use subscriptions

## 11. Connect The Website Store Buttons

In Cloudflare Pages for `virtue-creative-systems`:

1. Go to `Workers & Pages`.
2. Open the Pages project.
3. Go to `Settings` > `Variables and Secrets`.
4. Add either hosted checkout URLs:

```text
VFXM_PERSONAL_CHECKOUT_URL=
VFXM_STUDIO_CHECKOUT_URL=
VFXM_NFR_CHECKOUT_URL=
```

or the Worker checkout URL:

```text
VFXM_CHECKOUT_API_URL=https://YOUR-WORKER-DOMAIN/v1/checkout/create
```

5. Add public price labels:

```text
VFXM_PERSONAL_PRICE_LABEL=$YOUR_PRICE
VFXM_STUDIO_PRICE_LABEL=$YOUR_PRICE
VFXM_NFR_PRICE_LABEL=By approval
```

6. Redeploy the Pages site.

Expected result: `/store/virtue-fx-manager/` changes from `Store setup pending` to real buy buttons.

## 12. Add The Release Download

For the first release, simplest path is a public installer link because VFxM itself requires activation.

Set Cloudflare Pages env vars:

```text
VFXM_PUBLIC_DOWNLOAD_URL=
VFXM_RELEASE_VERSION=
VFXM_RELEASE_PLATFORM=
VFXM_RELEASE_FILE_NAME=
VFXM_RELEASE_DATE=
VFXM_RELEASE_SHA256=
```

If you want protected R2 downloads later:

1. Upload the installer to R2.
2. Insert a `release_files` row with `r2_key`.
3. Use `/v1/download/request` from the app or authenticated flow.

Do not create a public website form asking for a license key.

## 13. VFxM App Licensing Work

This requires the VFxM app source code.

The app must:

1. Show activation dialog inside REAPER.
2. Ask for license/passkey inside VFxM.
3. Send activation request to `POST /v1/license/activate`.
4. Store signed entitlement token locally.
5. Verify the token offline with `VFXM_TOKEN_PUBLIC_KEY`.
6. Show grace-period status.
7. Let the user deactivate this computer inside VFxM.
8. Never log raw license keys or raw machine IDs.

## 14. End-To-End Test Before Selling

Run this in Lemon Squeezy test mode:

1. Complete a test purchase.
2. Confirm license key is generated by Lemon Squeezy.
3. Confirm webhook lands in Cloudflare Worker.
4. Confirm D1 has a license record.
5. Download the installer from `/download/vfxm/`.
6. Open VFxM inside REAPER.
7. Activate inside VFxM.
8. Restart REAPER and confirm local entitlement works.
9. Disconnect internet and confirm offline grace works.
10. Deactivate this computer inside VFxM.
11. Reactivate.
12. Try activation limit overflow.
13. Refund/disable the test license and confirm validation eventually blocks access according to policy.
14. Confirm the website never asks for license activation.

## 15. Switch To Live

Only after the full end-to-end test passes:

1. Change `STORE_MODE=live`.
2. Use live Lemon Squeezy checkout/API credentials.
3. Redeploy Worker.
4. Redeploy Cloudflare Pages.
5. Make one real low-risk purchase test.
6. Confirm receipt, license, download, activation, offline grace, and deactivation.
