import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const siteDir = path.join(root, "WEBSITE");

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      await updateFile(fullPath);
    }
  }
}

async function updateFile(filePath) {
  const content = await readFile(filePath, "utf8");
  
  // Replace styles.css?v=X with styles.css?v=X+1
  // Replace script.js?v=X with script.js?v=X+1
  const updated = content
    .replace(/(styles\.css\?v=)(\d+)/g, (match, p1, p2) => {
      const nextVer = parseInt(p2, 10) + 1;
      return `${p1}${nextVer}`;
    })
    .replace(/(script\.js\?v=)(\d+)/g, (match, p1, p2) => {
      const nextVer = parseInt(p2, 10) + 1;
      return `${p1}${nextVer}`;
    })
    .replace(/(docs-data\.js\?v=)(\d+)/g, (match, p1, p2) => {
      const nextVer = parseInt(p2, 10) + 1;
      return `${p1}${nextVer}`;
    });

  if (updated !== content) {
    await writeFile(filePath, updated, "utf8");
    console.log(`Updated cache buster in: ${path.relative(siteDir, filePath)}`);
  }
}

console.log("Starting cache-busting update...");
await processDirectory(siteDir);
console.log("Cache-busting update complete.");
