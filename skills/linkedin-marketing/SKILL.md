---
name: linkedin-marketing
description: Find the LinkedIn posts breaking out this week on a keyword, each measured against its author's own earlier posts on likes, plus the companies and members posting most and what the comments ask. Use when someone asks "what's working on LinkedIn for <keyword>", "which LinkedIn posts about <topic> took off", "who posts most about <topic> on LinkedIn", "linkedin-marketing <keyword>", or wants a LinkedIn read before writing a post. Returns the break-outs with their multiples, who posts most, the questions in the comments, and each thing LinkedIn does not give.
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

# LinkedIn marketing

Run the `linkedin-marketing` workflow on the person's keyword and answer from the report it writes. It reads public posts and comments only; it never posts, reacts, connects or comments.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, ask the person for the email they want to sign in with (their SocialCrawl account's, or a new one: 100 free credits, no card). Run `npx -y socialcrawl@latest init --email <their email>`, and give them the link and the 6-digit code it prints. When they say they have signed in, run `npx -y socialcrawl@latest init` to finish. If they already have a key, tell them to run `npx -y socialcrawl@latest init` in their own terminal and paste it there, or to set SOCIALCRAWL_API_KEY; never take the key in the chat. Never print a key.

## 2. Pick the keyword

Use the words people write in LinkedIn posts: "AI coding tools", "product-led growth", a product name. If the words have another meaning outside the person's field, add `--about` with one plain sentence, for example `--about "AI coding tools for software developers"`; only posts about that are kept. The window is the last 7 days; `--deep` reads the last month.

## 3. Run it

```bash
npx -y socialcrawl@latest linkedin-marketing "<keyword>"
```

The CLI prints the price (about 53 credits, at most 74) and runs. Add `--deep` for the month and twice as many members' earlier posts (about 96 credits, at most 138). If their balance is short, the run reads what it covers and says what it left out.

## 4. Answer from the report

The run prints the path of its folder. Read `report.md` there and answer in a few lines:

1. How many posts broke out (3 times or more their author's usual likes) out of how many posts read, from "In short".
2. The break-outs with their multiple, likes and what they were compared with, from "Posts breaking out".
3. Who posts most, from "Who posts most": the companies by name, and the count of other members as the report gives it.
4. The questions in the comments, quoted as the report quotes them. Say that LinkedIn comments carry no labels, so these are comments phrased as questions.
5. What the run could not read (from "What we could not verify"), giving each reason as the report writes it, then the cost.

Say the LinkedIn gaps plainly when they matter to the answer: LinkedIn gives no view counts (posts are compared on likes), its post search gives no follower counts (members are described, not named), and company posts are counted but not measured (a company's earlier posts need a numeric id the search does not give).

Point the person to `report.html` for the chart and `data/` for every row read: `posts.csv`, `baseline_posts.csv` and `comments.csv`. Never add a number that is not in the report, and never name a member the report describes.

## 5. If the person wants to go further

To read the same keyword on every platform, run `npx -y socialcrawl@latest social-viral "<keyword>"`. To see a brand's accounts across platforms, run `npx -y socialcrawl@latest social-presence "<brand>" --website <domain>`.
