# Virtue FX Manager Support

Last updated: 2026-06-15

---

## Contact

Support email: `virtuecreativesystems@gmail.com`

---

## What to Include When Contacting Support

| Field | Value |
|---|---|
| Product | Virtue FX Manager |
| App version | (shown in VFxM Settings panel) |
| Platform | macOS or Windows |
| macOS version / Windows version | |
| REAPER version | |
| Trial or paid license | |
| Activation status | |
| Error message (if any) | |
| Steps to reproduce | |

Do **not** send raw license keys, raw passkeys, raw machine IDs, or third-party plugin credentials in support emails.

---

## Common Issues

### Trial

**"I never received the verification code email"**  
Check your spam/junk folder. The email comes from a Mailchannels sender on behalf of Virtue Creative Systems. If it is not in spam after 5 minutes, use the "Resend Code" button in the VFxM trial screen.

> **Note**: The current email-based trial system is being replaced with a one-click hardware-bound system that requires no email. This will eliminate email delivery issues entirely.

**"I started a trial on a different computer — can I reset it?"**  
The trial is tied to your machine's hardware fingerprint on the server. Creating a new user account or reinstalling VFxM does not reset the trial clock. Contact support with your order or machine details if you need assistance.

**"The trial shows expired but I just installed it"**  
This can happen if VFxM was previously installed on the same machine under a different user account. The server recognises the hardware and returns the original trial start date. Contact support if you believe this is in error.

### Licensing (Paid)

**"My license key is not accepted"**  
- Ensure you are entering the full key including any dashes.
- The key must match the product (Virtue FX Manager) and be in `active` status.
- If you refunded and re-purchased, the old key is deactivated — use the new key from the new order.
- If you reached your activation limit, reset your activations on the website License Portal.

**"I reached my activation limit"**  
- Deactivate VFxM on a machine you no longer use from inside the app (Settings → Deactivate). This frees a slot.
- Alternatively, you can use the website License Portal (https://virtuecreativesystems.com/license/) to reset all activations for your key.

**"The app says 'offline grace expired'"**  
- VFxM validates your license online once per day. If your machine was offline for more than 10 days, you will need to connect to the internet once to re-validate. This is by design and applies to all activation-based software.

### Thumbnails (Windows — Known Issue)

**"Manual thumbnail capture crashes REAPER on Windows"**  
- This is a known bug being investigated. Do not use manual thumbnail capture on Windows until a fix is released. Auto-capture is available as a workaround, but it currently only captures native REAPER JS plugins — Waves and other SDK-based plugins are not captured automatically.

### Installation

**"REAPER does not load VFxM after install"**  
- Restart REAPER after installing.
- Verify the extension file is in the correct location:
  - macOS: `~/Library/Application Support/REAPER/UserPlugins/reaper_virtue.dylib`
  - Windows: `%APPDATA%\REAPER\UserPlugins\reaper_virtue.dll`
- Check REAPER's extension list (Options → Show REAPER resource path → UserPlugins).

---

## Scope of Support

The following belong **inside the VFxM app** and are not handled via the website:

- License key entry and activation
- Trial start and validation
- Offline grace period
- Diagnostics and error logs

The website license portal is a self-service tool to recover lost keys or reset active device registrations. Direct license key activation, offline grace validation, and local hardware binding occur entirely within the VFxM client extension.
