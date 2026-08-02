# Virtue FX Manager — License & Trial Activation

Last updated: 2026-06-15

VFxM official release uses an app-side activation system. The website explains purchase, download, and instructions only. It must not ask customers to activate a license or paste a license/passkey into a public website form.

---

## Trial System

### Current System (Hardware-Bound - Released)

The trial system uses a hardware fingerprint and a cryptographically signed Ed25519 JWT token. No email or user registration is required to start a trial. The architecture is described in full in:

`VIRTUE_FX_MANAGER/TRIAL_SYSTEM_CURRENT_STATE.md`

Key properties:
- **One-click trial start** — no email required
- **Hardware-bound** — tied to IOKit serial + CPU + MAC hash (macOS), SMBIOS UUID + volume serial + MAC hash (Windows)
- **Signed JWT token** — Ed25519 signature verified with a compiled-in public key; editing the file invalidates the signature
- **Server-authoritative** — Cloudflare Worker + D1 is the source of truth; trial cannot be reset by creating a new OS user account or restoring a VM snapshot

### Legacy System (Email + OTP - Deprecated)

The old interim trial system required an email address to send a 6-digit OTP verification code before activating a 10-day trial. This system was deprecated in June 2026 to prevent snapshot and VM resets.

---

## License Activation (Paid)

Activation happens inside Virtue FX Manager in REAPER. The app sends:

- `license_key` — passkey entered by the customer (generated locally upon Polar.sh purchase)
- `machine_hash` — privacy-safe hashed machine fingerprint
- `platform` — `macos` or `windows`
- `app_version`
- `product_code` — `vfxm`
- optional `device_label` — user-provided label (e.g. "Mac Studio")

The backend Cloudflare Worker:

- Rejects malformed or rate-limited requests
- Hashes the license key with HMAC-SHA256 (never stores raw key)
- Validates status locally against the D1 database (no external dependency during activation)
- Enforces activation limits (treats same machine as refresh, not a new seat)
- Returns a signed entitlement token

### Backend Endpoints (Cloudflare Worker)

Base URL: `https://virtue-licensing-service.virtuecreativesystems.workers.dev`

| Endpoint | Purpose |
|---|---|
| `POST /v1/trial/request-otp` | **Legacy trial (Deprecated)** — generate + email 6-digit OTP |
| `POST /v1/trial/start` | **Legacy trial (Deprecated)** — validate OTP and activate trial |
| `POST /v1/trial/init` | **Current trial** — hardware fingerprint → signed JWT token |
| `POST /webhooks/polar` | Webhook — process Polar.sh order.created events |
| `POST /v1/licenses/activate` | Paid — activate license key on this machine |
| `POST /v1/licenses/validate` | Paid — re-validate existing activation |
| `POST /v1/licenses/deactivate` | Paid — deactivate this machine (frees a seat) |

---

## Offline Grace

Paid licenses default to a **10-day offline grace period** after successful online validation, controlled by `VFXM_DEFAULT_GRACE_DAYS`.

The VFxM app verifies the signed entitlement token offline before unlocking functionality during the grace window.

Trial tokens are also verified offline via the locally stored signed JWT — no network needed on every launch.

---

## Deactivation

Users should deactivate from inside VFxM before moving computers. Public website deactivation is intentionally not implemented. The app deletes or invalidates the local entitlement token after deactivation, freeing the activation slot on the server.

---

## Implementation Status

| Feature | Status |
|---|---|
| Email + OTP trial (legacy) | ⚠️ Deprecated |
| Hardware-bound signed JWT trial (current) | ✅ Implemented and deployed |
| Paid license activation (client) | ✅ Implemented in `license.cpp` |
| Paid license activation (server) | ✅ Implemented and validated locally in D1 |
| `VIRTUE_ENABLE_LICENSE=ON` production build | ✅ Complete and released |
| Polar.sh webhook & checkout integration | ✅ Implemented and deployed |

---

## Source Files (VFxM Extension Repo)

| File | Purpose |
|---|---|
| `extension/src/license.cpp` | All trial + license C++ logic |
| `extension/src/license.hpp` | Types and function declarations |
| `extension/src/machine_id.mm` / `.cpp` | Hardware fingerprint generation |
| `extension/src/paths.cpp` | Platform data directory resolution |
| `extension/src/virtue_manager/LicenseGate.cpp` | Token verification gate |
| `extension/src/virtue_manager/UiSplash.cpp` | Trial/license splash UI |
| `licensing-backend/src/index.ts` | Cloudflare Worker — all endpoints |
