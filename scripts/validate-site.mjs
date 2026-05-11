import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const siteDir = path.join(root, "WEBSITE");
const files = await readdir(siteDir);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const assetRefs = new Set(["styles.css", "script.js", "favicon.svg"]);
const errors = [];

for (const file of htmlFiles) {
  const fullPath = path.join(siteDir, file);
  const html = await readFile(fullPath, "utf8");

  if (!html.includes("<title>")) errors.push(`${file}: missing title`);
  if (!html.includes('name="description"') && file !== "404.html") {
    errors.push(`${file}: missing meta description`);
  }
  if (!html.includes('data-site-header')) errors.push(`${file}: missing shared header mount`);
  if (!html.includes('data-site-footer')) errors.push(`${file}: missing shared footer mount`);

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

    const cleanRef = ref.split("#")[0];
    if (cleanRef) assetRefs.add(cleanRef);
  }
}

for (const ref of assetRefs) {
  try {
    const target = path.join(siteDir, ref);
    const info = await stat(target);
    if (!info.isFile()) errors.push(`${ref}: not a file`);
  } catch {
    errors.push(`${ref}: referenced file not found`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages and ${assetRefs.size} referenced assets.`);
