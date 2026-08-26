# AM Salt

Morning electrolyte packet, positioned around the "before coffee" first hour. Next.js (App Router) implementation of the Claude Design mockup, plus a working preorder capture flow to gauge demand.

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- CSS Modules — no UI framework, matches the design's exact tokens
- A React Server Action + file-based store for preorder emails (`lib/preorders.ts`, `app/actions.ts`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — assembles the page from `components/`
- `app/actions.ts` — the `preorderAction` Server Action (validates email, writes to the store)
- `lib/content.ts` — copy for the steps/panel/flavors/science-stat sections, plus the citation list
- `lib/pricing.ts` — price math
- `lib/preorders.ts` — file-based preorder store (`data/preorders.json`, gitignored)

## Known limitation

Preorders are stored in a JSON file on disk. That's fine for validating demand on a single running instance, but it isn't safe across multiple server instances or serverless deployments — swap `lib/preorders.ts` for a real database (Postgres, Supabase, etc.) before this needs to scale.

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) (zero config needed) or any other Next.js host. Note the limitation above if deploying to a serverless/multi-instance platform.
