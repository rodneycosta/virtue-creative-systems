# Virtue FX Manager Release Notes

Last updated: 2026-06-15

---

## Release Status

Virtue FX Manager has not yet shipped a public commercial release. The app is in pre-release (RC1 candidate) state.

---

## Current Build State (June 2026)

| Item | Status |
|---|---|
| macOS build | ✅ Working — delivered to `/Users/rodneycosta/Documents/DEVELOPMENT/VIRTUE_CREATIVE/WEBSITE/downloads/` |
| Windows build | ✅ Compiling — known issues with thumbnail capture |
| Trial system | ✅ Hardware-bound Ed25519 signed JWT system (Active) |
| Paid licensing | ✅ Enabled in builds (`VIRTUE_ENABLE_LICENSE=ON`) |
| Public installer | 🔲 Not published — awaiting RC sign-off |

---

## Known Issues (Pre-Release)

- **[Windows] Manual thumbnail capture crashes REAPER** — must not ship until fixed.
- **[Windows] Auto thumbnail capture misses non-native-JS plugins** — Waves and similar SDK-based plugins are not captured by the auto-capture system. Only native REAPER JS plugins are captured.

---

## When the First Official Release is Available

The official release notes will include:

- Version number
- Release channel: `stable`, `rc`, or `beta`
- Platform (macOS / Windows)
- Installer file names
- SHA-256 checksums
- Release date
- Minimum supported REAPER version
- Installation notes
- Fixed issues and known limitations

> **Rule**: Do not mark any build as an official release until checkout, installer delivery, app-side activation, deactivation, validation, offline grace, and the full manual RC test plan have passed on both platforms.
