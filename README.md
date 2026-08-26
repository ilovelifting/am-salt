# AM Salt

Morning electrolyte packet, positioned around the "before coffee" first hour. Next.js (App Router) implementation of the Claude Design mockup, plus a working preorder capture flow to gauge demand.

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- CSS Modules — no UI framework, matches the design's exact tokens
- A React Server Action + file-based store for preorder emails (`lib/preorders.ts`, `app/actions.ts`)
- Dynamic favicon/OG image generation via `next/og` (`app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — assembles the page from `components/`
- `app/actions.ts` — the `preorderAction` Server Action (validates email, rate-limits, writes to the store)
- `app/not-found.tsx` — branded 404
- `app/journal/page.tsx`, `app/journal/[slug]/page.tsx` — the research blog: an index and per-post pages, rendered from `lib/journal.ts` via `components/journal/`
- `app/{icon,apple-icon,opengraph-image}.tsx` — generated brand assets, no static image files to keep in sync
- `app/{robots,sitemap}.ts` — SEO file conventions
- `lib/content.ts` — copy for steps/panel/flavors/science-stats/FAQ, plus the citation list
- `lib/journal.ts` — journal post content and citations, consumed by `app/journal/`
- `lib/pricing.ts` — price math
- `lib/preorders.ts` — file-based preorder store (`data/preorders.json`, gitignored)
- `lib/rate-limit.ts` — in-memory per-IP rate limiter for the preorder action
- `lib/site.ts` — the site's canonical URL, used for metadata/robots/sitemap

## Before this goes fully live

Everything below is a real gap, not hypothetical — read this before pointing real traffic at it.

1. **Set the real domain.** `lib/site.ts` still has a placeholder URL. Update it once you have the actual domain — it feeds `metadataBase` (so OG/Twitter image URLs resolve correctly when shared), `robots.txt`, and `sitemap.xml`.
2. **Swap the preorder store if deploying serverless/multi-instance.** `lib/preorders.ts` writes to a JSON file on disk, and `lib/rate-limit.ts` keeps its counters in memory. Both work fine on a single traditional server (a VM, Railway, Render, `npm start` on your own box) but **silently stop working correctly on Vercel or any serverless/multi-instance host** — each request can hit a different instance with no shared state, so preorders can be lost and rate limiting becomes meaningless. Swap both for something shared (Postgres/Supabase/Redis) before deploying anywhere serverless.
3. **You have no way to see who preordered yet.** Submissions land in `data/preorders.json` on the server's disk. There's no export, no admin view, no email notification when someone signs up. At minimum, wire up an email (Resend/Postmark) or Slack webhook in `preorderAction` so preorders don't just sit silently on a server you have to SSH into.
4. **The FDA disclaimer and sodium guidance in the FAQ are a starting point, not a legal review.** This makes a real health-adjacent claim (850mg sodium, positioned as a daily habit). Before real launch, have an actual lawyer or regulatory consultant look at the supplement-marketing claims — this codebase handles the responsible-disclosure *content*, not the legal sign-off.
5. **No analytics.** There's no way to know how many people see the page vs. reserve a box. Add whatever you're comfortable with (Vercel Analytics, Plausible, PostHog) before spending money driving traffic here.
6. **No automated tests.** Verification so far has been manual (build/lint/screenshot/functional pass each session). Fine for a preorder page at this stage; worth adding at least a smoke test on the preorder flow before this carries real transactions.

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) (zero config needed) or any other Next.js host. **Read item 2 above first** if considering Vercel — the preorder store needs to move off the local filesystem before that's safe.
