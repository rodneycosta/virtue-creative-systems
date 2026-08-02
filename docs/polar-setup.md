# Polar.sh Setup For VFxM

This guide details the payment and keygen architecture utilizing Polar.sh (Merchant of Record) and local licensing in the Cloudflare Worker.

## Polar Keys & Products

1. Sign up/log in to the **Polar Dashboard** (sandbox at `sandbox.polar.sh` or production at `polar.sh`).
2. Go to **Settings** > **Developers** > **Tokens** and generate an **Organization Access Token (OAT)**. Note this token (starts with `polar_oat_`, used as `POLAR_ACCESS_TOKEN`).
3. Set the environment:
   - `POLAR_ENV=sandbox` (or `production`)
4. Create your digital product (e.g. "Virtue FX Manager Commercial") in the Polar catalog. Note the **Price ID** (UUID), which will be configured in the Worker settings.

## Website Checkout Integration

Polar.sh handles the checkout experience via a secure hosted checkout page:

1. The user selects a license on `/store/virtue-fx-manager/` and clicks "Buy".
2. The website makes a `POST` request to `/v1/checkout/create` on your Cloudflare Worker with the selected variant (e.g. `commercial`).
3. The Worker calls Polar's `/v1/checkouts/` API and returns the hosted `checkout_url`.
4. The website redirects the customer's browser to the hosted Polar checkout page to pay:
   ```javascript
   window.location.href = data.checkout_url;
   ```

## Webhooks and Key Generation

Configure a Polar webhook pointing to:

```text
POST https://YOUR-WORKER-DOMAIN/webhooks/polar
```

Under **Settings** > **Developers** > **Webhooks**, subscribe to the `order.created` event.

### Webhook Signature Verification (Svix Specification)
Polar.sh webhooks follow the **Standard Webhooks** specification. Every request contains:
- `webhook-id`: Unique message ID
- `webhook-timestamp`: Unix epoch timestamp
- `webhook-signature`: HMAC-SHA256 signature prefixed with `v1,`

The Worker verifies the signature manually using Web Crypto HMAC-SHA256 to ensure the payload is authentic.

### License & Delivery Flow
- When the webhook processes a successful `order.created` event, the Worker generates a unique license key (`VFXM-XXXX-XXXX-XXXX-XXXX`).
- The Worker hashes the key with HMAC-SHA256 and inserts it into D1.
- The Worker calls the Resend API to deliver the key to the customer's email.

## App Activation

The VFxM desktop C++ app makes requests directly to `/v1/license/activate`, `/v1/license/validate`, and `/v1/license/deactivate`.
- All requests are processed locally in D1 on the Worker.
- There are no downstream external API dependencies during the activation flow, ensuring fast response times and maximum resilience.
