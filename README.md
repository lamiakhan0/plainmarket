# PlainMarket

A beginner-friendly web app that explains the Indian stock market in plain
English. It translates public financial data into clear insights. It does **not**
give investment recommendations or facilitate trading. See [DISCLAIMER.md](./DISCLAIMER.md).

## Status

MVP built and working, on mock data. Implemented:

- Landing page with stock search
- Search + autocomplete for Nifty 50 companies
- `/companies` browse page, grouped by sector
- Individual stock profile pages for all 50 companies
- A "30-second breakdown" in plain language
- Financial metrics with beginner-friendly explanations
- Recent company news

6 companies have hand-written ("curated") analysis; the other 44 use a
deterministic generated fallback, clearly labelled as such (see below).

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — theme tokens defined in `src/app/globals.css` via `@theme`
- **PostgreSQL / Supabase** — planned, not yet integrated
- Mock data only for now (`src/data/`)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Requires Node 24 (see `.nvmrc`).

## Scripts

| Script                 | Does                       |
| ---------------------- | -------------------------- |
| `npm run dev`          | Start the dev server       |
| `npm run build`        | Production build           |
| `npm run start`        | Serve the production build |
| `npm run lint`         | ESLint                     |
| `npm run typecheck`    | `tsc --noEmit`             |
| `npm run format`       | Prettier write             |
| `npm run format:check` | Prettier check (CI)        |

## Project structure

```
src/
  app/            Routes (App Router). layout.tsx, page.tsx, globals.css
  components/
    ui/           Presentational primitives (Button, Card, Badge, …)
    layout/       Header, Footer, DisclaimerBanner, Container
    search/       SearchBar, Autocomplete (client components)
    stock/        ThirtySecondBreakdown, MetricCard, NewsList
  data/           Mock fixtures — the current source of truth
  lib/
    data-provider.ts        The ONLY module components use to read data
    generate-fundamentals.ts Deterministic fallback analysis (see below)
    search.ts               rankCompanies() relevance ranking
    format.ts               Currency (₹, lakh/crore), %, dates
    utils.ts                cn() classname helper
  types/          Shared domain types
  config/         site.ts — name, nav, disclaimer copy
```

### The data seam

Components and pages never import from `src/data/` directly. They call functions
in `src/lib/data-provider.ts`. Today those return mock fixtures; swapping in
Supabase or a market API later is a change confined to that one file.

### Curated vs generated analysis

`getFundamentals(symbol)` returns:

- the **curated** record from `src/data/fundamentals.ts` if one exists
  (currently 6 companies: RELIANCE, TCS, HDFCBANK, INFY, ITC, MARUTI), or
- a **generated** fallback from `src/lib/generate-fundamentals.ts` — a pure,
  dependency-free function that derives plausible metrics and a templated
  breakdown from the ticker (string hash → mulberry32) and a per-sector range
  table. Same input always produces the same output.

Generated snapshots carry `generated: true`. The stock page shows an
"Auto-generated overview" callout for them and `/companies` marks each company
"In-depth analysis" or "Auto-generated". `listCuratedSymbols()` returns the
curated set. To promote a company, add a record to `src/data/fundamentals.ts` —
no other change needed.
