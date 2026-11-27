#!/usr/bin/env node
// Checks that every skill in skills/ is well formed and listed. CI runs it on every push.
//   node scripts/check.mjs
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const MAX_DESCRIPTION = 1024;

/** The YAML frontmatter's top-level keys and metadata.version, read without a YAML library. */
function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const out = {};
  let inMeta = false;
  for (const line of m[1].split(/\r?\n/)) {
    const top = line.match(/^([a-zA-Z_-]+):\s*(.*)$/);
    if (top) {
      inMeta = top[1] === "metadata";
      out[top[1]] = top[2].replace(/^["']|["']$/g, "");
      continue;
    }
    const nested = line.match(/^\s+version:\s*(.*)$/);
    if (inMeta && nested) out.version = nested[1].replace(/^["']|["']$/g, "");
  }
  return out;
}

function markdownFiles(dir, base = dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === ".git" || name === "node_modules") continue;
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) markdownFiles(full, base, out);
    else if (name.endsWith(".md")) out.push(path.relative(base, full).split(path.sep).join("/"));
  }
  return out;
}

/** Every problem in the repository at dir, as one line each; empty when it is well formed. */
export function checkRepo(dir) {
  const problems = [];
  const skillsDir = path.join(dir, "skills");
  const rootReadme = existsSync(path.join(dir, "README.md")) ? readFileSync(path.join(dir, "README.md"), "utf8") : "";
  const skills = existsSync(skillsDir) ? readdirSync(skillsDir).filter((n) => statSync(path.join(skillsDir, n)).isDirectory()) : [];
  for (const name of skills) {
    const file = path.join(skillsDir, name, "SKILL.md");
    if (!existsSync(file)) {
      problems.push(`${name}: no SKILL.md`);
      continue;
    }
    const fm = frontmatter(readFileSync(file, "utf8"));
    if (!fm) {
      problems.push(`${name}: SKILL.md has no frontmatter`);
      continue;
    }
    if (fm.name !== name) problems.push(`${name}: name "${fm.name}" does not match its folder "${name}"`);
    if (!fm.description) problems.push(`${name}: no description`);
    else if (fm.description.length > MAX_DESCRIPTION) problems.push(`${name}: description is ${fm.description.length} characters, over ${MAX_DESCRIPTION}`);
    if (!fm.version) problems.push(`${name}: no metadata.version`);
    if (!existsSync(path.join(skillsDir, name, "README.md"))) problems.push(`${name}: no README.md`);
    if (!rootReadme.includes(`skills/${name}/`)) problems.push(`${name}: not listed in the root README`);
  }
  for (const f of markdownFiles(dir)) if (readFileSync(path.join(dir, f), "utf8").includes("—")) problems.push(`${f}: em dash`);
  return problems;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const problems = checkRepo(dir);
  for (const p of problems) console.error(p);
  if (problems.length) process.exit(1);
  console.log("All skills are well formed and listed.");
}
