#!/usr/bin/env node

/**
 * add-certifications.mjs
 *
 * Copies certificate files (images & PDFs) from a source directory into
 * public/certifications/ and prints ready-to-paste Certification entries
 * for src/data/certifications.ts.
 *
 * Usage:
 *   npm run add-certifications -- --dir "<path to certificates folder>"
 */

import { readdirSync, copyFileSync, mkdirSync, existsSync } from "fs";
import { join, basename, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "..");

const DEST_DIR = join(projectRoot, "public", "certifications");
const ALLOWED_EXTS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".pdf"];

// Parse --dir argument
const args = process.argv.slice(2);
const dirFlagIndex = args.indexOf("--dir");
if (dirFlagIndex === -1 || !args[dirFlagIndex + 1]) {
  console.error('Usage: node scripts/add-certifications.mjs --dir "<path>"');
  process.exit(1);
}
const srcDir = args[dirFlagIndex + 1];

// Ensure destination exists
if (!existsSync(DEST_DIR)) {
  mkdirSync(DEST_DIR, { recursive: true });
}

const files = readdirSync(srcDir).filter((f) => {
  const ext = extname(f).toLowerCase();
  return ALLOWED_EXTS.includes(ext);
});

if (files.length === 0) {
  console.log("No certificate files found in:", srcDir);
  process.exit(0);
}

const entries = [];

for (const file of files) {
  const src = join(srcDir, file);
  // Sanitise the filename: lowercase, replace spaces/parens with hyphens
  const sanitised = file
    .replace(/\s+/g, "-")
    .replace(/[()]/g, "")
    .replace(/-+/g, "-")
    .toLowerCase();
  const dest = join(DEST_DIR, sanitised);

  copyFileSync(src, dest);

  // Guess title from filename (strip extension, replace separators with spaces, title-case)
  const rawTitle = basename(sanitised, extname(sanitised))
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    // Strip long UUIDs / hashes (anything that looks like 8+ hex chars separated by dashes)
    .replace(
      /\s*[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}\s*/gi,
      "",
    )
    .trim();

  entries.push({
    title: rawTitle,
    issuer: "",
    date: "",
    image: `/certifications/${sanitised}`,
  });
}

console.log(`\nCopied ${files.length} file(s) to public/certifications/\n`);
console.log("Paste these into the CERTIFICATIONS array in src/data/certifications.ts:\n");
for (const e of entries) {
  console.log(`  {`);
  console.log(`    title: "${e.title}",`);
  console.log(`    issuer: "",`);
  console.log(`    date: "",`);
  console.log(`    image: "${e.image}",`);
  console.log(`  },`);
}
console.log();
