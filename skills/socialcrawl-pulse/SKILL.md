---
name: socialcrawl-pulse
description: Find what changed this week about a brand or topic on X, Reddit, TikTok, Instagram, YouTube and LinkedIn, against the week before. Use when someone asks "what are people saying about <brand> this week", "how is sentiment on <topic> changing", "what changed for <brand> this week", "social-pulse <brand>", or wants a weekly read of the conversation around a name. Returns on-topic posts, sentiment, questions, complaints and switching, week on week, the questions people asked, and the posts breaking out.
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

# Social pulse

Run the `social-pulse` workflow on the person's brand or topic and answer from the report it writes. It reads public posts only; it never posts, likes, follows or comments.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, ask the person for the email they want to sign in with (their SocialCrawl account's, or a new one: 100 free credits, no card). Run `npx -y socialcrawl@latest init --email <their email>`, and give them the link and the 6-digit code it prints. When they say they have signed in, run `npx -y socialcrawl@latest init` to finish. If they already have a key, tell them to run `npx -y socialcrawl@latest init` in their own terminal and paste it there, or to set SOCIALCRAWL_API_KEY; never take the key in the chat. Never print a key.

## 2. Pick the name

Use the name people write: "Notion", "Linear", "running shoes". If the name has another meaning (a common word, a person's name), add `--about` with one plain sentence, for example `--about "Linear, the issue tracker for software teams"`; posts are then judged against that sentence. The week ends today; `--until YYYY-MM-DD` ends it on another day.

## 3. Run it

```bash
npx -y socialcrawl@latest social-pulse "<brand or topic>"
```

The CLI prints the price (about 77 credits, at most 100; runs have measured near 45) and runs. Add `--deep` to read two pages a platform and measure more authors (about 162 credits, at most 232). If the balance is short, the run reads what it covers and says what it left out.

## 4. Answer from the report

The run prints the path of its folder. Read `report.md` there and answer in a few lines:

1. On-topic posts this week against the week before, with the change, from "In short".
2. Sentiment: the positive and negative shares and what they were the week before. Say "of the posts with a stance", as the report does.
3. Questions, complaints, recommendations, switching and selling, week on week, from "Week on week".
4. One or two of the questions people asked, quoted from "What people asked", with the platform. Never name the person who asked.
5. Any post breaking out, with its multiple, from "Posts breaking out".
6. What the run could not read, giving each reason as the report writes it, and the cost.

These counts are of the posts the same searches returned each week, not every post on the platforms: say so if the person reads them as totals. Point the person to `report.html` for the chart and `data/` for every post read. Never add a number that is not in the report. Accounts under 10,000 followers are described, not named: keep it that way.

## 5. If the person wants to go further

To see what broke out on the topic across platforms with more authors measured, run `npx -y socialcrawl@latest social-viral "<topic>"`. To follow the change, run the same pulse again next week.
