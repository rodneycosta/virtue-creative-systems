# Install Virtue FX Manager

Last updated: 2026-06-15

---

## macOS Installation

Virtue FX Manager for macOS is distributed as a signed and notarized `.pkg` installer inside a `.dmg` disk image.

### Steps

1. Download `VirtueFXManager.dmg` from the official download page.
2. Verify the SHA-256 checksum shown on the download page:
   ```sh
   shasum -a 256 VirtueFXManager.dmg
   ```
3. Open the `.dmg` and double-click `VirtueFXManager.pkg` to run the installer.
4. The installer places `reaper_virtue.dylib` into:
   ```
   ~/Library/Application Support/REAPER/UserPlugins/reaper_virtue.dylib
   ```
5. Open REAPER. The extension loads automatically on startup.
6. Launch Virtue FX Manager from the REAPER Action List (`_VIRTUE_SHOW`) or from the toolbar button if configured.
7. On first launch, the trial/activation splash screen appears:
   - **Trial**: Click "Start Free Trial" (target system) or enter your email to receive a verification code (current system).
   - **Paid**: Enter your license key from your Polar.sh purchase email.

### What Gets Installed

| Path | Contents |
|---|---|
| `~/Library/Application Support/REAPER/UserPlugins/reaper_virtue.dylib` | The VFxM REAPER extension |
| `~/Library/Application Support/REAPER/Virtue/` | User data: settings, favorites, thumbnails, notes, themes |
| `~/Library/Application Support/REAPER/Virtue/trial.token` | Trial token (target system) |
| `~/Library/Application Support/REAPER/Virtue/.vfx_sys_config` | Trial timestamp (current system) |

---

## Windows Installation

Virtue FX Manager for Windows is distributed as a signed `.exe` installer built with Inno Setup.

### Steps

1. Download `VirtueFXManagerInstaller.exe` from the official download page.
2. Verify the SHA-256 checksum shown on the download page.
3. Run the installer as the current user (no administrator rights required for the standard install path).
4. The installer places `reaper_virtue.dll` into:
   ```
   %APPDATA%\REAPER\UserPlugins\reaper_virtue.dll
   ```
5. Open REAPER. The extension loads automatically on startup.
6. Launch Virtue FX Manager from the REAPER Action List (`_VIRTUE_SHOW`).

### What Gets Installed

| Path | Contents |
|---|---|
| `%APPDATA%\REAPER\UserPlugins\reaper_virtue.dll` | The VFxM REAPER extension |
| `%APPDATA%\REAPER\Virtue\` | User data: settings, favorites, thumbnails, notes, themes |
| `%APPDATA%\REAPER\Virtue\trial.token` | Trial token (target system) |
| `%APPDATA%\REAPER\Virtue\.vfx_sys_config` | Trial timestamp (current system, hidden file) |

---

## Notes

- The installer does **not** require REAPER to be running.
- The installer does **not** modify REAPER's application bundle or internal files.
- User data (favorites, notes, thumbnails, settings, themes) is **preserved** on update or reinstall.
- To deactivate a paid license before switching computers, use the Deactivate option inside VFxM before uninstalling.

---

> **Status**: Installer artifacts are not yet published for public download. Do not publish platform-specific install claims until the matching artifact has been built, tested, signed, and notarized (macOS) or signed (Windows).
