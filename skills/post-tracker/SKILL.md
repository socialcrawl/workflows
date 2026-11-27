---
name: post-tracker
description: Track one social post over time: its views, likes, comments, shares and quotes now and at every later reading, against its author's usual reach, with a chart. Use when someone says "track this post", "how is my video doing", "keep an eye on this tweet", "is this post still growing", "post-tracker <link>", or pastes a link to an X, TikTok, Instagram, YouTube or Reddit post and asks how it performs. Returns the latest numbers, the multiple over the author's median, the gain since the first reading, and a table and chart of every reading so far.
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

# Post tracker

Run the `post-tracker` workflow on the person's post link and answer from the report it writes. It reads public posts only; it never posts, likes, follows or comments.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, run `npx -y socialcrawl@latest init` and let the person paste their key or sign in by email. Never ask them to paste a key into the chat, and never print it.

## 2. Run it

```bash
npx -y socialcrawl@latest post-tracker "<post link>"
```

It takes a link to one post on X, TikTok, Instagram, YouTube or Reddit. The CLI prints the price and runs: the first run costs 2 to 5 credits (the post, and once its author's earlier posts and size), and every later run about 1 credit for one reading.

Each run adds a reading to the post's history, kept in `socialcrawl-runs/post-tracker-history/` beside the run folders, so run the same command from the same folder to build the curve. To take several readings in one run, add `--every <minutes> --times <n>`, for example `--every 60 --times 6` for six readings an hour apart; the command stays open between readings. If the person wants readings over days, suggest they schedule the plain command (cron, Task Scheduler) rather than leave one run open.

## 3. Answer from the report

The run ends by printing the path of its `report.html`. Read `report.md` in the same folder and answer in a few lines:

1. The post's numbers now, from "Now".
2. Its multiple over its author's usual reach (on Reddit, its community's), from "Against its author's usual reach"; 3 times or more is a break-out.
3. How much it gained since the first reading and over what span, from "Over time". With readings only minutes apart, say the hourly figure is a rough rate.
4. What the run could not read (from "What we could not verify") and the cost.

Point the person to `report.html` for the chart and `data/readings.csv` for every reading. Never add a number that is not in the report, and never guess why the post moved: the readings show how it changed, not what caused it. An author under 10,000 followers is described in the report, not named: keep it that way in your answer.
