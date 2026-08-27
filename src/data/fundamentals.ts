import type { Fundamentals } from "@/types";

/**
 * Mock financial snapshots, one per company.
 *
 * All figures are ILLUSTRATIVE mock data — plausible for large-cap Indian
 * companies but not live or precise. `metric.id` matches a `GlossaryEntry`
 * in `src/data/glossary.ts`. `standing` is relative to the company's sector.
 * Breakdown text stays descriptive, never advisory.
 *
 * Coverage so far: the six companies linked from the landing page. The rest
 * are added in a later step. Read this only through `src/lib/data-provider.ts`.
 */
export const fundamentals: Fundamentals[] = [
  {
    symbol: "RELIANCE",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Reliance earns money from three main areas: refining crude oil into fuels and chemicals, the Jio telecom and broadband network, and Reliance Retail's chain of stores. The oil-to-chemicals business is the oldest; telecom and retail have grown fast over the last decade.",
      financialHealth:
        "Revenue is large and still growing at a high-single-digit pace. Profit margins are modest because refining is a low-margin business, and the company carries a fair amount of debt from building out Jio and retail. Cash from day-to-day operations comfortably covers its interest costs.",
      thingsToWatch: [
        "Refining profits move with global oil and fuel prices, which Reliance does not control.",
        "Debt is large in absolute terms, though it has come down from its peak.",
        "Future growth leans heavily on telecom price rises and retail store expansion.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹19.7 lakh crore",
        standing: "high",
      },
      { id: "peRatio", label: "P/E ratio", value: "24.8", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "2.1", standing: "typical" },
      { id: "roe", label: "Return on equity", value: "8.9%", standing: "low" },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.44",
        standing: "typical",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "0.4%",
        standing: "low",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "7.6%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "8.1%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "TCS",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "TCS is India's largest IT services company. It writes software, runs and maintains technology systems, and provides consulting for large companies around the world, especially banks, retailers and manufacturers. Most of its revenue comes from the US and Europe and is billed in foreign currencies.",
      financialHealth:
        "TCS is highly profitable, keeps very little debt, and turns most of its profit into cash. Growth has slowed to low single digits recently as client spending on new projects softened. It returns a large share of profit to shareholders through dividends and buybacks.",
      thingsToWatch: [
        "Revenue depends on technology budgets at Western banks and retailers, which shrink when their economies slow.",
        "A stronger rupee reduces the value of overseas earnings when converted back home.",
        "Growth has cooled from the double digits seen a few years ago.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹14.2 lakh crore",
        standing: "high",
      },
      { id: "peRatio", label: "P/E ratio", value: "26.1", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "12.4", standing: "high" },
      { id: "roe", label: "Return on equity", value: "47%", standing: "high" },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.09",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "3.1%",
        standing: "high",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "4.2%",
        standing: "low",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "19.4%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "HDFCBANK",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "HDFC Bank is India's largest private-sector bank. It takes deposits from savers and lends to individuals and businesses through home loans, car loans, credit cards and working-capital loans. It earns mainly from the gap between the interest it charges borrowers and the interest it pays depositors, plus fees.",
      financialHealth:
        "The bank is consistently profitable with a low share of bad loans. After merging with its parent housing-finance company in 2023, it has been working to grow deposits fast enough to fund its loan book. Return on equity is solid but has dipped slightly since the merger.",
      thingsToWatch: [
        "Loan growth now depends on how quickly the bank can attract new deposits.",
        "A weak economy can push up missed loan payments.",
        "The 2023 merger is still being absorbed, which affects profit margins.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹13.6 lakh crore",
        standing: "high",
      },
      { id: "peRatio", label: "P/E ratio", value: "18.9", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "2.7", standing: "typical" },
      {
        id: "roe",
        label: "Return on equity",
        value: "16.1%",
        standing: "typical",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "1.1%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Net interest income growth (YoY)",
        value: "9.4%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "24.8%",
        standing: "high",
      },
      {
        id: "eps",
        label: "Earnings per share",
        value: "₹88.3",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "INFY",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Infosys is a global IT services company and India's second-largest. It builds custom software, moves clients onto cloud systems, and runs their technology operations. As with its peers, most revenue comes from large companies in the US and Europe.",
      financialHealth:
        "Infosys is very profitable with almost no debt and strong cash generation. Growth has slowed recently but held up a little better than some rivals. It returns most of its surplus cash to shareholders through dividends and buybacks.",
      thingsToWatch: [
        "Demand is tied to technology budgets at Western firms.",
        "Wage rises and a stronger rupee can squeeze profit margins.",
        "Large contract wins can be lumpy from one quarter to the next.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹6.4 lakh crore",
        standing: "high",
      },
      { id: "peRatio", label: "P/E ratio", value: "24.0", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "7.9", standing: "high" },
      {
        id: "roe",
        label: "Return on equity",
        value: "31.8%",
        standing: "high",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.09",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "2.6%",
        standing: "high",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "6.1%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "17.2%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "ITC",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "ITC makes most of its profit from cigarettes, where it is the market leader in India. It has also built large packaged-foods brands such as Aashirvaad atta, Sunfeast biscuits and Bingo snacks, and it runs paperboard and agri-trading businesses.",
      financialHealth:
        "ITC is very profitable and almost debt-free, helped by the high margins on cigarettes. The foods business is growing but earns much thinner margins. The company pays out most of its profit as dividends, giving it one of the higher yields in the index.",
      thingsToWatch: [
        "Cigarette profits depend heavily on how much tax the government adds each year.",
        "The non-cigarette businesses earn far lower margins, so the overall profit mix shifts slowly.",
        "The hotels business was recently separated into its own listed company.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹5.6 lakh crore",
        standing: "high",
      },
      { id: "peRatio", label: "P/E ratio", value: "25.3", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "7.1", standing: "high" },
      {
        id: "roe",
        label: "Return on equity",
        value: "28.4%",
        standing: "high",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.00",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "3.4%",
        standing: "high",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "5.7%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "24.1%",
        standing: "high",
      },
    ],
  },
  {
    symbol: "MARUTI",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Maruti Suzuki is India's largest carmaker, selling roughly two in every five new passenger vehicles. Its range runs from small hatchbacks like the Swift and Alto to SUVs like the Brezza and Grand Vitara. It is majority-owned by Japan's Suzuki Motor Corporation.",
      financialHealth:
        "Maruti is profitable and carries virtually no debt, with a large pile of cash and investments. Margins improved as it sold more SUVs and as raw-material costs eased. Its main soft spot has been a smaller presence in electric vehicles than some rivals.",
      thingsToWatch: [
        "Sales are sensitive to interest rates and fuel prices, which affect what buyers can afford.",
        "The shift to electric cars is an area where Maruti started later than some competitors.",
        "Steel and aluminium prices feed directly into the cost of each car.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹3.9 lakh crore",
        standing: "high",
      },
      { id: "peRatio", label: "P/E ratio", value: "27.6", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "4.4", standing: "typical" },
      {
        id: "roe",
        label: "Return on equity",
        value: "16.8%",
        standing: "typical",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.01",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "1.2%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "8.9%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "9.3%",
        standing: "typical",
      },
    ],
  },
];
