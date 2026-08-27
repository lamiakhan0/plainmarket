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

/** The financial snapshot for a company, or null if not available. */
export async function getFundamentals(
  symbol: string,
): Promise<Fundamentals | null> {
  const s = symbol.toUpperCase();
  return fundamentals.find((f) => f.symbol.toUpperCase() === s) ?? null;
}

/** Symbols that currently have a full fundamentals snapshot. */
export async function listFundamentalsSymbols(): Promise<string[]> {
  return fundamentals.map((f) => f.symbol);
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
