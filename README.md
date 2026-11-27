<div align="center">
  <img src="https://www.socialcrawl.dev/images/logo.png" alt="SocialCrawl" height="90">

  <h3>SocialCrawl Workflows</h3>
  <p>Agent skills that read social media for you and hand back a finished report with the raw data.</p>

  <a href="https://github.com/socialcrawl/workflows/actions/workflows/check.yml"><img src="https://github.com/socialcrawl/workflows/actions/workflows/check.yml/badge.svg" alt="check"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/socialcrawl/workflows" alt="MIT licence"></a>
</div>

---

> **Status, 27/11/2026:** being built in the open toward v0.1.0. The CLI is not on npm yet, so the install commands below work from the first release.

Each workflow takes one input (a topic, a keyword, an account, a video link), reads the posts, comments and numbers through the [SocialCrawl API](https://www.socialcrawl.dev), and writes a run folder:

| File | What is in it |
| --- | --- |
| `report.html` | The report with charts, one page, works offline |
| `report.md` | The same report as text, for your agent or a doc |
| `card.svg` | A 1200 × 675 card with the headline numbers |
| `data/*.csv` | Every row it read, so you keep the raw data |
| `responses.jsonl` | Every API response, with its request id |
| `evidence.json` | Each claim and the requests behind it |

Every number links back to the request that produced it, and the report says what it could not read.

## Install

```bash
npx -y socialcrawl@latest init
```

`init` asks for your SocialCrawl key (or signs you in by email: 100 free credits, no card), then installs these skills into the agents it finds on your machine (Claude Code, Cursor, Codex and others).

To install the skills alone:

```bash
npx skills add socialcrawl/workflows
```

In Claude Code you can also add this repository as a plugin marketplace: `/plugin marketplace add socialcrawl/workflows`.

## Workflows

| Workflow | Give it | Get back |
| --- | --- | --- |
| [`socialcrawl`](skills/socialcrawl/) | a question in plain words | the right workflow, run for you |
| [`social-viral`](skills/social-viral/) | a topic | the posts that broke out this week on X, TikTok, Instagram, YouTube, Reddit and LinkedIn, each against its author's earlier posts |

## Use it

In your agent:

```
/socialcrawl what went viral in AI coding tools this week?
```

Or in a terminal:

```bash
npx -y socialcrawl@latest social-viral "AI coding tools"
```

Every run prints its price, then runs with no approval step. A default run fits inside the free credits; when your balance runs short, the run reads what it covers, says what it left out, and links to a top-up.

## Contributing

See [CONTRIBUTING](https://github.com/socialcrawl/.github/blob/main/CONTRIBUTING.md). Each workflow lives in `skills/<name>/` with a `SKILL.md` and a `README.md`; `node scripts/check.mjs` checks them.

## Licence

MIT
