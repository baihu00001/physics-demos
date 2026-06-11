#!/usr/bin/env node

import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const skillRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [mode, outputArg] = process.argv.slice(2);

if (!["manim", "web"].includes(mode) || !outputArg) {
  console.error("Usage: node scaffold_demo.mjs <manim|web> <output-directory>");
  process.exit(2);
}

const outputDir = resolve(outputArg);
await mkdir(outputDir, { recursive: true });

if (mode === "manim") {
  await copyFile(
    join(skillRoot, "assets", "manim", "constant_acceleration.py"),
    join(outputDir, "lesson.py"),
  );
  await writeFile(
    join(outputDir, "README.txt"),
    "Render with:\nmanim -pqh lesson.py ConstantAccelerationLesson\n",
    "utf8",
  );
} else {
  const assetDir = join(outputDir, "assets");
  await mkdir(assetDir, { recursive: true });
  await copyFile(
    join(skillRoot, "assets", "web", "projectile-motion.html"),
    join(outputDir, "index.html"),
  );
  await copyFile(
    join(skillRoot, "assets", "brand", "tangtang-tangdou-logo-clean.png"),
    join(assetDir, "tangtang-tangdou-logo-clean.png"),
  );
  await writeFile(
    join(outputDir, "README.txt"),
    "Open index.html directly in a modern browser. No build step or network access is required.\n",
    "utf8",
  );
}

console.log(`Created ${mode} demonstration in ${outputDir}`);
