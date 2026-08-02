# Uninstall Virtue FX Manager

Last updated: 2026-06-15

---

## Before Uninstalling

**Deactivate your paid license first** (if you have one).  
Use the Deactivate option inside VFxM before removing the app. This frees your activation slot so you can re-activate on another machine. If you skip this step, you will need to contact support to manually free the slot.

---

## macOS Uninstall

The macOS installer includes an **Uninstall Virtue.app** inside the `.dmg`. This is the recommended uninstall path.

### Using the Uninstaller App

1. Open `VirtueFXManager.dmg` (or re-download it).
2. Double-click `Uninstall Virtue.app`.
3. The uninstaller removes the REAPER extension dylib.
4. REAPER user data (favorites, notes, thumbnails, themes, settings) is **preserved by default**.

### Manual Uninstall (if needed)

Remove the extension file:
```sh
rm ~/Library/Application\ Support/REAPER/UserPlugins/reaper_virtue.dylib
```

To also remove all user data (favorites, notes, thumbnails, settings):
```sh
rm -rf ~/Library/Application\ Support/REAPER/Virtue/
```

To remove trial/license tokens:
```sh
# Target system token
rm ~/Library/Application\ Support/REAPER/Virtue/trial.token

# Current system hidden timestamp files
rm ~/Library/Application\ Support/REAPER/Virtue/.vfx_sys_config
rm ~/Library/Application\ Support/REAPER/Virtue/.vfx_sys_cache
rm ~/.vfx_sys_config
rm ~/Library/Preferences/.vfx_sys_config
```

---

## Windows Uninstall

### Using Add/Remove Programs

1. Open **Settings → Apps** (Windows 10/11).
2. Search for **Virtue FX Manager**.
3. Click **Uninstall**.
4. The Inno Setup uninstaller removes the DLL from `%APPDATA%\REAPER\UserPlugins\`.
5. User data in `%APPDATA%\REAPER\Virtue\` is **preserved by default**.

### Manual Uninstall (if needed)

Remove the extension DLL:
```
del "%APPDATA%\REAPER\UserPlugins\reaper_virtue.dll"
```

To also remove all user data:
```
rmdir /s /q "%APPDATA%\REAPER\Virtue"
```

To remove trial/license tokens (hidden files):
```
del /a:h "%APPDATA%\REAPER\Virtue\.vfx_sys_config"
del /a:h "%APPDATA%\REAPER\Virtue\.vfx_sys_cache"
del /a:h "%USERPROFILE%\.vfx_sys_config"
del /a:h "%LOCALAPPDATA%\.vfx_sys_config"
```

---

## What is Preserved vs Removed

| Data | Default Uninstall | Full Wipe |
|---|---|---|
| `reaper_virtue.dylib` / `.dll` | ✅ Removed | ✅ Removed |
| Favorites | 🔲 Preserved | ✅ Removed |
| Notes | 🔲 Preserved | ✅ Removed |
| Thumbnails | 🔲 Preserved | ✅ Removed |
| Settings / Themes | 🔲 Preserved | ✅ Removed |
| Trial tokens / timestamps | 🔲 Preserved | ✅ Removed |
| Paid license cache | 🔲 Preserved | ✅ Removed |

---

> **Note**: Removing the trial token files (`trial.token` / `.vfx_sys_config`) does **not** reset the server-side trial record. The server uses your hardware fingerprint to identify your machine — the trial clock continues from the original start date regardless of local file deletions.
