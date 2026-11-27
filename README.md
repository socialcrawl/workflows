<div align="center">
  <img src="https://www.socialcrawl.dev/images/logo.png" alt="SocialCrawl" height="90">

  <h3>SocialCrawl Workflows</h3>
  <p>Ask your agent what went viral, what people say about a brand, or how a competitor's posts do. It reads the posts and hands back a finished report with the raw data.</p>

  <a href="https://github.com/socialcrawl/workflows/actions/workflows/check.yml"><img src="https://github.com/socialcrawl/workflows/actions/workflows/check.yml/badge.svg" alt="check"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/socialcrawl/workflows" alt="MIT licence"></a>
</div>

---

```bash
npx -y socialcrawl@latest init
```

Then ask your agent "what went viral about AI coding tools this week?". A new account gets 100 free credits, no card, and every default run below fits inside them.

## Workflows

| Workflow | Give it | Get back | Default run, measured |
| --- | --- | --- | --- |
| [`socialcrawl`](skills/socialcrawl/) | a question in plain words | the right workflow below, run for you | the workflow it picks |
| [`social-viral`](skills/social-viral/) | a topic | the posts that broke out this week on X, TikTok, Instagram, YouTube, Reddit and LinkedIn, each against its author's earlier posts | 61 credits |
| [`social-pulse`](skills/social-pulse/) | a brand or topic | what changed this week against the week before: on-topic posts, sentiment, questions, complaints, and the posts breaking out | 43 credits |
| [`social-presence`](skills/social-presence/) | a brand's or public figure's name, and its website | its accounts on six platforms, each confirmed by a link or marked as not confirmed, with how active each is | 23 credits |
| [`tiktok-marketing`](skills/tiktok-marketing/) | a keyword | the TikTok videos breaking out on it against their creators' earlier videos, with their lengths, hooks, sounds and what the comments ask | 38 credits |
| [`instagram-marketing`](skills/instagram-marketing/) | a keyword | the Instagram reels breaking out on it against their creators' earlier reels, with their lengths, hooks and what the comments ask | 39 credits |
| [`youtube-marketing`](skills/youtube-marketing/) | a keyword | the YouTube videos and Shorts breaking out on it against their channels' earlier uploads, with their lengths, titles and what the comments ask | 34 credits |
| [`linkedin-marketing`](skills/linkedin-marketing/) | a keyword | the LinkedIn posts breaking out on it against their authors' earlier posts on likes, the companies and members posting most, and what the comments ask | 48 credits |
| [`x-marketing`](skills/x-marketing/) | a keyword | the X posts breaking out on it against their authors' earlier posts, who retweeted and quoted the top ones, which look boosted, and what the replies ask | 36 credits |
| [`competitor-research`](skills/competitor-research/) | two to five brands | each brand's share of the posts read per platform, its best post against its author's usual reach, and what its audience asks and complains about | 48 credits |
| [`post-tracker`](skills/post-tracker/) | a post link | its views, likes, comments and quotes now and at every later reading, against its author's usual reach, with a chart | 2 to 5 credits, then 1 a reading |
| [`video-teardown`](skills/video-teardown/) | a video link | how it did against its creator's earlier videos, a storyboard of what is on screen and said, its words, sound and comments | 7 to 29 credits, by platform |
| [`reddit-marketing`](skills/reddit-marketing/) | a keyword | the threads that beat their community, what people ask, each community's rule on promotion, and where a disclosed reply would help | 28 credits |
| [`social-teardown`](skills/social-teardown/) | an account, or several handles of one brand | the posts that broke out against its own, what its top posts share, its launches, who carried them, what people ask, and where it sends people | 74 credits |

Each cost was measured on 27/11/2026 with nothing cached; each workflow's page gives the input and the request ids. `--deep` reads more and costs more, and the run says how much before it starts.

## What you get back

Every card below comes from a real run on 27/11/2026. Click one for its full report.

<table>
<tr>
<td width="50%" valign="top"><a href="skills/social-viral/examples/report.md"><img src="skills/social-viral/examples/card.svg" alt="social-viral card"></a><br><b>social-viral</b> "AI coding tools": 11 posts broke out at 3x their author's usual reach, on 5 platforms. The largest, on X, at 48.1x.</td>
<td width="50%" valign="top"><a href="skills/social-pulse/examples/report.md"><img src="skills/social-pulse/examples/card.svg" alt="social-pulse card"></a><br><b>social-pulse</b> "Notion": 67 on-topic posts this week, up 34%, and 68% positive against 41% the week before.</td>
</tr>
<tr>
<td valign="top"><a href="skills/social-presence/examples/report.md"><img src="skills/social-presence/examples/card.svg" alt="social-presence card"></a><br><b>social-presence</b> "Linear": 2 accounts confirmed by a link, on LinkedIn and X, and 1 judged the same without one.</td>
<td valign="top"><a href="skills/competitor-research/examples/report.md"><img src="skills/competitor-research/examples/card.svg" alt="competitor-research card"></a><br><b>competitor-research</b> "Supabase, Firebase, Neon": Supabase had the most posts on 3 of 4 platforms, and the largest break-out, 104x its community's usual score on Reddit.</td>
</tr>
<tr>
<td valign="top"><a href="skills/tiktok-marketing/examples/report.md"><img src="skills/tiktok-marketing/examples/card.svg" alt="tiktok-marketing card"></a><br><b>tiktok-marketing</b> "AI coding tools": all 6 videos it could measure broke out, the largest at 498x its creator's usual views.</td>
<td valign="top"><a href="skills/instagram-marketing/examples/report.md"><img src="skills/instagram-marketing/examples/card.svg" alt="instagram-marketing card"></a><br><b>instagram-marketing</b> "AI coding tools": all 5 reels it could measure broke out, the largest at 53x its creator's usual views.</td>
</tr>
<tr>
<td valign="top"><a href="skills/youtube-marketing/examples/report.md"><img src="skills/youtube-marketing/examples/card.svg" alt="youtube-marketing card"></a><br><b>youtube-marketing</b> "AI coding tools": 8 of 12 measured videos broke out, the largest at 394x its channel's usual views.</td>
<td valign="top"><a href="skills/x-marketing/examples/report.md"><img src="skills/x-marketing/examples/card.svg" alt="x-marketing card"></a><br><b>x-marketing</b> "AI coding tools": 5 of 11 measured posts broke out, the largest at 8x its author's usual views.</td>
</tr>
<tr>
<td valign="top"><a href="skills/linkedin-marketing/examples/report.md"><img src="skills/linkedin-marketing/examples/card.svg" alt="linkedin-marketing card"></a><br><b>linkedin-marketing</b> "AI coding tools": 1 post broke out at 4.3x its author's usual likes, and 9 of the 51 comments read are phrased as questions.</td>
<td valign="top"><a href="skills/post-tracker/examples/report.md"><img src="skills/post-tracker/examples/card.svg" alt="post-tracker card"></a><br><b>post-tracker</b> on an IBM Technology video: 19x its channel's usual views, gaining about 3,181 views an hour.</td>
</tr>
<tr>
<td valign="top"><a href="skills/video-teardown/examples/report.md"><img src="skills/video-teardown/examples/card.svg" alt="video-teardown card"></a><br><b>video-teardown</b> on an Instagram reel: 54x its creator's usual views, with a storyboard of what is on screen second by second.</td>
<td valign="top"><a href="skills/social-teardown/examples/report.md"><img src="skills/social-teardown/examples/card.svg" alt="social-teardown card"></a><br><b>social-teardown</b> "@notionhq": 5 of its 60 own posts broke out, the largest at 34.7x its usual views, and together they carry 48% of the views.</td>
</tr>
<tr>
<td valign="top"><a href="skills/reddit-marketing/examples/report.md"><img src="skills/reddit-marketing/examples/card.svg" alt="reddit-marketing card"></a><br><b>reddit-marketing</b> "headless CMS": no thread beat its community's usual top post 3 times over, the closest at 2.67x in r/nextjs, and 9 of 33 threads asked for a recommendation.</td>
</tr>
</table>

## Install

```bash
npx -y socialcrawl@latest init
```

`init` takes your SocialCrawl key, or signs you in by email, then installs these skills into the agents it finds: Claude Code, Cursor, Codex, Gemini CLI and GitHub Copilot. When an agent runs it for you, it asks for your email, never your key, and gives you a link and a 6-digit code to sign in.

To install the skills alone:

```bash
npx skills add socialcrawl/workflows
```

In Claude Code you can also add this repository as a plugin marketplace:

```
/plugin marketplace add socialcrawl/workflows
```

## How a run works

Ask in plain words (`/socialcrawl what went viral in AI coding tools this week?`), or run one in a terminal:

```bash
npx -y socialcrawl@latest social-viral "AI coding tools"
```

The run prints its price, then runs, with no approval step. If your balance cannot cover all of it, it reads what the balance covers, says what it left out, and links to a top-up. Then it writes a run folder:

| File | What is in it |
| --- | --- |
| `report.html` | The report with charts, one page, works offline |
| `report.md` | The same report as text, for your agent or a doc |
| `card.svg` | A 1200 × 675 card with the headline numbers, like the ones above |
| `data/*.csv` | Every row it read, so you keep the raw data |
| `responses.jsonl` | Every API response, with its request id |
| `evidence.json` | Each claim and the requests behind it |

Every number links back to the request that produced it, and the report has a section on what it could not read and why.

## What it never does

- It never posts, likes, follows, comments or messages. It only reads public posts.
- It never names an account under 10,000 followers, unless it is a company, a founder, a verified account or the one you asked about. It describes the account instead, and your own `data/` keeps every row.
- It never takes your key in the chat, and never prints it.
- It names no data supplier. Every number comes from the SocialCrawl API and carries its request id.
- It never adds a number the run did not read. A count it could not read is shown as unknown, not zero.

## Contributing

See [CONTRIBUTING](https://github.com/socialcrawl/.github/blob/main/CONTRIBUTING.md). Each workflow lives in `skills/<name>/` with a `SKILL.md`, a `README.md` and an example run in `examples/`; `node scripts/check.mjs` checks them. The workflows run on the [SocialCrawl CLI](https://github.com/socialcrawl/cli), where their code and tests live.

## Licence

MIT
