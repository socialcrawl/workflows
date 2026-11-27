// The repository check CI runs: every skill folder is well formed and listed.
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";

import { checkRepo } from "./check.mjs";

const skill = (name, extra = "") => `---\nname: ${name}\ndescription: Find what broke out this week on six platforms. Use when someone asks what went viral.\nmetadata:\n  version: "0.1.0"\n${extra}---\n\n# ${name}\n`;

function repo(files) {
  const dir = mkdtempSync(path.join(tmpdir(), "wf-check-"));
  for (const [name, text] of Object.entries(files)) {
    mkdirSync(path.dirname(path.join(dir, name)), { recursive: true });
    writeFileSync(path.join(dir, name), text);
  }
  return dir;
}

const readme = (...names) => `# workflows\n\n| Workflow | Does |\n| --- | --- |\n${names.map((n) => `| [\`${n}\`](skills/${n}/) | x |`).join("\n")}\n`;

describe("checkRepo", () => {
  it("passes a well-formed repository", () => {
    const dir = repo({ "README.md": readme("social-viral"), "skills/social-viral/SKILL.md": skill("social-viral"), "skills/social-viral/README.md": "# social-viral\n" });
    assert.deepEqual(checkRepo(dir), []);
  });

  it("requires the frontmatter name to match the folder", () => {
    const dir = repo({ "README.md": readme("social-viral"), "skills/social-viral/SKILL.md": skill("viral"), "skills/social-viral/README.md": "x" });
    assert.match(checkRepo(dir).join("\n"), /name "viral" does not match its folder "social-viral"/);
  });

  it("requires a description and a version", () => {
    const dir = repo({ "README.md": readme("a-b"), "skills/a-b/SKILL.md": "---\nname: a-b\n---\n# a\n", "skills/a-b/README.md": "x" });
    const out = checkRepo(dir).join("\n");
    assert.match(out, /a-b: no description/);
    assert.match(out, /a-b: no metadata.version/);
  });

  it("requires each skill to have a README and a row in the root README", () => {
    const dir = repo({ "README.md": readme(), "skills/a-b/SKILL.md": skill("a-b") });
    const out = checkRepo(dir).join("\n");
    assert.match(out, /a-b: no README.md/);
    assert.match(out, /a-b: not listed in the root README/);
  });

  it("rejects em dashes in any Markdown file a person reads", () => {
    const dir = repo({ "README.md": readme("a-b") + "\nFast — and cheap.\n", "skills/a-b/SKILL.md": skill("a-b"), "skills/a-b/README.md": "x" });
    assert.match(checkRepo(dir).join("\n"), /README.md: em dash/);
  });

  it("rejects a description over 1,024 characters", () => {
    const long = "x".repeat(1100);
    const dir = repo({ "README.md": readme("a-b"), "skills/a-b/SKILL.md": `---\nname: a-b\ndescription: ${long}\nmetadata:\n  version: "0.1.0"\n---\n`, "skills/a-b/README.md": "x" });
    assert.match(checkRepo(dir).join("\n"), /a-b: description is 1100 characters/);
  });
});
