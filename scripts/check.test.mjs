// The repository check CI runs: every skill folder is well formed and listed.
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";

import { checkRepo, skillNames } from "./check.mjs";

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
    const dir = repo({ "README.md": readme("socialcrawl-viral"), "skills/socialcrawl-viral/SKILL.md": skill("socialcrawl-viral"), "skills/socialcrawl-viral/README.md": "# social-viral\n" });
    assert.deepEqual(checkRepo(dir), []);
  });

  it("requires the frontmatter name to match the folder", () => {
    const dir = repo({ "README.md": readme("socialcrawl-viral"), "skills/socialcrawl-viral/SKILL.md": skill("viral"), "skills/socialcrawl-viral/README.md": "x" });
    assert.match(checkRepo(dir).join("\n"), /name "viral" does not match its folder "socialcrawl-viral"/);
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

  it("rejects the name socialcrawl, which belongs to the API skill in socialcrawl/skills", () => {
    const dir = repo({ "README.md": readme("socialcrawl"), "skills/socialcrawl/SKILL.md": skill("socialcrawl"), "skills/socialcrawl/README.md": "x" });
    assert.match(checkRepo(dir).join("\n"), /socialcrawl: the name is taken by the API skill in socialcrawl\/skills/);
  });

  it("requires every skill name to start with socialcrawl-, so it cannot collide with someone else's skill", () => {
    const dir = repo({ "README.md": readme("viral-posts"), "skills/viral-posts/SKILL.md": skill("viral-posts"), "skills/viral-posts/README.md": "x" });
    assert.match(checkRepo(dir).join("\n"), /viral-posts: the name must start with "socialcrawl-"/);
  });

  it("rejects a name another SocialCrawl repository already installs", () => {
    const dir = repo({ "README.md": readme("socialcrawl-viral"), "skills/socialcrawl-viral/SKILL.md": skill("socialcrawl-viral"), "skills/socialcrawl-viral/README.md": "x" });
    assert.deepEqual(checkRepo(dir, { taken: { "socialcrawl/skills": ["socialcrawl", "socialcrawl-viral"] } }), ["socialcrawl-viral: the name is taken by a skill in socialcrawl/skills"]);
  });

  it("rejects an unquoted description with ': ' in it, which YAML cannot parse and installers skip", () => {
    const bad = `---\nname: socialcrawl-a\ndescription: Track one post: views and likes.\nmetadata:\n  version: "0.1.0"\n---\n`;
    const dir = repo({ "README.md": readme("socialcrawl-a"), "skills/socialcrawl-a/SKILL.md": bad, "skills/socialcrawl-a/README.md": "x" });
    assert.match(checkRepo(dir).join("\n"), /socialcrawl-a: description has ": " in it, so it must be quoted/);
  });

  it("accepts a quoted description with ': ' in it, and reads it without the quotes", () => {
    const good = `---\nname: socialcrawl-a\ndescription: 'Track one post: its views, and the author''s usual reach.'\nmetadata:\n  version: "0.1.0"\n---\n`;
    const dir = repo({ "README.md": readme("socialcrawl-a"), "skills/socialcrawl-a/SKILL.md": good, "skills/socialcrawl-a/README.md": "x" });
    assert.deepEqual(checkRepo(dir), []);
  });

  it("rejects a description over 1,024 characters", () => {
    const long = "x".repeat(1100);
    const dir = repo({ "README.md": readme("a-b"), "skills/a-b/SKILL.md": `---\nname: a-b\ndescription: ${long}\nmetadata:\n  version: "0.1.0"\n---\n`, "skills/a-b/README.md": "x" });
    assert.match(checkRepo(dir).join("\n"), /a-b: description is 1100 characters/);
  });
});

describe("skillNames", () => {
  it("reads the skill names in a repository tree, once each", () => {
    const tree = ["README.md", "socialcrawl/SKILL.md", "skills/socialcrawl/SKILL.md", ".agents/skills/socialcrawl/SKILL.md", "skills/socialcrawl/references/a.md", "skills/other/SKILL.md"];
    assert.deepEqual(skillNames(tree), ["other", "socialcrawl"]);
  });
});
