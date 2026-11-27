---
name: youtube-marketing
description: Find the YouTube videos and Shorts breaking out on a topic, measured against each channel's own earlier uploads (Shorts against Shorts), and what they did. Use when someone says "what's working on YouTube for <topic>", "which videos went viral about <keyword>", "what titles and lengths work on YouTube for <niche>", "youtube-marketing <keyword>", or wants YouTube research before making videos. Returns the break-outs with their multiples, lengths and titles, what the comments ask, the top videos' opening words, and next plays.
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

# YouTube marketing

Run the `youtube-marketing` workflow on the person's keyword and answer from the report it writes. It reads YouTube only; it never posts, likes, subscribes or comments.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, ask the person for the email they want to sign in with (their SocialCrawl account's, or a new one: 100 free credits, no card). Run `npx -y socialcrawl@latest init --email <their email>`, and give them the link and the 6-digit code it prints. When they say they have signed in, run `npx -y socialcrawl@latest init` to finish. If they already have a key, tell them to run `npx -y socialcrawl@latest init` in their own terminal and paste it there, or to set SOCIALCRAWL_API_KEY; never take the key in the chat. Never print a key.

## 2. Pick the keyword

Use the words people put in YouTube titles: a topic ("home espresso"), a product category or a product name. If the keyword has another meaning outside the person's field, add `--about` with one plain sentence, for example `--about "making espresso at home"`; only videos about that are kept.

## 3. Run it

```bash
npx -y socialcrawl@latest youtube-marketing "<keyword>"
```

The CLI prints the price (about 33 credits, at most 49) and runs. Reading channel shelves is slow, so a run takes three to four minutes. Add `--deep` when the person wants two searches of 3 pages, 25 channels measured and 8 comment sections (about 113 credits, at most 141). If their balance is short, the run reads what it covers and says what it left out.

By default it reads the last 30 days. If the person names a period, pass `--since YYYY-MM-DD` and `--until YYYY-MM-DD`; if they ask for all-time hits, pass `--since 2000-01-01`. The report's first line states the window: say it in your answer, so "breaking out" is never read as all time.

## 4. Answer from the report

The run ends by printing the path of its `report.html`. Read `report.md` in the same folder and answer in a few lines:

1. How many videos broke out (3 times or more their channel's usual views) out of how many were measured, and the largest, with its multiple and the dates its baseline covers. Say whether it is a Short or a long video: each is measured against its own kind.
2. What the break-outs share: length and title kind, from the "What the break-outs did" table. Say these are counts unless the report calls a pattern.
3. The questions and complaints people leave most, quoted from "What the comments ask".
4. What will not copy, and the "Next plays" table, from the report.
5. What the run could not read (from "What we could not verify") and the cost.

Point the person to `report.html` for the charts and `data/` for every video, comment and baseline row. Never add a number that is not in the report. Channels under 10,000 subscribers are described in the report, not named: keep it that way in your answer.

## 5. If the person wants to make a video

Write a brief only when they ask: the format (Short or long), length and title kind of the break-outs it copies, what the comments asked that the video could answer, and the number to check in 14 days (its views against their own median). Never post it for them.
