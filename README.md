# AM Salt

Morning electrolyte packet, positioned around the "before coffee" first hour and the day it sets up. Next.js (App Router) implementation of the Claude Design mockup, plus a working preorder capture flow to gauge demand.

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

- `app/page.tsx` — assembles the homepage from `components/`
- `app/actions.ts` — the `preorderAction` Server Action (validates email, rate-limits, writes to the store)
- `app/not-found.tsx`, `app/error.tsx` — branded 404 and error boundary
- `app/journal/page.tsx`, `app/journal/[slug]/page.tsx` — the research blog: an index and per-post pages, rendered from `lib/journal.ts` via `components/journal/`
- `app/benefits/page.tsx` — cited, mechanism-by-mechanism benefits page, rendered from `lib/benefits.ts` via `components/benefits/`
- `app/about/page.tsx`, `app/contact/page.tsx` — brand story and support contact
- `app/{shipping-returns,privacy,terms}/page.tsx` — policy pages, rendered from `lib/policies.ts` via `components/policy/PolicyLayout`
- `app/{icon,apple-icon,opengraph-image}.tsx` — generated brand assets, no static image files to keep in sync
- `app/{robots,sitemap}.ts` — SEO file conventions
- `components/TrustBar.tsx` — the shipping/refund/label trust signals shown above the preorder form
- `components/seo/{OrganizationSchema,ProductSchema}.tsx` — JSON-LD structured data (site-wide and homepage)
- `lib/content.ts` — copy for steps/panel/flavors/science-stats/FAQ, plus the citation list
- `lib/journal.ts` — journal post content and citations, consumed by `app/journal/`
- `lib/benefits.ts` — benefits copy and citations, consumed by `app/benefits/`
- `lib/policies.ts` — shipping/privacy/terms copy, consumed by the policy pages
- `lib/pricing.ts` — price math
- `lib/preorders.ts` — file-based preorder store (`data/preorders.json`, gitignored)
- `lib/rate-limit.ts` — in-memory per-IP rate limiter for the preorder action
- `lib/site.ts` — the site's canonical URL and support inbox, used for metadata/robots/sitemap/contact

## Design conventions

- **No numbered sections.** Don't label steps, stats or cards with counters
  (`01`, `02 / 06`, "Reading 01 / 03"). Where a marker is needed, use the
  orange dot the Process steps and Benefits cards share, or a descriptive
  label — the science stats read "The threshold / The gap / The fix".
- **Light only.** There is no dark theme and none is planned. `globals.css`
  sets `color-scheme: only light` so browser form controls stay light too.
  State colours outright rather than making them theme-reactive.
- **Orange is for buying.** `--energy` is reserved for primary CTAs (and
  the dot markers above). Blue carries links, eyebrows and structure.
- **Contrast is checked, not eyeballed.** Every text pairing clears WCAG AA.
  White on orange can't — that's why CTAs carry dark ink (`--on-energy`).

## Before this goes fully live

Everything below is a real gap, not hypothetical — read this before pointing real traffic at it.

1. **Set the real domain and support inbox.** `lib/site.ts` still has a placeholder URL and a placeholder `support@amsalt.example.com` address. Update both before deploying — the URL feeds `metadataBase` (so OG/Twitter image URLs resolve correctly when shared), `robots.txt`, `sitemap.xml`, and the JSON-LD in `components/seo/`; the email is shown directly on `/contact` and in the footer.
2. **Swap the preorder store if deploying serverless/multi-instance.** `lib/preorders.ts` writes to a JSON file on disk, and `lib/rate-limit.ts` keeps its counters in memory. Both work fine on a single traditional server (a VM, Railway, Render, `npm start` on your own box) but **silently stop working correctly on Vercel or any serverless/multi-instance host** — each request can hit a different instance with no shared state, so preorders can be lost and rate limiting becomes meaningless. Swap both for something shared (Postgres/Supabase/Redis) before deploying anywhere serverless.
3. **You have no way to see who preordered yet.** Submissions land in `data/preorders.json` on the server's disk. There's no export, no admin view, no email notification when someone signs up. At minimum, wire up an email (Resend/Postmark) or Slack webhook in `preorderAction` so preorders don't just sit silently on a server you have to SSH into.
4. **The FDA disclaimer and sodium guidance in the FAQ are a starting point, not a legal review.** This makes a real health-adjacent claim (850mg sodium, positioned as a daily habit). Before real launch, have an actual lawyer or regulatory consultant look at the supplement-marketing claims — this codebase handles the responsible-disclosure *content*, not the legal sign-off.
5. **No analytics.** There's no way to know how many people see the page vs. reserve a box. Add whatever you're comfortable with (Vercel Analytics, Plausible, PostHog) before spending money driving traffic here.
6. **No automated tests.** Verification so far has been manual (build/lint/screenshot/functional pass each session). Fine for a preorder page at this stage; worth adding at least a smoke test on the preorder flow before this carries real transactions.

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) (zero config needed) or any other Next.js host. **Read item 2 above first** if considering Vercel — the preorder store needs to move off the local filesystem before that's safe.
