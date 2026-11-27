# Working in this repository

- One workflow per folder: `skills/<name>/SKILL.md` (what the agent does), `README.md` (what a person reads), `examples/` (a real run's `report.md` and `card.svg`).
- `SKILL.md` drives the CLI: `npx -y socialcrawl@latest <workflow> "<input>"`. The workflow's code lives in [socialcrawl/cli](https://github.com/socialcrawl/cli), not here.
- Add a row for your workflow to the table in the root `README.md` and to the table in `skills/socialcrawl/SKILL.md`.
- Before you push: `node --test scripts/check.test.mjs && node scripts/check.mjs`.
- Example outputs never name a private person: use brands, companies and accounts over 10,000 followers, or describe the account instead.
