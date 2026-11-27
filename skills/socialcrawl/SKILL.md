---
name: socialcrawl
description: Research social media with SocialCrawl. Use when someone asks what went viral, what people say about a topic or brand on Reddit, X, TikTok, YouTube, Instagram or LinkedIn, how an account grew, or what competitors post. Picks the right SocialCrawl workflow, sets up the key the first time, runs it and reads back the report.
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

# SocialCrawl

Pick the workflow that fits the person's request, run it with the SocialCrawl CLI, and answer from the report it writes.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, ask the person for the email they want to sign in with (their SocialCrawl account's, or a new one: 100 free credits, no card). Run `npx -y socialcrawl@latest init --email <their email>`, and give them the link and the 6-digit code it prints. When they say they have signed in, run `npx -y socialcrawl@latest init` to finish. If they already have a key, tell them to run `npx -y socialcrawl@latest init` in their own terminal and paste it there, or to set SOCIALCRAWL_API_KEY; never take the key in the chat. Never print a key.

## 2. Choose the workflow

| The person wants | Workflow |
| --- | --- |
| What broke out this week on a topic, across platforms | `social-viral` |
| What changed this week about a brand or topic: posts, sentiment, questions | `social-pulse` |
| Where a brand or public figure is on social media, with the evidence for each account | `social-presence` |
| What Reddit says about a keyword, which communities discuss it, and where to reply | `reddit-marketing` |
| How one account grows, or a brand's accounts together: what carried it, its launches, who amplified them | `social-teardown` |
| What works on TikTok for a keyword: the videos breaking out, their hooks and sounds, the comments | `tiktok-marketing` |
| What works in Instagram reels for a keyword: the reels breaking out, their hooks, the comments | `instagram-marketing` |
| What works on YouTube for a keyword: the videos and Shorts breaking out, their titles, the comments | `youtube-marketing` |
| What works on LinkedIn for a keyword: the posts breaking out, who posts most, what the comments ask | `linkedin-marketing` |
| What works on X for a keyword: the posts breaking out, who carried them, what the replies ask | `x-marketing` |
| Two to five brands compared: share of voice, each brand's best post, what each audience asks and complains about | `competitor-research` |
| How one post is doing over time, against its author's usual reach | `post-tracker` |

If two fit, ask one short question. If none fits, say so and suggest the closest.

## 3. Run it

```bash
npx -y socialcrawl@latest <workflow> "<input>"
```

The CLI prints the price, then runs without asking: a default run, or a `--deep` run when the person wants the full read. If their balance cannot cover the whole run, it reads what the balance covers, says what it left out, and ends with a top-up link. Use `--plan` only when the person asks what a run would cost without running it.

Each workflow has its own options, and `npx -y socialcrawl@latest <workflow> --help` lists them. Pass what the person gave: a website as `--website <domain>`, a word with other meanings as `--about "<one plain sentence>"`, dates as `--since`/`--until`.

## 4. Answer from the report

The run prints the path of its folder. Read `report.md` there and answer in a few lines: the headline, the top findings with their numbers, what could not be read, and the cost. Point the person to `report.html` for the charts and `data/` for the raw rows. Never add a number that is not in the report.
