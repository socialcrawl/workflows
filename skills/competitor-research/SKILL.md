---
name: competitor-research
description: Compare two to five brands on social platforms: who is talked about most, each brand's best post against its author's usual reach, and what each brand's audience asks and complains about. Use when someone says "compare <brand> and <brand> on social", "who gets more attention, <brand> or <brand>", "competitor research on <brands>", "share of voice for <brands>", "what do people complain about with <competitor>", "competitor-research <brands>", or wants a side-by-side read of rivals before a launch. Returns share of the posts read per platform, each brand's best post with its multiple, labelled questions and complaints per brand, and, on a deep run, each brand's own TikTok ads.
license: MIT
metadata:
  author: socialcrawl
  version: "0.1.0"
  homepage: https://www.socialcrawl.dev
  source: https://github.com/socialcrawl/workflows
inputs:
  - name: SOCIALCRAWL_API_KEY
    description: SocialCrawl API key. `socialcrawl init` saves it; new accounts get 100 free credits.
    required: true
---

# Competitor research

Run the `competitor-research` workflow on the person's brands and answer from the report it writes. It reads public posts only; it never posts, likes, follows or comments.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, ask the person for the email they want to sign in with (their SocialCrawl account's, or a new one: 100 free credits, no card). Run `npx -y socialcrawl@latest init --email <their email>`, and give them the link and the 6-digit code it prints. When they say they have signed in, run `npx -y socialcrawl@latest init` to finish. If they already have a key, tell them to run `npx -y socialcrawl@latest init` in their own terminal and paste it there, or to set SOCIALCRAWL_API_KEY; never take the key in the chat. Never print a key.

## 2. Pick the brands and their category

Take two to five brand names, separated by commas, as people write them in posts: "Notion, Obsidian, Logseq". Always add `--about` with the category in a few words, for example `--about "note-taking apps"`: each brand is searched with a filter that keeps only posts about that brand in that category, so a brand whose name is a common word ("Neon", "Linear") is not counted for every other use of the word.

## 3. Run it

```bash
npx -y socialcrawl@latest competitor-research "<brand>, <brand>" --about "<their category>"
```

The CLI prints the price (about 56 credits for three brands, at most 98) and runs. Add `--deep` when the person wants two search pages, Instagram, Reddit comment threads and each brand's own TikTok ads (about 112 credits for three brands, at most 239). If their balance is short, the run reads what it covers and says what it left out.

By default it reads the last 30 days. If the person names a period, pass `--since YYYY-MM-DD` and `--until YYYY-MM-DD`. The report's first line states the window: say it in your answer.

## 4. Answer from the report

The run ends by printing the path of its `report.html`. Read `report.md` in the same folder and answer in a few lines:

1. Which brand had the most posts read on how many platforms, from "Share of voice". Say the shares are among the posts read, not of everything said, and point out any reach share that one post holds most of (the "Held by its largest post" column).
2. Each brand's best post and whether it broke out (3 times or more its author's usual reach; on Reddit, its community's), from "Each brand's best posts".
3. What each brand's audience asks and complains about, quoted from "What each audience asks".
4. The "Next plays" table, from the report.
5. What the run could not read (from "What we could not verify") and the cost.

Point the person to `report.html` for the charts and `data/` for every post. Never add a number that is not in the report, and never call a brand's audience bigger or smaller than the report shows. Accounts under 10,000 followers and Reddit members are described in the report, not named: keep it that way in your answer.
