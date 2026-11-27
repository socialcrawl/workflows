---
name: tiktok-marketing
description: Find the TikTok videos breaking out on a topic, measured against each creator's own earlier videos, and what they did. Use when someone says "what's working on TikTok for <topic>", "which TikToks went viral about <keyword>", "what hooks and sounds work on TikTok for <niche>", "tiktok-marketing <keyword>", or wants TikTok research before making videos. Returns the break-outs with their multiples, lengths, hooks, sounds and hashtags, what the comments ask, the top video's opening words, and next plays.
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

# TikTok marketing

Run the `tiktok-marketing` workflow on the person's keyword and answer from the report it writes. It reads TikTok only; it never posts, likes, follows or comments.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, run `npx -y socialcrawl@latest init` and let the person paste their key or sign in by email. Never ask them to paste a key into the chat, and never print it.

## 2. Pick the keyword

Use the words people put in TikTok captions: a topic ("meal prep"), a product category ("AI coding tools") or a product name. If the keyword has another meaning outside the person's field, add `--about` with one plain sentence, for example `--about "cooking meals ahead for the week"`; only videos about that are kept.

## 3. Run it

```bash
npx -y socialcrawl@latest tiktok-marketing "<keyword>"
```

The CLI prints the price (about 41 credits, at most 55) and runs. Add `--deep` when the person wants three searches, 15 creators measured and 8 comment sections (about 124 credits, at most 176). If their balance is short, the run reads what it covers and says what it left out.

## 4. Answer from the report

The run prints the path of its folder. Read `report.md` there and answer in a few lines:

1. How many videos broke out (3 times or more their creator's usual views) out of how many were measured, and the largest, with its multiple and the dates its baseline covers.
2. What the break-outs share: length, hook, sound, from the "What the break-outs did" table. Say these are counts unless the report calls a pattern.
3. The questions and complaints people leave most, quoted from "What the comments ask".
4. What will not copy, and the "Next plays" table, from the report.
5. What the run could not read (from "What we could not verify") and the cost.

Point the person to `report.html` for the charts and `data/` for every video, comment and baseline row. Never add a number that is not in the report. Accounts under 10,000 followers are described in the report, not named: keep it that way in your answer.

## 5. If the person wants to make a video

Write a brief only when they ask: the length, hook kind and sound of the break-outs it copies, what the comments asked that the video could answer, and the number to check in 14 days (its views against their own median). Never post it for them.
