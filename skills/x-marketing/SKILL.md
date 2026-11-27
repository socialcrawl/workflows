---
name: x-marketing
description: Find the X (Twitter) posts breaking out on a topic, measured against each author's own earlier posts, and who carried them. Use when someone says "what's working on X for <topic>", "which tweets went viral about <keyword>", "who is driving the conversation about <keyword> on Twitter", "x-marketing <keyword>", or wants X research before posting. Returns the break-outs with their multiples, who retweeted and quoted the top ones, posts marked likely boosted (inferred), what the replies ask, and what to try next.
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

# X marketing

Run the `x-marketing` workflow on the person's keyword and answer from the report it writes. It reads public X posts only; it never posts, likes, retweets, follows or replies.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, run `npx -y socialcrawl@latest init` and let the person paste their key or sign in by email. Never ask them to paste a key into the chat, and never print it.

## 2. Pick the keyword

Use the words people write in posts: a topic ("vector databases"), a product category or a product name. If the keyword has another meaning outside the person's field, add `--about` with one plain sentence, for example `--about "content management systems for developers"`; only posts about that are kept.

## 3. Run it

```bash
npx -y socialcrawl@latest x-marketing "<keyword>"
```

The CLI prints the price (about 35 credits, at most 55) and runs. Add `--deep` when the person wants more pages, retweeters and quotes on more posts, and more replies, and it measures up to 30 authors instead of 12 (about 99 credits, at most 143). If their balance is short, the run reads what it covers and says what it left out.

By default it reads the last 30 days. If the person names a period, pass `--since YYYY-MM-DD` and `--until YYYY-MM-DD`; for all time, `--since 2000-01-01`. The line under the report's title states the window (for example `X · 29/10/2026 to 27/11/2026`): say it in your answer.

## 4. Answer from the report

The run ends by printing the path of its `report.html`. Read `report.md` in the same folder and answer in a few lines:

1. How many posts broke out (3 times or more their author's usual views) out of how many had a baseline, as the first line of "In short" puts it, and the largest, with its multiple and baseline.
2. Who carried the top ones, from "Who carried them": for each post, how many retweeters were read and how many of them have 10,000 followers or more, and the quotes found. Give the counts per post; do not add them up. "not read" means the run did not search that post's quotes at this depth (`--deep` searches more). Say the quote search finds about two thirds of a post's quotes.
3. Any post marked likely boosted (inferred) or unusual engagement (inferred): they are listed in a table under "What broke out" and counted in "What will not copy". If that section says no break-out rests on a flagged pattern, say none was flagged. Repeat the report's words exactly: never say a post or an account was paid, and never call an account a bot.
4. What the replies ask, quoted from "What the replies ask", and the "Next plays" table. Replies are not filtered for the topic: if the quotes wander off the keyword, say so rather than present them as about it.
5. What the run could not read (from "What we could not verify") and the cost.

Point the person to `report.html` for the charts and `data/` for every post, retweeter count and quote count. Never add a number that is not in the report. Accounts under 10,000 followers are described in the report, not named: keep it that way in your answer.
