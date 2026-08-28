import type { Company, Fundamentals, Metric, MetricStanding } from "@/types";

/**
 * Deterministic fallback analysis for companies without a curated snapshot.
 *
 * Everything here is derived from the ticker symbol and the company's sector,
 * so a given company always produces the same output. It is a rough,
 * illustrative picture — NOT researched, and not the company's real reported
 * numbers. Curated records in `src/data/fundamentals.ts` always take priority
 * (see `getFundamentals` in the data provider).
 *
 * Pure and dependency-free.
 */

type Range = [min: number, max: number];

interface SectorProfile {
  mcap: Range; // ₹ crore
  pe: Range;
  pb: Range;
  roe: Range; // %
  de: Range | null; // debt-to-equity; null where not meaningful (banks, insurers)
  div: Range; // %
  rev: Range; // % YoY
  margin: Range; // %
  watch: string;
}

const DEFAULT_PROFILE: SectorProfile = {
  mcap: [40_000, 300_000],
  pe: [15, 30],
  pb: [2, 5],
  roe: [10, 18],
  de: [0.1, 0.6],
  div: [0.5, 1.8],
  rev: [5, 12],
  margin: [8, 16],
  watch:
    "Results depend on demand in the company's main markets and on its input costs.",
};

const SECTOR_PROFILE: Record<string, SectorProfile> = {
  Automobiles: {
    mcap: [40_000, 400_000],
    pe: [18, 32],
    pb: [2, 6],
    roe: [12, 22],
    de: [0, 0.4],
    div: [0.6, 1.8],
    rev: [5, 14],
    margin: [6, 12],
    watch:
      "Vehicle demand moves with interest rates, fuel prices, and the strength of the wider economy.",
  },
  Banking: {
    mcap: [50_000, 1_400_000],
    pe: [10, 20],
    pb: [1.2, 3.2],
    roe: [12, 18],
    de: null,
    div: [0.5, 1.6],
    rev: [8, 16],
    margin: [18, 28],
    watch:
      "Bank profits depend on loan growth, deposit costs, and how many borrowers fall behind on repayments.",
  },
  "Cement & Construction": {
    mcap: [40_000, 400_000],
    pe: [18, 35],
    pb: [2, 5],
    roe: [8, 16],
    de: [0.1, 0.7],
    div: [0.4, 1.5],
    rev: [4, 12],
    margin: [8, 16],
    watch:
      "Cement demand tracks construction and infrastructure spending, and energy costs feed straight into production costs.",
  },
  "Construction & Engineering": {
    mcap: [40_000, 400_000],
    pe: [15, 30],
    pb: [2, 5],
    roe: [10, 18],
    de: [0.2, 1.0],
    div: [0.6, 1.8],
    rev: [6, 15],
    margin: [5, 11],
    watch:
      "Order inflows, how fast projects are executed, and payment delays from government clients can swing results.",
  },
  "Consumer Goods": {
    mcap: [40_000, 400_000],
    pe: [30, 70],
    pb: [5, 15],
    roe: [18, 35],
    de: [0, 0.3],
    div: [0.7, 2.0],
    rev: [5, 14],
    margin: [10, 20],
    watch:
      "Sales depend on consumer spending and raw-material prices; premium products carry higher margins.",
  },
  Diversified: {
    mcap: [40_000, 500_000],
    pe: [15, 40],
    pb: [2, 8],
    roe: [8, 20],
    de: [0.2, 1.2],
    div: [0.4, 1.6],
    rev: [4, 14],
    margin: [6, 16],
    watch:
      "Results combine several different businesses, so one weak segment can offset a strong one.",
  },
  Energy: {
    mcap: [50_000, 2_000_000],
    pe: [8, 20],
    pb: [1, 3],
    roe: [8, 18],
    de: [0.2, 0.8],
    div: [0.5, 4.0],
    rev: [3, 12],
    margin: [5, 12],
    watch:
      "Profits move with global crude oil and fuel prices, which the company does not control.",
  },
  FMCG: {
    mcap: [40_000, 600_000],
    pe: [35, 65],
    pb: [6, 14],
    roe: [25, 45],
    de: [0, 0.2],
    div: [1.5, 3.5],
    rev: [4, 12],
    margin: [12, 24],
    watch:
      "Volume growth and input-cost inflation (palm oil, packaging, grain) are the main swing factors.",
  },
  "Financial Services": {
    mcap: [40_000, 500_000],
    pe: [12, 28],
    pb: [2, 6],
    roe: [12, 22],
    de: null,
    div: [0.3, 1.2],
    rev: [10, 20],
    margin: [15, 28],
    watch:
      "Lending growth, borrowing costs, and loan defaults drive earnings; tighter funding markets hurt fast.",
  },
  "Healthcare Services": {
    mcap: [40_000, 300_000],
    pe: [40, 80],
    pb: [6, 14],
    roe: [12, 22],
    de: [0.1, 0.6],
    div: [0.2, 0.9],
    rev: [8, 18],
    margin: [10, 18],
    watch:
      "Bed occupancy, average revenue per bed, and the pace of new hospital additions shape growth.",
  },
  "Information Technology": {
    mcap: [50_000, 1_500_000],
    pe: [18, 32],
    pb: [5, 14],
    roe: [22, 45],
    de: [0, 0.15],
    div: [1.8, 3.8],
    rev: [3, 12],
    margin: [15, 22],
    watch:
      "Demand depends on technology budgets at large Western firms; a stronger rupee reduces overseas earnings.",
  },
  Infrastructure: {
    mcap: [40_000, 400_000],
    pe: [18, 38],
    pb: [3, 7],
    roe: [12, 22],
    de: [0.4, 1.4],
    div: [0.3, 1.2],
    rev: [6, 16],
    margin: [12, 22],
    watch:
      "Cargo or traffic volumes track trade and the economy, and these businesses usually carry sizeable debt.",
  },
  Insurance: {
    mcap: [40_000, 300_000],
    pe: [15, 90],
    pb: [1.5, 9],
    roe: [10, 18],
    de: null,
    div: [0.2, 0.8],
    rev: [8, 18],
    margin: [3, 12],
    watch:
      "New premium growth, how many policies lapse, and investment returns on the float are the key drivers.",
  },
  "Metals & Mining": {
    mcap: [40_000, 300_000],
    pe: [7, 18],
    pb: [1, 3],
    roe: [8, 20],
    de: [0.2, 1.0],
    div: [1.5, 5.0],
    rev: [2, 12],
    margin: [8, 18],
    watch:
      "Earnings are highly cyclical and swing with global commodity prices and demand from China.",
  },
  Pharmaceuticals: {
    mcap: [40_000, 300_000],
    pe: [25, 45],
    pb: [3, 8],
    roe: [12, 24],
    de: [0, 0.3],
    div: [0.4, 1.4],
    rev: [6, 15],
    margin: [12, 22],
    watch:
      "US price competition, factory inspections by regulators, and the timing of new drug approvals matter most.",
  },
  "Power & Utilities": {
    mcap: [50_000, 500_000],
    pe: [10, 22],
    pb: [1.2, 3],
    roe: [10, 18],
    de: [0.5, 1.8],
    div: [1.5, 4.0],
    rev: [5, 14],
    margin: [10, 20],
    watch:
      "Regulated returns, fuel supply, and how much new generation or transmission capacity is added drive growth.",
  },
  Telecom: {
    mcap: [50_000, 900_000],
    pe: [20, 60],
    pb: [3, 9],
    roe: [4, 15],
    de: [0.8, 2.0],
    div: [0.2, 1.0],
    rev: [6, 16],
    margin: [8, 18],
    watch:
      "Average revenue per user, subscriber additions, and heavy spending on spectrum and network gear are key.",
  },
};

/** The date generated snapshots claim to represent (matches curated records). */
const GENERATED_AS_OF = "2026-06-30";

function hashSeed(str: string): number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng: () => number, [lo, hi]: Range): number {
  return lo + rng() * (hi - lo);
}

function standingFor(value: number, [lo, hi]: Range): MetricStanding {
  const third = (hi - lo) / 3;
  if (value <= lo + third) return "low";
  if (value >= hi - third) return "high";
  return "typical";
}

function formatCrore(cr: number): string {
  if (cr >= 100_000) return `₹${(cr / 100_000).toFixed(1)} lakh crore`;
  return `₹${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(cr)} crore`;
}

const PE_WORD: Record<MetricStanding, string> = {
  low: "low",
  typical: "around average",
  high: "high",
};

const DE_WORD: Record<MetricStanding, string> = {
  low: "low",
  typical: "moderate",
  high: "high",
};

function growthPhrase(rev: number): string {
  if (rev >= 12) return "growing strongly year on year";
  if (rev >= 4) return "growing modestly year on year";
  if (rev >= 0) return "broadly flat year on year";
  return "slightly below a year earlier";
}

/**
 * Deterministic fallback `Fundamentals` for a company. Same input → same output.
 * Always flagged `generated: true`.
 */
export function generateFundamentals(company: Company): Fundamentals {
  const rng = mulberry32(hashSeed(company.symbol));
  const profile = SECTOR_PROFILE[company.sector] ?? DEFAULT_PROFILE;

  const mcap = pick(rng, profile.mcap);
  const pe = pick(rng, profile.pe);
  const pb = pick(rng, profile.pb);
  const roe = pick(rng, profile.roe);
  const div = pick(rng, profile.div);
  const rev = pick(rng, profile.rev);
  const margin = pick(rng, profile.margin);
  const de = profile.de ? pick(rng, profile.de) : null;

  const metrics: Metric[] = [
    {
      id: "marketCap",
      label: "Market cap",
      value: formatCrore(mcap),
      standing: standingFor(mcap, profile.mcap),
    },
    {
      id: "peRatio",
      label: "P/E ratio",
      value: pe.toFixed(1),
      standing: standingFor(pe, profile.pe),
    },
    {
      id: "pbRatio",
      label: "P/B ratio",
      value: pb.toFixed(1),
      standing: standingFor(pb, profile.pb),
    },
    {
      id: "roe",
      label: "Return on equity",
      value: `${roe.toFixed(1)}%`,
      standing: standingFor(roe, profile.roe),
    },
    ...(de !== null && profile.de
      ? [
          {
            id: "debtToEquity",
            label: "Debt to equity",
            value: de.toFixed(2),
            standing: standingFor(de, profile.de),
          } satisfies Metric,
        ]
      : []),
    {
      id: "dividendYield",
      label: "Dividend yield",
      value: `${div.toFixed(1)}%`,
      standing: standingFor(div, profile.div),
    },
    {
      id: "revenueGrowth",
      label: "Revenue growth (YoY)",
      value: `${rev.toFixed(1)}%`,
      standing: standingFor(rev, profile.rev),
    },
    {
      id: "profitMargin",
      label: "Net profit margin",
      value: `${margin.toFixed(1)}%`,
      standing: standingFor(margin, profile.margin),
    },
  ];

  const shortName = company.name.replace(/ (Ltd\.?|Limited)$/, "");
  const peStanding = standingFor(pe, profile.pe);
  const deSentence =
    de !== null && profile.de
      ? `Debt looks ${DE_WORD[standingFor(de, profile.de)]}, with a debt-to-equity ratio around ${de.toFixed(2)}. `
      : "";

  return {
    symbol: company.symbol,
    asOf: GENERATED_AS_OF,
    generated: true,
    metrics,
    breakdown: {
      whatItDoes: `${company.description} ${shortName} is part of India's ${company.sector} sector and is one of the 50 companies in the Nifty 50 index.`,
      financialHealth: `This is an automatically generated estimate, not a researched view. On these figures ${shortName} trades at a P/E ratio of about ${pe.toFixed(1)} (${PE_WORD[peStanding]} for the ${company.sector} sector) and earns a return on equity near ${roe.toFixed(1)}%. ${deSentence}Revenue is estimated to be ${growthPhrase(rev)}, with roughly ${margin.toFixed(0)}% of sales kept as profit.`,
      thingsToWatch: [
        profile.watch,
        "These numbers are generated to give a rough picture. They are not the company's actual reported results and should be treated as illustrative only.",
      ],
    },
  };
}
