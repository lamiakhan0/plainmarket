import type { GlossaryEntry } from "@/types";

/**
 * Plain-English definitions of the financial terms shown on stock pages.
 * Each entry's `id` is referenced by a `Metric.id` in `src/data/fundamentals.ts`.
 *
 * House style: explain what the number *means*, never what to *do* about it.
 * No jargon without unpacking it. Every entry gets a concrete rupee analogy.
 * Read this only through `src/lib/data-provider.ts`.
 */
export const glossary: GlossaryEntry[] = [
  {
    id: "marketCap",
    term: "Market capitalisation",
    plainEnglish:
      "The total value of all a company's shares added together. It's a quick way to gauge how big the company is.",
    analogy:
      "If a company had 100 shares worth ₹50 each, its market cap would be ₹5,000.",
  },
  {
    id: "peRatio",
    term: "Price-to-earnings (P/E) ratio",
    plainEnglish:
      "How much you pay for each ₹1 of the company's yearly profit. A higher number means the share price is high compared with current profits, often because investors expect profits to grow.",
    analogy:
      "A P/E of 25 means you pay ₹25 for every ₹1 the company earns in a year.",
  },
  {
    id: "pbRatio",
    term: "Price-to-book (P/B) ratio",
    plainEnglish:
      "The share price compared with the company's net worth on paper (what it owns minus what it owes). It hints at how much extra investors are paying above the accounting value.",
    analogy:
      "A P/B of 3 means the market values the company at three times what its books say it is worth.",
  },
  {
    id: "dividendYield",
    term: "Dividend yield",
    plainEnglish:
      "The yearly dividend a company pays out, shown as a percentage of its share price. It shows how much cash income the shares currently return.",
    analogy:
      "A 2% yield means ₹2 paid out per year for every ₹100 of share price.",
  },
  {
    id: "roe",
    term: "Return on equity (ROE)",
    plainEnglish:
      "How much profit the company makes for every ₹1 that shareholders have put in or left in the business. Higher usually means the company uses its money efficiently.",
    analogy:
      "An ROE of 18% means the company turned ₹100 of shareholder money into ₹18 of profit in a year.",
  },
  {
    id: "debtToEquity",
    term: "Debt-to-equity ratio",
    plainEnglish:
      "How much the company has borrowed compared with the money shareholders have in it. Higher means more reliance on loans, which adds risk if business slows.",
    analogy:
      "A ratio of 0.5 means ₹0.50 of debt for every ₹1 of shareholder money.",
  },
  {
    id: "revenueGrowth",
    term: "Revenue growth (year on year)",
    plainEnglish:
      "How much the company's total sales changed compared with the same period a year earlier, as a percentage.",
    analogy:
      "If sales went from ₹100 crore to ₹112 crore, revenue growth is 12%.",
  },
  {
    id: "profitMargin",
    term: "Net profit margin",
    plainEnglish:
      "The share of each ₹100 of sales that the company keeps as profit after all costs and taxes.",
    analogy: "A 15% margin means ₹15 of profit for every ₹100 of sales.",
  },
  {
    id: "eps",
    term: "Earnings per share (EPS)",
    plainEnglish:
      "The company's yearly profit divided by the number of shares. It shows the profit that belongs to one share.",
    analogy:
      "₹500 crore of profit spread across 50 crore shares is an EPS of ₹10.",
  },
  {
    id: "week52Range",
    term: "52-week range",
    plainEnglish:
      "The lowest and highest price the share has traded at over the past year. It gives a sense of how much the price moves.",
    analogy:
      "A range of ₹800–₹1,200 means the share has swung between those two prices in the last year.",
  },
];
