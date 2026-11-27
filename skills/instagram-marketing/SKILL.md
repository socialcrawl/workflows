---
name: instagram-marketing
description: Find the Instagram reels breaking out on a topic, measured against each creator's own earlier reels, and what they did. Use when someone says "what's working on Instagram for <topic>", "which reels went viral about <keyword>", "what hooks and music work on Instagram reels for <niche>", "instagram-marketing <keyword>", or wants Instagram research before making reels. Returns the break-outs with their multiples, lengths, hooks, music and hashtags, what the comments ask, the top reel's opening words, and next plays.
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

# Instagram marketing

Run the `instagram-marketing` workflow on the person's keyword and answer from the report it writes. It reads Instagram only; it never posts, likes, follows or comments.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, ask the person for the email they want to sign in with (their SocialCrawl account's, or a new one: 100 free credits, no card). Run `npx -y socialcrawl@latest init --email <their email>`, and give them the link and the 6-digit code it prints. When they say they have signed in, run `npx -y socialcrawl@latest init` to finish. If they already have a key, tell them to run `npx -y socialcrawl@latest init` in their own terminal and paste it there, or to set SOCIALCRAWL_API_KEY; never take the key in the chat. Never print a key.

## 2. Pick the keyword

Use the words people put in reel captions: a topic ("home workouts"), a product category or a product name. If the keyword has another meaning outside the person's field, add `--about` with one plain sentence, for example `--about "workouts people do at home without a gym"`; only reels about that are kept.

## 3. Run it

```bash
npx -y socialcrawl@latest instagram-marketing "<keyword>"
```

The CLI prints the price (about 42 credits, at most 60) and runs. Instagram's search is slow, so a run takes about two minutes. Add `--deep` when the person wants four search pages, 15 creators measured and 6 comment sections (about 183 credits, at most 240). If their balance is short, the run reads what it covers and says what it left out.

By default it reads the last 30 days. If the person names a period, pass `--since YYYY-MM-DD` and `--until YYYY-MM-DD`; if they ask for all-time hits, pass `--since 2000-01-01`. The report's first line states the window: say it in your answer, so "breaking out" is never read as all time.

## 4. Answer from the report

The run ends by printing the path of its `report.html`. Read `report.md` in the same folder and answer in a few lines:

1. How many reels broke out (3 times or more their creator's usual views) out of how many were measured, and the largest, with its multiple and the dates its baseline covers. If none did, say that none did.
2. What the break-outs share: length, hook, music, from the "What the break-outs did" table. Say these are counts unless the report calls a pattern.
3. The questions and complaints people leave most, quoted from "What the comments ask".
4. What will not copy, and the "Next plays" table, from the report.
5. What the run could not read (from "What we could not verify") and the cost.

Point the person to `report.html` for the charts and `data/` for every reel, comment and baseline row. Never add a number that is not in the report. Accounts under 10,000 followers are described in the report, not named: keep it that way in your answer.

## 5. If the person wants to make a reel

Write a brief only when they ask: the length, hook kind and music of the break-outs it copies, what the comments asked that the reel could answer, and the number to check in 14 days (its views against their own median). Never post it for them.
