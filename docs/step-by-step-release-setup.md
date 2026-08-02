# Step-By-Step VFxM Store, Download, And Licensing Setup

This guide starts from the current repository state and gets Virtue FX Manager ready for a real paid release using **Polar.sh** (Merchant of Record).

Important: the website does not activate licenses. Customers buy and download on the website, then activate inside VFxM in REAPER.

---

## 1. Confirm The Website Works Locally

```sh
cd /Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE
npm run check
python3 -m http.server 4173 -d WEBSITE
```

Open:
- `http://127.0.0.1:4173/store/`
- `http://127.0.0.1:4173/store/virtue-fx-manager/`
- `http://127.0.0.1:4173/download/vfxm/`

Expected result: the store says `Store setup pending` until Polar.sh and Cloudflare are configured.

---

## 2. Set Up Polar.sh Sandbox/Production Environment

In the Polar Dashboard (sandbox mode at `sandbox.polar.sh` or production at `polar.sh`):

1. Go to **Settings** > **Developers** and generate an **Organization Access Token (OAT)**.
2. Note your OAT (starts with `polar_oat_`).
3. Set your environment properties:
   - `POLAR_ENV=sandbox` (or `production`)
4. Create a digital product in Polar for "Virtue FX Manager Commercial". Note the **Product Price ID** (UUID).

Write down these non-secret details:
```text
POLAR_ENV=sandbox
POLAR_VFXM_COMMERCIAL_PRICE_ID=your-polar-product-price-uuid
```

---

## 3. Choose Checkout Mode

We use a hosted redirect checkout flow. When a user checks out:
1. The website calls `POST /v1/checkout/create` on the Worker with the selected variant (e.g. `commercial`).
2. The Worker calls Polar's `/v1/checkouts/` API to generate a checkout session and returns its hosted `checkout_url`.
3. The website redirects the customer's browser to the hosted Polar checkout page to pay.

Configure this Pages environment variable:
```text
VFXM_CHECKOUT_API_URL=https://YOUR-WORKER-DOMAIN/v1/checkout/create
```

---

## 4. Create Cloudflare D1 And R2

```sh
cd /Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE/cloudflare/license-worker
npx wrangler login
npx wrangler d1 create vfxm-licenses
npx wrangler r2 bucket create vfxm-releases
```

After `d1 create`, Cloudflare prints a `database_id`. Put it into:
`cloudflare/license-worker/wrangler.toml`

Replace the database configurations with your real D1 database ID and R2 bucket name.

---

## 5. Apply The D1 Migration

Local test:
```sh
npx wrangler d1 migrations apply vfxm-licenses --local
```

Production/staging:
```sh
npx wrangler d1 migrations apply vfxm-licenses --remote
```

---

## 6. Generate Secrets Locally

Run:
```sh
cd /Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE
npm run generate:secrets
```

This prints values for:
- `VFXM_LICENSE_HASH_SECRET`
- `VFXM_EMAIL_HASH_SECRET`
- `VFXM_DOWNLOAD_SIGNING_SECRET`
- `VFXM_TOKEN_PRIVATE_KEY`
- `VFXM_TOKEN_PUBLIC_KEY`

Do not save those values into the repo. Paste them into Cloudflare Worker secrets.

---

## 7. Add Cloudflare Worker Secrets

```sh
cd /Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE/cloudflare/license-worker
npx wrangler secret put POLAR_ACCESS_TOKEN
npx wrangler secret put POLAR_WEBHOOK_SECRET
npx wrangler secret put VFXM_LICENSE_HASH_SECRET
npx wrangler secret put VFXM_EMAIL_HASH_SECRET
npx wrangler secret put VFXM_TOKEN_PRIVATE_KEY
npx wrangler secret put VFXM_TOKEN_PUBLIC_KEY
npx wrangler secret put VFXM_DOWNLOAD_SIGNING_SECRET
npx wrangler secret put RESEND_API_KEY
```

Paste each value only when Wrangler asks for it. For `POLAR_WEBHOOK_SECRET`, copy it from your Polar Webhooks configuration.

---

## 8. Add Worker Variables

Edit `cloudflare/license-worker/wrangler.toml` or set equivalent Worker vars in Cloudflare:

```toml
[vars]
STORE_PROVIDER = "polar"
STORE_MODE = "test"
POLAR_ENV = "sandbox"
POLAR_VFXM_COMMERCIAL_VARIANT_ID = "your-polar-product-price-uuid"
VFXM_SITE_ORIGIN = "https://virtuecreativesystems.com"
VFXM_CHECKOUT_SUCCESS_URL = "https://virtuecreativesystems.com/checkout/success/"
```

Keep `STORE_MODE=test` until a full test checkout works.

---

## 9. Deploy The Worker

```sh
cd /Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE/cloudflare/license-worker
npx wrangler deploy
```

After deployment, test:
```sh
curl https://YOUR-WORKER-DOMAIN/health
```

Expected response:
```json
{ "ok": true, "service": "vfxm-license-worker" }
```

---

## 10. Configure Polar.sh Webhook

In your Polar dashboard under **Settings** > **Developers** > **Webhooks**:

1. Click **Add Endpoint**.
2. Set Endpoint URL to: `https://YOUR-WORKER-DOMAIN/webhooks/polar`
3. Subscribe to the `order.created` event.
4. Copy the webhook signing secret (starts with `whsec_`) and set it as `POLAR_WEBHOOK_SECRET` on your worker.

---

## 11. Connect The Website Store Buttons

In Cloudflare Pages for `virtue-creative-systems`:

1. Go to `Settings` > `Variables and Secrets`.
2. Add the Worker checkout URL:
   ```text
   VFXM_CHECKOUT_API_URL=https://YOUR-WORKER-DOMAIN/v1/checkout/create
   ```
3. Add public price labels:
   ```text
   VFXM_PERSONAL_PRICE_LABEL=$29
   VFXM_STUDIO_PRICE_LABEL=Price pending
   VFXM_NFR_PRICE_LABEL=By approval
   ```
4. Redeploy the Pages site.

Expected result: `/store/virtue-fx-manager/` changes from `Store setup pending` to active buy buttons.

---

## 12. Add The Release Download

Set Cloudflare Pages env vars:
- `VFXM_PUBLIC_DOWNLOAD_URL`
- `VFXM_RELEASE_VERSION`
- `VFXM_RELEASE_PLATFORM`
- `VFXM_RELEASE_FILE_NAME`
- `VFXM_RELEASE_DATE`
- `VFXM_RELEASE_SHA256`

---

## 13. VFxM App Licensing Work

The VFxM desktop C++ app must:
1. Show activation dialog inside REAPER.
2. Ask for license key and send activation request to `POST /v1/license/activate`.
3. Store the signed entitlement token locally.
4. Verify the token offline using the compiled-in public key `VFXM_TOKEN_PUBLIC_KEY`.
5. Grace-period logic locks app if validation fails for > 10 days.

---

## 14. End-To-End Staging Test

In Polar sandbox environment:
1. Trigger a test checkout and complete it.
2. Verify that the Polar webhook lands in your Cloudflare Worker.
3. Confirm that the Worker generates a license key and emails it to the user.
4. Confirm D1 has the license hash.
5. Activate the license key inside the VFxM app settings inside REAPER.
6. Verify offline validation and deactivation.

---

## 15. Switch To Live

Only after the full end-to-end test passes:
1. Change `STORE_MODE=live` and `POLAR_ENV=production`.
2. Replace credentials with live Polar Organization Access Tokens and live webhook secrets.
3. Redeploy Worker and Pages.
4. Confirm key generation and activation with a real purchase.
