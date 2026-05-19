import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const siteDir = path.join(root, "WEBSITE");
const htmlFiles = [];
const assetRefs = new Set([
  "styles.css",
  "script.js",
  "favicon.svg",
  "virtue-fx-manager-fictional-ui.png",
]);
const errors = [];

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectHtmlFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      htmlFiles.push(fullPath);
    }
  }
}

function displayPath(fullPath) {
  return path.relative(siteDir, fullPath) || path.basename(fullPath);
}

function resolveLocalRef(ref, htmlPath) {
  const cleanRef = ref.split("#")[0];
  if (!cleanRef) return null;
  if (cleanRef.startsWith("/")) return path.join(siteDir, cleanRef.slice(1));
  return path.resolve(path.dirname(htmlPath), cleanRef);
}

await collectHtmlFiles(siteDir);

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const relativeFile = displayPath(file);

  if (!html.includes("<title>")) errors.push(`${relativeFile}: missing title`);
  if (!html.includes('name="description"') && relativeFile !== "404.html") {
    errors.push(`${relativeFile}: missing meta description`);
  }
  if (!html.includes('data-site-header')) errors.push(`${relativeFile}: missing shared header mount`);
  if (!html.includes('data-site-footer')) errors.push(`${relativeFile}: missing shared footer mount`);

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  const srcs = [...html.matchAll(/src="([^"]+)"/g)].map((match) => match[1]);

  for (const ref of [...hrefs, ...srcs]) {
    if (
      ref.startsWith("http") ||
      ref.startsWith("mailto:") ||
      ref.startsWith("#") ||
      ref.startsWith("tel:")
    ) {
      continue;
    }

    const target = resolveLocalRef(ref, file);
    if (target) assetRefs.add(target);
  }
}

for (const ref of assetRefs) {
  try {
    const target = path.isAbsolute(ref) ? ref : path.join(siteDir, ref);
    const info = await stat(target);
    if (info.isDirectory()) {
      const indexPath = path.join(target, "index.html");
      const indexInfo = await stat(indexPath);
      if (!indexInfo.isFile()) errors.push(`${displayPath(target)}: directory link missing index.html`);
    } else if (!info.isFile()) {
      errors.push(`${displayPath(target)}: not a file`);
    }
  } catch {
    const label = path.isAbsolute(ref) ? displayPath(ref) : ref;
    errors.push(`${label}: referenced file not found`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages and ${assetRefs.size} referenced assets.`);
