#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { extname, resolve } from "node:path";
import vm from "node:vm";

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("Usage: node validate_artifacts.mjs <file.html|file.py> [...]");
  process.exit(2);
}

let failed = false;

for (const input of files) {
  const file = resolve(input);
  const source = await readFile(file, "utf8");
  const extension = extname(file).toLowerCase();
  const errors = [];

  if (extension === ".html") {
    if (!/<meta\s+charset=/i.test(source)) errors.push("missing charset");
    if (!/<meta\s+name=["']viewport["']/i.test(source)) errors.push("missing viewport");
    if (!/requestAnimationFrame/.test(source)) errors.push("missing requestAnimationFrame");
    if (/<(?:script|link)[^>]+(?:src|href)=["']https?:/i.test(source)) errors.push("external dependency found");
    if (!/id=["']reset["']/.test(source)) errors.push("missing reset control");
    const scripts = [...source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
    if (scripts.length === 0) errors.push("missing inline script");
    for (const [, script] of scripts) {
      try {
        new vm.Script(script);
      } catch (error) {
        errors.push(`JavaScript syntax: ${error.message}`);
      }
    }
  } else if (extension === ".py") {
    if (!/from\s+manim\s+import/.test(source)) errors.push("missing Manim import");
    if (!/class\s+\w+\s*\(\s*Scene\s*\)/.test(source)) errors.push("missing Scene class");
    if (!/def\s+construct\s*\(\s*self\s*\)/.test(source)) errors.push("missing construct method");
    if (!/MathTex/.test(source)) errors.push("missing formula rendering");
  } else {
    errors.push(`unsupported extension ${extension}`);
  }

  if (errors.length > 0) {
    failed = true;
    console.error(`[FAIL] ${file}: ${errors.join("; ")}`);
  } else {
    console.log(`[OK] ${file}`);
  }
}

process.exit(failed ? 1 : 0);
