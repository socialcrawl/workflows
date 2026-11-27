---
name: socialcrawl-reddit-marketing
description: Find where a topic is discussed on Reddit and what people there ask for. Use when someone says "what does Reddit say about <topic>", "find Reddit threads about <product or keyword>", "which subreddits talk about <topic>", "where should I answer on Reddit", "reddit-marketing <keyword>", or wants Reddit research before a launch. Returns the threads that beat their community's usual top post, the questions and complaints in the comments, each community's rule on promotion, and the recent threads where a disclosed reply would help.
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

# Reddit marketing

Run the `reddit-marketing` workflow on the person's keyword and answer from the report it writes. It reads Reddit only; it never posts, votes or replies.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, ask the person for the email they want to sign in with (their SocialCrawl account's, or a new one: 100 free credits, no card). Run `npx -y socialcrawl@latest init --email <their email>`, and give them the link and the 6-digit code it prints. When they say they have signed in, run `npx -y socialcrawl@latest init` to finish. If they already have a key, tell them to run `npx -y socialcrawl@latest init` in their own terminal and paste it there, or to set SOCIALCRAWL_API_KEY. Never ask for a key in the chat, and never print one.

## 2. Pick the keyword

Use the words the person would expect on Reddit: a product category ("headless CMS"), a product name, or a problem ("invoice reminders"). A phrase of two or more words is searched as a phrase. If the keyword has another meaning outside the person's field, add `--about` with one plain sentence, for example `--about "invoicing software for freelancers"`; only threads about that are kept.

## 3. Run it

```bash
npx -y socialcrawl@latest reddit-marketing "<keyword>"
```

The CLI prints the price (about 29 credits) and runs. A run usually takes under a minute and can take up to five when Reddit is slow, so allow that long before treating it as stuck. Add `--deep` when the person wants a year of threads, eight communities and eight comment trees (about 76 credits). If their balance is short, the run reads what it covers and says what it left out.

## 4. Answer from the report

The run ends by printing the path of its `report.html`. Read `report.md` in the same folder and answer in a few lines:

1. Whether any thread beat its community's usual top post, and the closest one with its multiple.
2. How many threads ask for a recommendation, and the two or three questions people ask most in the comments, quoted.
3. The threads worth a reply, each with its community's rule on promotion. Where the report says a community's rules were not read or not returned, tell the person to read them on the community's page before replying.
4. What the run could not read (from "What we could not verify") and the cost.

Point the person to `report.html` for the charts and `data/` for every thread and comment. Never add a number that is not in the report, and never name a Reddit member.

## 5. If the person wants to reply

Draft a reply only when they ask. It must say who they are and that they work on the product, answer the question asked, and follow the community's rule shown beside the thread. Never post it for them.
