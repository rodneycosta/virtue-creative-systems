# Changelog

## June 2026 — Trial System Hardening

- Hardened trial system with mandatory 6-digit OTP email verification (Phase 1 of trial security improvement).
  - Added `POST /v1/trial/request-otp` Cloudflare Worker endpoint (generates and emails OTP, stores in D1 with 15-min TTL).
  - Modified `POST /v1/trial/start` to require valid OTP before activating trial.
  - Implemented 2-phase OTP trial UI in `UiSplash.cpp`: email entry → OTP verification, with "Change Email" and "Resend Code" options.
- Added `TRIAL_SYSTEM_CURRENT_STATE.md` — authoritative reference for the current email+OTP trial architecture.
- Added `SECURE_TRIAL_SYSTEM_PLAN.md` — complete plan for hardware-bound Ed25519 signed JWT trial system (to be implemented before commercial release).
- Updated `RELEASE_BLOCKERS.md` — added trial system replacement and Windows thumbnail crash as critical blockers.
- Updated `CURRENT_BASELINE.md` — documented June 2026 session changes on top of RC1 baseline.
- Updated `RECREATE_FROM_SCRATCH.md` — revised checklist includes secure trial system and all pre-release gates.
- Updated `TECHNICAL_RECREATION_GUIDE.md` — section 7 updated to reflect OTP system and known weaknesses.
- macOS and Windows builds rebuilt and delivered to `/Volumes/NRIS/VIRTUE/`.
- **Known Windows issues found**: manual thumbnail capture crashes REAPER; auto-capture misses Waves and other non-native-JS plugins.

## Unreleased (Prior)

- Added official VFxM store, download, documentation, checkout, support, and legal website routes.
- Added honest store setup states so checkout is not presented as live before Lemon Squeezy is configured.
- Added Cloudflare Worker scaffold for license activation, validation, deactivation, webhooks, releases, and protected downloads.
- Added D1 schema for licenses, activations, webhook events, release files, download events, and admin audit records.
- Added documentation-only install, activation, and license routes so website activation is not part of the public site.
- Added Worker tests for signatures, license hashing, entitlement tokens, download URL signing, activation policy, and webhook event extraction.
