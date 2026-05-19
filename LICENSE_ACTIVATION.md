# Virtue FX Manager License Activation

VFxM official release licensing is designed around Lemon Squeezy license keys and a Cloudflare Worker gateway.

## Activation

The app sends:

- license/passkey entered by the customer
- privacy-safe `machine_hash`
- platform
- app version
- product code: `vfxm`
- optional user-provided device label

The Worker:

- rejects malformed requests
- hashes the license/passkey with HMAC-SHA256
- validates status from D1 and/or Lemon Squeezy
- enforces activation limits
- treats the same machine as a refresh, not a new seat
- returns a signed entitlement token

## Offline Grace

Paid licenses default to a 14-day offline grace period after successful validation, controlled by `VFXM_DEFAULT_GRACE_DAYS`.

The VFxM app must verify the signed entitlement token offline before unlocking functionality.

## Deactivation

Users should deactivate from inside VFxM before moving computers. The app must delete or invalidate the local entitlement token after deactivation.

## Blocker

This repository does not contain the VFxM application source code, so the in-app activation dialog, local credential storage, token verification, and `VIRTUE_ENABLE_LICENSE=ON` release build flag cannot be implemented here yet.
