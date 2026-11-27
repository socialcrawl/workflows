---
name: socialcrawl-presence
description: Find a person's or a brand's accounts on LinkedIn, Instagram, TikTok, X, Threads and YouTube, each with the evidence for the match, and how active each one is. Use when someone asks "where is <brand> on social media", "find <name>'s accounts", "is this really <brand>'s account", "social-presence <name>", or wants a brand's or a public figure's profiles in one place. Returns each account as confirmed by a link, judged without a link, possible or not found, with its last post and posts in the last 30 days.
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

# Social presence

Run the `social-presence` workflow on the name and answer from the report it writes. It reads public profiles and posts only. Use it for brands, companies, creators and public figures; it is not for looking up private people.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, ask the person for the email they want to sign in with (their SocialCrawl account's, or a new one: 100 free credits, no card). Run `npx -y socialcrawl@latest init --email <their email>`, and give them the link and the 6-digit code it prints. When they say they have signed in, run `npx -y socialcrawl@latest init` to finish. If they already have a key, tell them to run `npx -y socialcrawl@latest init` in their own terminal and paste it there, or to set SOCIALCRAWL_API_KEY; never take the key in the chat. Never print a key.

## 2. Gather what helps confirm an account

Ask for, or find, the official website: an account that links to it is confirmed. A brand or company is the default; for a person, add `--type person`.

## 3. Run it

```bash
npx -y socialcrawl@latest social-presence "<name>" --website <domain>
```

The CLI prints the price (about 24 credits, at most 43) and runs. If the balance is short, the run reads what it covers and says what it left out.

## 4. Answer from the report

The run prints the path of its folder. Read `report.md` there and answer in a few lines:

1. The accounts confirmed by a link, with the link that confirms each, from "The accounts".
2. The accounts judged the same without a link: say they are not confirmed, in those words.
3. How active each read account is: its last post and posts in the last 30 days, from "Activity".
4. The platforms with nothing found, and what the run could not read, giving each reason as the report writes it, and the cost.

If the report says no account is confirmed by a link, say that first, plainly. Never call an account the brand's own unless the report confirms it, never add a number that is not in the report, and never name an account the report describes instead of naming.

## 5. If the person wants to go further

To follow what is said about the name, run `npx -y socialcrawl@latest social-pulse "<name>"`. To take a confirmed account apart, run `npx -y socialcrawl@latest social-teardown "<@handle>"`.
