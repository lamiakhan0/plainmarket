/**
 * The single data-access layer for PlainMarket.
 *
 * Every page and component reads market data through these functions. They do
 * NOT import `src/data/*` directly. Today these return mock fixtures; when we
 * move to Postgres / Supabase / a market API, only this file changes.
 *
 * All functions are async on purpose — so swapping mock reads for real I/O
 * later is invisible to callers.
 */

import type { Company, Fundamentals, GlossaryEntry, NewsItem } from "@/types";
import { companies } from "@/data/companies";
import { fundamentals } from "@/data/fundamentals";
import { news } from "@/data/news";
import { glossary } from "@/data/glossary";
import { rankCompanies } from "@/lib/search";
import { generateFundamentals } from "@/lib/generate-fundamentals";

/** All tracked companies (Nifty 50 for the MVP). */
export async function listCompanies(): Promise<Company[]> {
  return companies;
}

/** Companies matching a query, best match first. Empty query returns nothing. */
export async function searchCompanies(query: string): Promise<Company[]> {
  return rankCompanies(companies, query, companies.length);
}

/** A single company by ticker symbol, or null if not tracked. */
export async function getCompany(symbol: string): Promise<Company | null> {
  const s = symbol.toUpperCase();
  return companies.find((c) => c.symbol.toUpperCase() === s) ?? null;
}

/**
 * The financial snapshot for a company. Returns the curated record when one
 * exists, otherwise a deterministic generated fallback (flagged
 * `generated: true`). Null only when the symbol isn't a tracked company.
 */
export async function getFundamentals(
  symbol: string,
): Promise<Fundamentals | null> {
  const s = symbol.toUpperCase();
  const curated = fundamentals.find((f) => f.symbol.toUpperCase() === s);
  if (curated) return curated;
  const company = companies.find((c) => c.symbol.toUpperCase() === s);
  return company ? generateFundamentals(company) : null;
}

/** Symbols that have a hand-written (curated) fundamentals snapshot. */
export async function listCuratedSymbols(): Promise<string[]> {
  return fundamentals.map((f) => f.symbol);
}

/** Metrics for which a sector average is meaningful (ratios and rates only). */
const COMPARABLE_METRICS = new Set([
  "peRatio",
  "pbRatio",
  "roe",
  "debtToEquity",
  "dividendYield",
  "revenueGrowth",
  "profitMargin",
]);

function parseMetricNumber(value: string): number | null {
  const n = parseFloat(value.replace(/[^0-9.-]/g, ""));
  return Number.isFinite(n) ? n : null;
}

function formatMetricAverage(id: string, n: number): string {
  if (id === "debtToEquity") return n.toFixed(2);
  if (id === "peRatio" || id === "pbRatio") return n.toFixed(1);
  return `${n.toFixed(1)}%`;
}

/**
 * Average of each comparable metric across every company in a sector,
 * keyed by metric id. Metrics with fewer than two data points are omitted.
 */
export async function getSectorAverages(
  sector: string,
): Promise<Record<string, string>> {
  const symbols = new Set(
    companies.filter((c) => c.sector === sector).map((c) => c.symbol),
  );
  const totals = new Map<string, { sum: number; count: number }>();

  for (const snapshot of fundamentals) {
    if (!symbols.has(snapshot.symbol)) continue;
    for (const metric of snapshot.metrics) {
      if (!COMPARABLE_METRICS.has(metric.id)) continue;
      const n = parseMetricNumber(metric.value);
      if (n === null) continue;
      const agg = totals.get(metric.id) ?? { sum: 0, count: 0 };
      agg.sum += n;
      agg.count += 1;
      totals.set(metric.id, agg);
    }
  }

  const averages: Record<string, string> = {};
  for (const [id, { sum, count }] of totals) {
    if (count < 2) continue;
    averages[id] = formatMetricAverage(id, sum / count);
  }
  return averages;
}

/** Recent news for a company, newest first. */
export async function getCompanyNews(symbol: string): Promise<NewsItem[]> {
  const s = symbol.toUpperCase();
  return news
    .filter((n) => n.symbol.toUpperCase() === s)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** A glossary definition by id, or null. */
export async function getGlossaryEntry(
  id: string,
): Promise<GlossaryEntry | null> {
  return glossary.find((g) => g.id === id) ?? null;
}

/** The full glossary. */
export async function listGlossary(): Promise<GlossaryEntry[]> {
  return glossary;
}
