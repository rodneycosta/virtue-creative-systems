# Virtue FX Manager License Activation

VFxM official release licensing is an app plus backend feature. The website explains purchase, download, and instructions only. It must not ask customers to activate a license or paste a license/passkey into a public website form.

## Activation

Activation happens inside Virtue FX Manager in REAPER. The app sends:

- license/passkey entered by the customer
- privacy-safe `machine_hash`
- platform
- app version
- product code: `vfxm`
- optional user-provided device label

The backend Worker:

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

Users should deactivate from inside VFxM before moving computers. Public website deactivation is intentionally not implemented. The app must delete or invalidate the local entitlement token after deactivation.

## Blocker

This repository does not contain the VFxM application source code, so the in-app activation dialog, local credential storage, token verification, and `VIRTUE_ENABLE_LICENSE=ON` release build flag cannot be implemented here yet.
