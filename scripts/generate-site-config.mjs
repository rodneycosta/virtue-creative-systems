import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const siteDir = path.join(root, "WEBSITE");

function publicUrl(value) {
  if (!value) return "";
  const trimmed = String(value).trim();
  return /^https:\/\//.test(trimmed) ? trimmed : "";
}

function env(name, fallback = "") {
  return process.env[name] || fallback;
}

const checkoutUrl = publicUrl(env("STORE_CHECKOUT_URL") || env("LEMONSQUEEZY_VFXM_CHECKOUT_URL"));
const publicDownloadUrl = publicUrl(env("VFXM_PUBLIC_DOWNLOAD_URL") || env("VFXM_RELEASE_DOWNLOAD_URL"));

const config = {
  releaseStatus: env("VFXM_SITE_RELEASE_STATUS", checkoutUrl ? "available" : "store-setup"),
  commerce: {
    provider: env("STORE_PROVIDER", "lemonsqueezy"),
    mode: checkoutUrl ? "live" : env("STORE_MODE", "setup"),
    checkoutUrl,
    supportEmail: env("VFXM_SUPPORT_EMAIL", "hello@virtuecreativesystems.com"),
  },
  download: {
    status: publicDownloadUrl ? "available" : "pending",
    url: publicDownloadUrl,
    version: env("VFXM_RELEASE_VERSION", "Pending"),
    channel: env("VFXM_RELEASE_CHANNEL", "stable"),
    platform: env("VFXM_RELEASE_PLATFORM", "Pending tested artifact"),
    fileName: env("VFXM_RELEASE_FILE_NAME", "Published with release"),
    releaseDate: env("VFXM_RELEASE_DATE", "Published with release"),
    sha256: env("VFXM_RELEASE_SHA256", "Published with release"),
  },
};

await mkdir(siteDir, { recursive: true });
await writeFile(path.join(siteDir, "site-config.json"), `${JSON.stringify(config, null, 2)}\n`);
console.log(`Generated WEBSITE/site-config.json (${config.commerce.mode}, ${config.download.status})`);
