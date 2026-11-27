# youtube-marketing

Give it a keyword. It reads YouTube's videos and Shorts on it and tells you:

- which broke out, measured against each channel's own earlier uploads, Shorts against Shorts and long videos against long videos;
- what the break-outs did: length, title, hashtags, posting hour;
- what people ask and complain about in the comments, quoted;
- what the top videos say in their first seconds;
- what will not copy for a smaller channel, and what to try next.

It only reads data, and never posts, likes, subscribes or comments for you.

## Install

```bash
npx -y socialcrawl@latest init
```

`init` asks for your SocialCrawl key, or signs you in by email (100 free credits, no card), and installs the skill into the agents it finds. Then ask your agent "what's working on YouTube for home espresso?", or run it in a terminal:

```bash
npx -y socialcrawl@latest youtube-marketing "home espresso"
```

If your keyword means something else outside your field, add one sentence: `--about "making espresso at home"`. Only videos about that are kept.

It reads the last 30 days unless you say otherwise: `--since 2026-11-01 --until 2026-11-15` for a window of your own, or `--since 2000-01-01` for every video the search finds, old hits included.

## Example

`youtube-marketing "AI coding tools"`, run on 27/11/2026:

![The card of the example run](examples/card.svg)

The full report is in [examples/report.md](examples/report.md). In short, over 29/10 to 27/11/2026: 8 of the 12 videos measured broke out at 3 times or more their channel's usual views, out of 18 found in the window above 1,000 views. The largest, @griffinwdesigns's, had 472,754 views against a median of 1,199 over its 9 earlier videos. Three of the eight ran 5 to 10 minutes. The 192 comments read held 31 questions and 20 complaints. A run folder also holds `report.html` with charts, `data/` with every video and comment as CSV, and `responses.jsonl` with every API response.

The example names only channels with 10,000 subscribers or more and links no one else's videos; your own run keeps every link in `data/posts.csv`.

## What it costs

| Run | Reads | Credits |
| --- | --- | --- |
| Default | two searches (videos of the last 30 days, and Shorts cut to it), one batch lookup of likes and durations, one of subscribers, 10 channel shelves, 3 comment sections, 2 transcripts | 34 measured, quoted at about 33, at most 49 |
| `--deep` | two searches of 3 pages, 25 channel shelves of 2 pages, 8 comment sections of 2 pages, 5 transcripts | 105 measured, quoted at about 113, at most 141 |

The run prints its price, then runs. If your balance is short, it reads what the balance covers and says what it left out.

Measured 27/11/2026 on "AI coding tools", 29/10 to 27/11/2026, uncached: default 34 credits, 19 calls, 86 s (req-VA3PVDlVrWddMDBp to req-xU1GxEmPsxq9w7Z7); `--deep` 105 credits, 42 calls, 381 s (req-sYQSmU0UEwUEcC0o to req-SVEBmJQxhL0iYCge), most of the time spent reading channel shelves.

## How it measures a video

The video search asks YouTube for this month; the Shorts search cannot take a date, so its Shorts are cut to the window by their publish date. A video's views are divided by the median views of the same channel's 8 to 20 uploads of the same kind published before it: a Short against the channel's Shorts shelf, a long video against its Videos tab, the video itself left out. Under 8 earlier uploads it gives no number. 3 times or more is a break-out. Search Shorts carry no channel, so one batch lookup fills each video's channel, likes and duration, and a second gives each channel's subscriber count. Channels are read in order of views: views over subscribers was a poor guide to a channel's own median when measured.

## What it cannot read

- Who shared a video: YouTube has no list of who shared it.
- Channels beyond the 10 measured (25 with `--deep`): their videos are listed without a multiple.
- Sound: YouTube rows carry no music, so the sound table stays empty.
- Videos posted before the window: they are counted and left out; `--since 2000-01-01` reads all time.
- Sponsorship: the report does not read YouTube's paid-promotion flag and never calls a channel paid.

## What it calls

SocialCrawl's API only (`youtube/search`, `youtube/videos`, `youtube/channels`, `youtube/channel/videos`, `youtube/channel/shorts`, `youtube/video/comments`, `youtube/transcripts`), with your key. No other service.

## Code

The workflow's code and tests are in [socialcrawl/cli](https://github.com/socialcrawl/cli) under `src/workflows/youtube-marketing/` and `src/workflows/_video/`.
