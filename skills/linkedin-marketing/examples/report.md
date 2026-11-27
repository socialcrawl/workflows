# /linkedin-marketing "AI coding tools"

LinkedIn · 21/11/2026 to 27/11/2026 · 26 posts read · v0.1.0

## In short

1. 1 LinkedIn post broke out this week at 3x its author's usual likes [F1]
2. A member at 4.3x their median likes over 10 earlier posts [F2]
3. 9 of the 51 comments read are phrased as questions [F3]

## Posts breaking out

Members' posts with 20 likes or more, each against the same member's earlier posts. LinkedIn gives no view counts, so posts are compared on likes.

| # | Post | Multiple | Likes | Compared with |
| --- | --- | --- | --- | --- |
| 1 [F2] | a member | 4.3x | 45 | median 11 over 10 posts |

## Who posts most

| Author | Kind | Posts | Likes |
| --- | --- | --- | --- |
| lorka-ai | company | 1 | 3 |

25 other members posted 25 posts between them; they are under 10,000 followers or their follower count was not read, so they are not named here. data/posts.csv lists each post.

## What the comments ask

SocialCrawl reads no labels on LinkedIn comments, so a question here is a comment phrased as one.

> So why even need the subscription when you could build models with recursive memory? (a comment on a member's post)

> Where do your developers live? (a comment on a member's post)

> Also there's other economics of the build vs buy that go beyond the sticker monthly price, like do you actually have the ability to operate your company if your vendor isn't able to deliver? (a comment on a member's post)

> Hammering a nail is much easier than vibe coding properly, so why don’t companies build their own desks instead of buying them? (a comment on a member's post)

> But what's the math for a human's domain growth? (a comment on a member's post)

## What won't copy

A multiple compares a post with its author's own usual likes. A member with a small following can break out with fewer likes than a large account's ordinary post, so copy the format and the opening line, then judge the result against your own earlier posts.

Company pages are counted here but not measured; their reach depends on followers and paid promotion the search does not show.

## Next

Read the same keyword across every platform:

```bash
socialcrawl social-viral "AI coding tools"
```

Read the month and more members' earlier posts:

```bash
socialcrawl linkedin-marketing "AI coding tools" --deep
```

## How this was read

- search:linkedin, linkedin/search/posts: read 30 rows on 3 pages, kept 26, back to 21/11/2026 (stopped: max pages); dropped 4 off topic (18 credits)
- comments:linkedin, linkedin/post/comments: read 50 rows on 1 page, back to 25/11/2026 (stopped: max pages) (5 credits)
- comments:linkedin, linkedin/post/comments: read 1 rows on 1 page, back to 24/11/2026 (stopped: max pages) (5 credits)

## What we could not verify

- 2 member posts with no multiple: not measured: their authors had fewer than 8 earlier posts to compare with

## Method notes

- Searched LinkedIn posts for "AI coding tools" in the past week, 3 pages, kept when judged on topic.
- A break-out is a member's post at 3x or more the median likes of their earlier posts, over at least 8 of them, read only for posts with 20 likes or more. Earlier posts cost 5 credits a member, up to 25 credits a run.
- LinkedIn gives no view counts and no labels on comments, and a company's own posts need a numeric id the search does not give.
- LinkedIn's post search gives no follower counts, so a member is described, not named, unless a count of 10,000 or more was read; companies are named.
- Findings are labelled seen, seen, but self-reported, inferred, unknown; a count that could not be read is shown as unknown (unknown, not zero).

---

Read with SocialCrawl /linkedin-marketing · 48 credits · 7 calls · 36.4 s · 27/11/2026 · v0.1.0
