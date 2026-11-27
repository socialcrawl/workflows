# /tiktok-marketing "AI coding tools"

TikTok · 29/10/2026 to 27/11/2026 · topic filter: `AI coding tools` · 43 videos read · default run

## In short

1. 5 of 5 videos with a baseline broke out at 3 times or more their creator's usual views, out of 35 candidates above the floor [F1].
2. The largest: a creator with 332 followers, 862x over 20 earlier videos [F2].
3. 3 of 5 break-outs share the length `30 to 60 s` [F7].
4. 18 questions and 3 complaints in 125 comments read [F8].
5. 27 candidates had no baseline read; see What we could not verify [F1].

## What broke out

Each video is measured against its creator's own videos published before it; 5 of 5 reached 3 times or more [F1].

| # | Account | Published | × its usual views | Views | Baseline | Length | Hook | Link |
|---|---|---|---|---|---|---|---|---|
| 1 | a creator with 332 followers | 23/11/2026 | 862x | 37,492 | median of 43.5 views over 20 earlier videos, 20/11 to 22/11/2026 | 30 to 60 s | Mayan, Claude Code $100/bln bisa jalan Rp0 modal satu repo GitHub ini. | in data/posts.csv |
| 2 | @jameseer33 | 14/11/2026 | 498x | 1,129,564 | median of 2,270 views over 11 earlier videos, 19/10 to 24/10/2026 | 3 min or more | How Modders Used AI to Turn Any App Into Source Code | https://www.tiktok.com/@jameseer33/video/7708004958687284510 |
| 3 | a creator with 3,059 followers | 21/11/2026 | 134x | 164,412 | median of 1,226.5 views over 18 earlier videos, 11/11 to 20/11/2026 | 30 to 60 s | Anthropic just dropped the Claude Forward Deployed Engineer path: 11 courses that teach you to roll | in data/posts.csv |
| 4 | a creator with 1,371 followers | 22/11/2026 | 110x | 90,368 | median of 823 views over 20 earlier videos, 01/11 to 21/11/2026 | 1 to 3 min | A software factory is agentic coding at level 5. | in data/posts.csv |
| 5 | a creator with 1,739 followers | 15/11/2026 | 106x | 185,421 | median of 1,754.5 views over 10 earlier videos, 01/11 to 14/11/2026 | 30 to 60 s | Claude Code is wasting your tokens 🔥 4 free plugins that fix it. | in data/posts.csv |

## What the break-outs did

| Trait | Value | Break-outs (of 5) | The rest (of 0) |
|---|---|---|---|
| sound | original | 5 | 0 |
| hook | statement | 4 | 0 |
| hour (UTC) | 12:00 to 17:59 | 3 | 0 |
| length | 30 to 60 s | 3 | 0 |
| hook | news | 1 | 0 |
| hour (UTC) | 00:00 to 05:59 | 1 | 0 |
| hour (UTC) | 18:00 to 23:59 | 1 | 0 |
| length | 3 min or more | 1 | 0 |
| length | 1 to 3 min | 1 | 0 |

These are counts, not a pattern: 2 settled videos carry a multiple and 24 are needed to compare the top third with the bottom third [F7].

## Sounds and hashtags

| Sound | Kind | Videos measured | Break-outs |
|---|---|---|---|
| a creator's own sound | own | 5 | 5 |

| Hashtag | Break-outs | The rest |
|---|---|---|
| #claudecode | 3 | 0 |
| #claude | 2 | 0 |
| #ai | 2 | 0 |
| #aigratis | 1 | 0 |
| #fastrackai | 1 | 0 |
| #chatgpt | 1 | 0 |
| #aiexplained | 1 | 0 |
| #openai | 1 | 0 |
| #anthropic | 1 | 0 |
| #mcp | 1 | 0 |

## What the comments ask

Comments read on the top videos, labelled by the API [F8].

| Kind | Comments | Most liked |
|---|---|---|
| questions | 18 | "Someone reverse engineer a YouTube version of Shazam so i can know where these TikTok clip users get these video essays from." · "My question is, when the software companies can’t make any money, what’s going to drive the whole industry?" · "so official nvidia drivers for linux?" |
| buying signals | 5 | "How do I find this?" · "where can I find this?" · "I can’t find it" |
| complaints | 3 | "Except Claude will refuse to use it. It even refused to port a game for me that’s completely open source and copyright free…." · "How do I find this?" · "I can’t find it" |

## What was said aloud

| Video | First words |
|---|---|
| a creator with 332 followers | "sekarang kamu bisa pakai cloud kode gratis hampir tanpa batas gara-gara satu tool AI di github ada 10 miliar token AI gratis jatahnya diisi ulang tiap bulan dan semuanya dari satu revo jadi kamu nggak perlu pusing kuota habis di …" |

## Accounts to watch

| Account | Followers | Best multiple | Break-outs |
|---|---|---|---|
| @jameseer33 | 22,283 | 498x | 1 |

4 break-outs came from accounts under 10,000 followers or of unknown size; they are described here and listed in data/posts.csv [F1].

## What will not copy

No break-out here rests on a large audience, a comment gate, a trending sound or unusual engagement [F1].

## Next plays

| Play | Command | What to check |
|---|---|---|
| Read deeper: more searches, more creators, more comments | `npx -y socialcrawl@latest tiktok-marketing "AI coding tools" --deep` | free quote first: about 124 credits, at most 176 |
| Track the top break-out (a creator with 332 followers) | `npx -y socialcrawl@latest post-tracker <the first link in data/posts.csv>` | its views in 14 days against 37,492 today |
| Take it apart shot by shot | `npx -y socialcrawl@latest video-teardown <the first link in data/posts.csv>` | its structure, words and comments |
| Post your own video with the length `30 to 60 s` | - | in 14 days, whether it reached 3 times your own median views |

## How this was read

- search:top, tiktok/search: read 30 rows on 1 page, kept 24, back to 14/11/2026 (stopped: max pages); dropped 6 off topic (2 credits)
- search:most-liked, tiktok/search: read 30 rows on 1 page, kept 19, back to 29/10/2026 (stopped: max pages); dropped 11 off topic (2 credits)
- baseline:tiktok, tiktok/profile/videos: read 8 rows on 1 page, back to 29/10/2026 (1 credit)
- baseline:tiktok, tiktok/profile/videos: read 11 rows on 2 pages, back to 18/10/2026 (2 credits)
- baseline:tiktok, tiktok/profile/videos: read 27 rows on 3 pages, back to 19/11/2026 (stopped: max pages) (3 credits)
- baseline:tiktok, tiktok/profile/videos: read 19 rows on 2 pages, back to 01/11/2026 (2 credits)
- baseline:tiktok, tiktok/profile/videos: read 28 rows on 3 pages, back to 25/10/2026 (stopped: max pages) (3 credits)
- baseline:tiktok, tiktok/profile/videos: read 30 rows on 3 pages, back to 11/11/2026 (stopped: max pages) (3 credits)
- baseline:tiktok, tiktok/profile/videos: read 30 rows on 3 pages, back to 24/10/2026 (stopped: max pages) (3 credits)
- baseline:tiktok, tiktok/profile/videos: read 10 rows on 1 page, back to 19/10/2026 (stopped: max pages) (1 credit)
- baseline:tiktok, tiktok/profile/videos: read 15 rows on 2 pages, back to 05/11/2026 (2 credits)
- comments:tiktok, tiktok/post/comments: read 50 rows on 1 page, back to 24/11/2026 (stopped: max pages) (1 credit)
- comments:tiktok, tiktok/post/comments: read 49 rows on 1 page, back to 14/11/2026 (stopped: max pages) (1 credit)
- comments:tiktok, tiktok/post/comments: read 26 rows on 1 page, back to 21/11/2026 (1 credit)

## What we could not verify

- Who shared each video: TikTok has no list of who shared a video, so amplifiers are not read
- 8 videos under the reach floor: under 1,000 views, so not measured
- 27 candidates with no baseline: outside the creators chosen for a baseline at this depth (check by hand: socialcrawl tiktok-marketing "AI coding tools" --deep)
- 3 videos with too few earlier videos: fewer than 8 comparable videos before it on the pages read, so no multiple is given
- [F7] too few videos to call a pattern: 2 settled with a multiple, 24 needed

## Method notes

- A break-out is a video at 3 times or more the median views of its creator's 8 to 20 comparable videos published before it; under 8 such videos no multiple is given.
- Candidates are original videos at or above 1,000 views from the topic-filtered searches; views over followers decides which creators are read first.
- Every search sends the topic filter; no baseline does. Comment labels are sent explicitly and counted at p of 0.5 or more.
- Accounts under 10,000 followers, or whose size was not read, are described, not named or linked; data/posts.csv keeps every row.
- Findings are labelled seen, seen, but self-reported, inferred, unknown; a count that could not be read is shown as unknown (unknown, not zero).

---

Read with SocialCrawl /tiktok-marketing · 37 credits · 15 calls · 59.8 s · 27/11/2026 · v0.1.0
