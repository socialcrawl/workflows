---
name: social-teardown
description: Take one social account apart, or several handles of one brand, from its public posts. Use when someone says "teardown of @<handle>", "how does <brand> grow on X", "reverse-engineer <account>", "what works for <creator> on TikTok", "why do <brand>'s posts go viral", "who amplifies <account>'s launches", "social-teardown <handle>", or wants a competitor's or creator's playbook read from data. Works on X, TikTok, Instagram, YouTube, LinkedIn, Reddit and Threads. Returns the posts that broke out against the account's own earlier posts, what its top posts share, when it posts, its launches, who reposted, quoted and replied, what people ask, the words of its videos, and where it sends people.
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

# Social teardown

Run the `social-teardown` workflow on the account the person names, and answer from the report it writes. It reads public posts only; it never posts, follows, likes or replies.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, ask the person for the email they want to sign in with (their SocialCrawl account's, or a new one: 100 free credits, no card). Run `npx -y socialcrawl@latest init --email <their email>`, and give them the link and the 6-digit code it prints. When they say they have signed in, run `npx -y socialcrawl@latest init` to finish. If they already have a key, tell them to run `npx -y socialcrawl@latest init` in their own terminal and paste it there, or to set SOCIALCRAWL_API_KEY. Never ask for a key in the chat, and never print one.

## 2. Name the accounts

| The person says | Pass |
| --- | --- |
| an X handle | `@handle` |
| a handle on another platform | `tiktok:name`, `ig:name`, `yt:@name`, `threads:name`, `reddit:u/name` |
| a profile link | the link itself; LinkedIn always needs the link (`linkedin.com/company/<name>` or `linkedin.com/in/<name>`) |
| a brand with several accounts | all of them in one quoted argument, for example `"@notionhq tiktok:notionhq yt:@Notion"`, or the brand and its founder: `"@brand @founder"` |

A link to one post is not an account. For one video, use `video-teardown` instead.

## 3. Run it

```bash
npx -y socialcrawl@latest social-teardown "<accounts>"
```

The CLI prints the price (about 80 credits, at most 100) and runs; a default run takes about 4 to 5 minutes. Several accounts share those 100 credits. Add `--deep` when the person wants the whole history and every top post's reposters, quotes, replies and words read, as a research piece (about 440 to 490 credits, at most 600, and about 20 minutes; say so when you start one). To tell the person the price first, run it with `--plan`, which prints the free quote and spends nothing. `--budget <n>` caps a run; `--since` and `--until` (YYYY-MM-DD) set a window. If the balance is short, the run reads what it covers and says what it left out.

## 4. Answer from the report

The run prints the path of its `report.html`. Read `report.md` in the same folder and answer in a few lines:

1. The post that broke out most, with its multiple against the account's own earlier posts, and the share of the reach the break-outs carry.
2. What the top posts share against the bottom ones, only the traits the report calls in "What the top posts share". If it calls none, say no trait stood out; the length table is a description, not a finding.
3. On X: the launches, the hour they go out, and who reposted, quoted and replied, as the report states it.
4. What people ask in the comments, quoted from the report.
5. What the run could not read (from "What we could not verify") and the cost.

Point the person to `report.html` for the charts and `data/` for every post read. Then offer one of the report's "Next plays", with its command as the report writes it.

## 5. Rules for the answer

- Never add a number the report does not state.
- Name an account only where the report names it. The report names the account read and accounts with more than 10,000 followers; it describes everyone else ("an account with 2,300 followers"). Do the same, and never take a name from the `data/` files: they hold every handle read, for the person's own use.
- Say what was seen, not why. Early quotes and repeat repliers are timing and repetition. Never call them a ring, a squad, bots or paid, and never suggest anyone arranged them.
- A post flagged with few likes for its views "may have been promoted", as the report says. Keep the "may".
