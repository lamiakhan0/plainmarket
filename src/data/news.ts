import type { NewsItem } from "@/types";

/**
 * Mock recent-news items, tagged by company symbol.
 *
 * Headlines and summaries are ILLUSTRATIVE, not real reporting. Each `summary`
 * explains in plain English why the item matters to the company. `url` is a
 * placeholder until PlainMarket connects to a real news source.
 *
 * Coverage so far: the six companies linked from the landing page. Read this
 * only through `src/lib/data-provider.ts`.
 */
export const news: NewsItem[] = [
  // --- RELIANCE ---
  {
    symbol: "RELIANCE",
    headline: "Reliance adds 12 million Jio subscribers in the June quarter",
    summary:
      "More Jio users means more monthly subscription revenue, which is Reliance's steadiest source of profit.",
    source: "Company filing",
    publishedAt: "2026-08-21",
    url: "#",
  },
  {
    symbol: "RELIANCE",
    headline: "Retail arm opens its 20,000th store",
    summary:
      "A bigger store network gives Reliance Retail more places to sell, though each new store also adds running costs.",
    source: "Business Standard",
    publishedAt: "2026-08-14",
    url: "#",
  },
  {
    symbol: "RELIANCE",
    headline: "New petrochemicals unit at Jamnagar starts production",
    summary:
      "The plant expands Reliance's capacity to turn crude oil into higher-value chemicals, a business with better margins than fuel.",
    source: "Mint",
    publishedAt: "2026-08-05",
    url: "#",
  },
  {
    symbol: "RELIANCE",
    headline:
      "Board approves ₹75,000 crore clean-energy investment over three years",
    summary:
      "The spending targets solar panels, batteries and hydrogen. It is large, and returns from these new areas are still unproven.",
    source: "Reuters",
    publishedAt: "2026-07-29",
    url: "#",
  },

  // --- TCS ---
  {
    symbol: "TCS",
    headline: "TCS signs $1 billion deal with a European bank",
    summary:
      "A large multi-year contract adds predictable revenue, but the work is spread over several years so the boost each quarter is modest.",
    source: "Company filing",
    publishedAt: "2026-08-19",
    url: "#",
  },
  {
    symbol: "TCS",
    headline: "June-quarter revenue grows 4% as Western clients stay cautious",
    summary:
      "Growth stays in low single digits because banks and retailers in the US and UK are still slow to start new technology projects.",
    source: "Economic Times",
    publishedAt: "2026-08-11",
    url: "#",
  },
  {
    symbol: "TCS",
    headline: "TCS announces ₹18,000 crore share buyback",
    summary:
      "The company is returning surplus cash to shareholders by buying back stock, which it does when it holds more cash than new investment needs.",
    source: "Mint",
    publishedAt: "2026-08-02",
    url: "#",
  },
  {
    symbol: "TCS",
    headline: "Headcount falls by 2,000 as staff turnover stays low",
    summary:
      "Fewer new hires and low turnover can protect margins in the short term, but may signal soft demand for new projects.",
    source: "Business Standard",
    publishedAt: "2026-07-24",
    url: "#",
  },

  // --- HDFCBANK ---
  {
    symbol: "HDFCBANK",
    headline: "HDFC Bank deposits grow 16% year on year",
    summary:
      "Faster deposit growth matters because deposits fund the bank's lending; this has been its main challenge since the 2023 merger.",
    source: "Company filing",
    publishedAt: "2026-08-20",
    url: "#",
  },
  {
    symbol: "HDFCBANK",
    headline: "Bad-loan ratio holds steady at 1.3%",
    summary:
      "A low and stable share of loans going unpaid suggests the bank's borrowers are still managing their repayments well.",
    source: "Economic Times",
    publishedAt: "2026-08-12",
    url: "#",
  },
  {
    symbol: "HDFCBANK",
    headline: "Bank cuts home-loan rates by 0.15 percentage points",
    summary:
      "Lower rates can attract more borrowers but also slightly narrow the gap between what the bank earns and what it pays out.",
    source: "Mint",
    publishedAt: "2026-08-04",
    url: "#",
  },
  {
    symbol: "HDFCBANK",
    headline: "RBI approves appointment of a new deputy managing director",
    summary:
      "Leadership changes at a large bank are watched closely because they can shape strategy and how much risk the bank takes.",
    source: "Reuters",
    publishedAt: "2026-07-28",
    url: "#",
  },

  // --- INFY ---
  {
    symbol: "INFY",
    headline: "Infosys raises the lower end of its full-year revenue forecast",
    summary:
      "Nudging up guidance signals that management is a little more confident about demand for the rest of the year.",
    source: "Company filing",
    publishedAt: "2026-08-18",
    url: "#",
  },
  {
    symbol: "INFY",
    headline: "Company wins large cloud contract with a US healthcare firm",
    summary:
      "Cloud migration work is a growing part of Infosys's revenue and often leads to further projects with the same client.",
    source: "Economic Times",
    publishedAt: "2026-08-09",
    url: "#",
  },
  {
    symbol: "INFY",
    headline: "Infosys declares interim dividend of ₹21 per share",
    summary:
      "The payout reflects the company's policy of returning most of its spare cash to shareholders.",
    source: "Mint",
    publishedAt: "2026-08-01",
    url: "#",
  },
  {
    symbol: "INFY",
    headline: "Staff turnover drops to 12%, a multi-year low",
    summary:
      "Lower turnover reduces hiring and training costs, which supports profit margins.",
    source: "Business Standard",
    publishedAt: "2026-07-22",
    url: "#",
  },

  // --- ITC ---
  {
    symbol: "ITC",
    headline: "GST Council leaves cigarette taxes unchanged for the year",
    summary:
      "No tax increase removes a major uncertainty for ITC's most profitable business and lets it hold prices steady.",
    source: "Economic Times",
    publishedAt: "2026-08-17",
    url: "#",
  },
  {
    symbol: "ITC",
    headline: "Packaged-foods revenue crosses ₹22,000 crore for the year",
    summary:
      "The foods business is now a meaningful second pillar, though its margins are much thinner than cigarettes.",
    source: "Company filing",
    publishedAt: "2026-08-08",
    url: "#",
  },
  {
    symbol: "ITC",
    headline: "ITC completes the demerger of its hotels business",
    summary:
      "Shareholders now hold the hotels company separately; ITC keeps a minority stake and can focus on its core businesses.",
    source: "Mint",
    publishedAt: "2026-07-30",
    url: "#",
  },
  {
    symbol: "ITC",
    headline: "Board declares final dividend of ₹7.85 per share",
    summary:
      "ITC pays out most of its profit, which is why its dividend yield is among the highest in the index.",
    source: "Reuters",
    publishedAt: "2026-07-21",
    url: "#",
  },

  // --- MARUTI ---
  {
    symbol: "MARUTI",
    headline: "Maruti's SUV sales overtake small cars for the first time",
    summary:
      "SUVs earn higher margins than hatchbacks, so a shift in the sales mix can lift overall profitability.",
    source: "Company filing",
    publishedAt: "2026-08-16",
    url: "#",
  },
  {
    symbol: "MARUTI",
    headline: "Company recalls 40,000 vehicles to fix a fuel-pump fault",
    summary:
      "Recalls carry repair costs and can dent buyer confidence, though they are common across the industry.",
    source: "Economic Times",
    publishedAt: "2026-08-07",
    url: "#",
  },
  {
    symbol: "MARUTI",
    headline: "New electric SUV set to launch in the festive season",
    summary:
      "This is Maruti's first serious electric model, an area where several rivals moved earlier.",
    source: "Mint",
    publishedAt: "2026-07-27",
    url: "#",
  },
  {
    symbol: "MARUTI",
    headline:
      "Exports rise 9% as Maruti ships more cars to Africa and Latin America",
    summary:
      "Overseas sales give Maruti a second source of demand when the Indian market slows.",
    source: "Business Standard",
    publishedAt: "2026-07-19",
    url: "#",
  },
];
