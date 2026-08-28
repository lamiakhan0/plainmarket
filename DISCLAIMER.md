# Disclaimer & scope

PlainMarket is an **educational** product. This document records what the product
does and does not do, so that scope stays clear as features are added.

## What PlainMarket is

- A tool that explains publicly available financial data about Indian companies
  in plain English.
- Aimed at beginners who want to understand what the numbers mean.

## What PlainMarket is not

- **Not investment advice.** Nothing in the app is a recommendation to buy, sell,
  or hold any security.
- **Not a broker or trading platform.** The app does not place, route, or
  facilitate trades.
- **Not a registered investment adviser.** PlainMarket is not registered with
  SEBI or any regulator in an advisory capacity.
- **Not a source of live market data during the MVP.** All figures shown in the
  MVP are illustrative mock data.

## Product rules

1. Every page that shows financial figures must also surface the short disclaimer
   (`siteConfig.disclaimerShort`).
2. Copy must avoid directive language ("buy", "you should", "a good stock").
   Prefer descriptive, explanatory framing.
3. Metric explanations describe what a number means, not what to do about it.
4. When real data is introduced, label the "as of" date and the source on every
   figure.
5. Generated (non-curated) analysis must always be labelled as automatically
   generated and not researched, wherever it appears. It must never be presented
   with the same weight as curated analysis.

The canonical user-facing text lives in `src/config/site.ts`.
