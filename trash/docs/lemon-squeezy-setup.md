# Lemon Squeezy Setup For VFxM

This is the first-release store setup for Virtue FX Manager.

## Product Setup

1. Create a Lemon Squeezy store.
2. Create product: `Virtue FX Manager`.
3. Create variants:
   - `Personal License`
   - `Studio License`
   - `Creator / NFR License`, optional/private
   - `Trial`, only if VFxM trial logic is implemented
4. Enable license-key generation on every sellable VFxM variant.
5. Set activation limits in Lemon Squeezy:
   - Personal: 2 activations
   - Studio: your chosen studio seat count
   - NFR: your chosen policy
6. Set the success URL to `https://virtuecreativesystems.com/checkout/success/`.
7. Set the receipt/download button URL to `https://virtuecreativesystems.com/download/vfxm/`.

## Website Checkout Options

Use one of these two paths.

### Option A: Hosted Checkout URLs

Put the hosted checkout URLs into Cloudflare Pages environment variables:

```sh
VFXM_PERSONAL_CHECKOUT_URL=
VFXM_STUDIO_CHECKOUT_URL=
VFXM_NFR_CHECKOUT_URL=
```

The static site will point buttons directly to Lemon Squeezy.

### Option B: Worker-Created Checkout

Set these Worker secrets/vars:

```sh
LEMONSQUEEZY_API_KEY=
LEMONSQUEEZY_STORE_ID=
LEMONSQUEEZY_VFXM_PRODUCT_ID=
LEMONSQUEEZY_VFXM_PERSONAL_VARIANT_ID=
LEMONSQUEEZY_VFXM_STUDIO_VARIANT_ID=
LEMONSQUEEZY_VFXM_NFR_VARIANT_ID=
STORE_MODE=test
```

Then set this public Cloudflare Pages env var:

```sh
VFXM_CHECKOUT_API_URL=https://YOUR-WORKER-DOMAIN/v1/checkout/create
```

The website will call the Worker to create a hosted checkout URL. The Lemon Squeezy API key stays in the Worker, never in the browser.

## Webhook Setup

Create a Lemon Squeezy webhook:

```text
POST https://YOUR-WORKER-DOMAIN/webhooks/lemonsqueezy
```

Subscribe to at least:

- `order_created`
- `order_refunded`
- `license_key_created`
- `license_key_updated`
- subscription lifecycle events only if subscription variants are used

Save the webhook signing secret as:

```sh
LEMONSQUEEZY_WEBHOOK_SECRET=
```

## App Activation

The website must not activate licenses. VFxM activates inside REAPER by calling:

```text
POST /v1/license/activate
POST /v1/license/validate
POST /v1/license/deactivate
```

The app should store only the signed entitlement token locally, verify it offline with the embedded public key, and show offline grace status in the License panel.
