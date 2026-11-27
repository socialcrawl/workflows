---
name: video-teardown
description: Take one video apart from its link (TikTok, YouTube, Instagram or X) - how it did against its creator's own earlier videos, a storyboard of what is on screen and what is said second by second, its words, its sound, and what the comments ask. Use when someone says "break down this video", "why did this TikTok work", "reverse engineer this reel", "what's the structure of this video", "video-teardown <link>", or shares a video link and asks what made it work. Returns measured blocks the agent reads; what each beat does is the agent's reading, marked inferred.
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

# Video teardown

Run the `video-teardown` workflow on the person's video link and answer from the report it writes. It reads public data only and never downloads the video; it never posts, likes, follows or comments.

## 1. Make sure the CLI and key are ready

Run `npx -y socialcrawl@latest whoami`. If it says no key is set, ask the person for the email they want to sign in with (their SocialCrawl account's, or a new one: 100 free credits, no card). Run `npx -y socialcrawl@latest init --email <their email>`, and give them the link and the 6-digit code it prints. When they say they have signed in, run `npx -y socialcrawl@latest init` to finish. If they already have a key, tell them to run `npx -y socialcrawl@latest init` in their own terminal and paste it there, or to set SOCIALCRAWL_API_KEY; never take the key in the chat. Never print a key.

## 2. Run it

```bash
npx -y socialcrawl@latest video-teardown "<video link>"
```

It takes one link to a TikTok video, a YouTube video or Short, an Instagram reel or an X post with a video. The CLI prints its price, then runs; use its figures, not these. Measured runs cost 7 credits on YouTube, 14 on X, 15 to 21 on TikTok and 29 on Instagram. Add `--deep` to read more comments.

## 3. Answer from the report

The run ends by printing the path of its `report.html`. Read `report.md` in the same folder and answer in this order:

1. How it did: its views and the multiple against its creator's usual views, with the baseline ("a median of N over M earlier videos"), from "In short" and "How it did", where the likes, comments, shares and saves are too. If there is no multiple, say why.
2. The storyboard. Copy the table's beats as they are, then add your reading of what each beat does: grab attention, set up the problem, show proof, turn, call to action. Label that reading "(inferred)" every time: the report measures what is on screen and what is said, not what a beat is for. The table has an "On screen" column when text was read off the frames by the second, and a "Said" column when the transcript has times; a "-" means nothing was read in that window. When a column is missing, or there is no storyboard, say why in the report's words ("X gives no frames", "The frames were read and show no text", "its transcript has no times").
3. The hook: what the report says it opens with, quoted exactly. If it gives only the words or only the on-screen text, say the other was not found rather than guessing it.
4. The words: the word count and pace, and a short quote. If the report says "No speech", say the video carries its message on screen or in music; if it says no transcript was read, say the words are unknown, not absent.
5. The sound: its name, and whether it is the creator's own.
6. What the comments ask, quoted from "What the comments ask", and the "Next plays" table.
7. What the run could not read (from "What we could not verify") and the cost.

Never add a number that is not in the report. Accounts under 10,000 followers are described in the report, not named: keep it that way, and do not repeat their video link in your answer. Commenters are never named. Point the person to `report.html`, and to `data/` for the full transcript and on-screen text.
