# Changelog

## Unreleased

- Added official VFxM store, download, documentation, checkout, support, and legal website routes.
- Added honest store setup states so checkout is not presented as live before Lemon Squeezy is configured.
- Added Cloudflare Worker scaffold for license activation, validation, deactivation, webhooks, releases, and protected downloads.
- Added D1 schema for licenses, activations, webhook events, release files, download events, and admin audit records.
- Added documentation-only install, activation, and license routes so website activation is not part of the public site.
- Added Worker tests for signatures, license hashing, entitlement tokens, download URL signing, activation policy, and webhook event extraction.
