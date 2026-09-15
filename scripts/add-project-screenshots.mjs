#!/usr/bin/env node
/**
 * add-project-screenshots.mjs
 *
 * Safely copies a folder of screenshots into public/images/projects/<slug>/
 * and prints the ready-to-paste `imageUrl` array for that project in
 * src/data/projects.ts. It never edits projects.ts itself, so it can never
 * break your data file — you paste the printed array in by hand (or an
 * agent does it for you).
 *
 * Usage:
 *   node scripts/add-project-screenshots.mjs --project "Jravel AI Powered Travel Planner" --dir ~/Desktop/jravel-screenshots
 *
 * Options:
 *   --project   Exact "name" string as it appears in PROJECTS_CARD (src/data/projects.ts)
 *   --dir       Path to the folder containing that project's screenshots
 *   --slug      (optional) override the auto-generated folder slug
 *
 * What it does:
 *   1. Slugifies the project name (e.g. "Jravel AI Powered Travel Planner" -> "jravel-ai-powered-travel-planner")
 *   2. Copies every image (.png/.jpg/.jpeg/.webp/.svg/.gif) from --dir into
 *      public/images/projects/<slug>/, renaming them 01.webp, 02.webp, ... in
 *      the order they're found, preserving each file's original extension.
 *   3. Prints the `imageUrl: [...]` array to paste into that project's entry
 *      in src/data/projects.ts (both PROJECTS_CARD and, optionally,
 *      PROJECT_SHOWCASE use the same shape).
 */
import { readdirSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"];

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith("--")) {
      const key = argv[i].slice(2);
      const value = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : true;
      args[key] = value;
      if (value !== true) i += 1;
    }
  }
  return args;
}

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.project || !args.dir) {
    console.error(
      "Usage: node scripts/add-project-screenshots.mjs --project \"Project Name\" --dir /path/to/screenshots",
    );
    process.exit(1);
  }

  const sourceDir = path.resolve(args.dir);
  if (!existsSync(sourceDir)) {
    console.error(`Source folder not found: ${sourceDir}`);
    process.exit(1);
  }

  const slug = args.slug ? slugify(args.slug) : slugify(args.project);
  const destDir = path.join(ROOT, "public", "images", "projects", slug);
  mkdirSync(destDir, { recursive: true });

  const files = readdirSync(sourceDir)
    .filter((f) => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .sort(); // alphabetical = predictable carousel order; rename source files 01-, 02-... to control order

  if (files.length === 0) {
    console.error(`No image files found in ${sourceDir}`);
    process.exit(1);
  }

  const publicPaths = [];

  files.forEach((file, index) => {
    const ext = path.extname(file).toLowerCase();
    const destName = `${String(index + 1).padStart(2, "0")}${ext}`;
    copyFileSync(path.join(sourceDir, file), path.join(destDir, destName));
    publicPaths.push(`/images/projects/${slug}/${destName}`);
  });

  console.log(`\nCopied ${files.length} screenshot(s) to public/images/projects/${slug}/\n`);
  console.log(`Paste this into the "${args.project}" entry's imageUrl in src/data/projects.ts:\n`);
  console.log("imageUrl: [");
  publicPaths.forEach((p) => console.log(`  "${p}",`));
  console.log("],\n");
}

main();
