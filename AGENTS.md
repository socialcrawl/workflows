# Working in this repository

- One workflow per folder: `skills/socialcrawl-<task>/SKILL.md` (what the agent does), `README.md` (what a person reads), `examples/` (a real run's `report.md` and `card.svg`).
- Every skill name starts with `socialcrawl-`. `npx skills add` replaces a skill folder of the same name, so a generic name would delete someone else's skill. The check also fails on a name that socialcrawl/skills or socialcrawl/mcp already uses.
- `SKILL.md` drives the CLI: `npx -y socialcrawl@latest <workflow> "<input>"`. The workflow's code lives in [socialcrawl/cli](https://github.com/socialcrawl/cli), not here.
- Add a row for your workflow to the table in the root `README.md` and to the table in `skills/socialcrawl-workflows/SKILL.md`.
- Before you push: `node --test scripts/check.test.mjs && node scripts/check.mjs`.
- Example outputs never name a private person: use brands, companies and accounts over 10,000 followers, or describe the account instead.
