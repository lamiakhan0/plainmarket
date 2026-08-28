/**
 * Shared domain types for PlainMarket.
 *
 * These describe the *shape* of the data the app renders. During the MVP they
 * are backed by mock fixtures in `src/data/`; later they'll be backed by a
 * database / market API. Components should import types from here, and data
 * from `src/lib/data-provider.ts` — never from `src/data/` directly.
 */

/** A Nifty 50 company. */
export interface Company {
  /** NSE ticker symbol, e.g. "RELIANCE". Used in URLs. */
  symbol: string;
  /** Common name, e.g. "Reliance Industries Ltd." */
  name: string;
  /** Broad sector, e.g. "Energy", "IT Services". */
  sector: string;
  /** One line, plain English: what the company actually does. */
  description: string;
}

/** The plain-English summary shown at the top of a stock profile. */
export interface ThirtySecondBreakdown {
  /** 2–3 sentences: what the company does, no jargon. */
  whatItDoes: string;
  /** 2–3 sentences: how financially healthy it looks, no jargon. */
  financialHealth: string;
  /** Optional caveats a beginner should keep in mind. */
  thingsToWatch?: string[];
}

/** Standing of a metric relative to the company's sector. */
export type MetricStanding = "low" | "typical" | "high";

/** A single financial metric with a beginner-friendly framing. */
export interface Metric {
  /** Stable key, e.g. "peRatio". Matches a GlossaryEntry id. */
  id: string;
  /** Display label, e.g. "P/E Ratio". */
  label: string;
  /** Value as a display-ready string, e.g. "24.3" or "₹1,240 Cr". */
  value: string;
  /** How this compares within the company's sector, if known. */
  standing?: MetricStanding;
}

/** A full financial snapshot for one company. */
export interface Fundamentals {
  symbol: string;
  breakdown: ThirtySecondBreakdown;
  metrics: Metric[];
  /** ISO date (YYYY-MM-DD) the snapshot represents. */
  asOf: string;
  /**
   * True when this snapshot is deterministically generated from sector
   * patterns rather than written by the team. Absent/false means curated.
   */
  generated?: boolean;
}

/** A recent news item about a company. */
export interface NewsItem {
  symbol: string;
  headline: string;
  /** Plain-English note on why it matters to a beginner. */
  summary: string;
  source: string;
  /** ISO 8601 date string. */
  publishedAt: string;
  url: string;
}

/** A plain-English definition of a financial term. */
export interface GlossaryEntry {
  /** Stable key, referenced by Metric.id. */
  id: string;
  term: string;
  /** One or two jargon-free sentences. */
  plainEnglish: string;
  /** Optional concrete analogy. */
  analogy?: string;
}
