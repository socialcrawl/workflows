---
name: social-viral
description: Find the posts that broke out this week on a topic across X, TikTok, Instagram, YouTube, Reddit and LinkedIn, each measured against its own author's earlier posts rather than raw views. Use when someone asks "what went viral about <topic> this week", "what's breaking out in <niche>", "which posts blew up on <topic>", "social-viral <topic>", or wants a cross-platform read of a topic before posting. Returns the break-outs with their multiples, the platforms they came from, what was not read, and next steps.
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

# Social viral

Run the `social-viral` workflow on the person's topic and answer from the report it writes. It reads public posts only; it never posts, likes, follows or comments.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, ask the person for the email they want to sign in with (their SocialCrawl account's, or a new one: 100 free credits, no card). Run `npx -y socialcrawl@latest init --email <their email>`, and give them the link and the 6-digit code it prints. When they say they have signed in, run `npx -y socialcrawl@latest init` to finish. If they already have a key, tell them to run `npx -y socialcrawl@latest init` in their own terminal and paste it there, or to set SOCIALCRAWL_API_KEY; never take the key in the chat. Never print a key.

## 2. Pick the topic

Use the words people write in posts: "AI coding tools", "running shoes", a product name. If the words have another meaning outside the person's field, add `--about` with one plain sentence, for example `--about "AI tools that write and review code for software developers"`; only posts about that are kept. To read fewer platforms, add `--platforms tiktok,instagram,youtube` (any of x, tiktok, instagram, youtube, reddit, linkedin). The window is the last 7 days; `--since` and `--until` (YYYY-MM-DD) set another.

## 3. Run it

```bash
npx -y socialcrawl@latest social-viral "<topic>"
```

The CLI prints the price (about 67 credits, at most 100) and runs. Add `--deep` when the person wants more authors measured (about 140 credits, at most 196). If their balance is short, the run reads what it covers and says what it left out.

## 4. Answer from the report

The run prints the path of its folder. Read `report.md` there and answer in a few lines:

1. How many posts broke out (3 times or more their author's usual reach) on how many platforms, out of how many above the reach floor.
2. The top break-outs with their platform, multiple and what they were compared with, from "The break-outs".
3. Any flag in the Note column (still rising, young posts in its base, unusual engagement), said as the report says it.
4. What will not copy and the next steps, as the report gives them.
5. What the run could not read (from "What we could not verify"), giving each reason as the report writes it: "TikTok's share of this run was used up" is not "the budget ran out". Then the cost.

Point the person to `report.html` for the chart and `data/` for every post read: `posts.csv` (each candidate with its multiple), `search_posts.csv` and `baseline_posts.csv`. Never add a number that is not in the report. Accounts under 10,000 followers are described in the report, not named: keep it that way in your answer.

## 5. If the person wants to go further

To take the leading account apart, run `npx -y socialcrawl@latest social-teardown "<@handle>"` when the report names it. To see whether this week's break-outs held, run the same topic again in 14 days.
