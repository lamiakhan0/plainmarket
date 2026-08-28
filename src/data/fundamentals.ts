import type { Fundamentals } from "@/types";

/**
 * Mock financial snapshots, one per company.
 *
 * All figures are ILLUSTRATIVE mock data — plausible for large-cap Indian
 * companies but not live or precise. `metric.id` matches a `GlossaryEntry`
 * in `src/data/glossary.ts`. `standing` is relative to the company's sector.
 * Breakdown text stays descriptive, never advisory.
 *
 * Curated coverage: the six landing-page companies plus the full Banking,
 * Information Technology, Automobiles, FMCG and Pharmaceuticals sectors.
 * Companies without a record here get a generated fallback (see
 * `src/lib/generate-fundamentals.ts`). Read this only through
 * `src/lib/data-provider.ts`.
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
  {
    symbol: "ICICIBANK",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "ICICI Bank is India's second-largest private-sector bank. It lends to individuals (home, car and personal loans, credit cards) and to businesses, and earns mainly from the gap between the interest it charges and the interest it pays, plus fees from payments and wealth management.",
      financialHealth:
        "The bank has been one of the more profitable large lenders, with return on equity in the high teens and a low share of bad loans. Loan and deposit growth has been steady, and fee income adds a cushion when lending margins tighten.",
      thingsToWatch: [
        "Unsecured loans such as personal loans and credit cards have grown quickly and are more prone to defaults if the economy weakens.",
        "Competition for deposits across banks can push up funding costs.",
        "A large retail loan book means results track household borrowing demand closely.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹9.8 lakh crore",
        standing: "high",
      },
      { id: "peRatio", label: "P/E ratio", value: "17.2", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "3.1", standing: "typical" },
      {
        id: "roe",
        label: "Return on equity",
        value: "17.8%",
        standing: "high",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "0.8%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Net interest income growth (YoY)",
        value: "12.6%",
        standing: "high",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "26.4%",
        standing: "high",
      },
      {
        id: "eps",
        label: "Earnings per share",
        value: "₹64.5",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "SBIN",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "State Bank of India is the country's largest bank and is majority-owned by the government. It has the widest branch and ATM network in India, a very large deposit base, and lends across retail, farm and corporate segments. It also holds stakes in listed insurance, mutual fund and card businesses.",
      financialHealth:
        "Profits have improved as older bad loans were cleaned up, and return on equity has moved into the mid-teens. A very large, low-cost deposit base is a structural advantage. As a government-owned bank, it sometimes carries policy goals alongside commercial ones.",
      thingsToWatch: [
        "As a government bank, it can be asked to support national schemes that may not be the most profitable use of its capital.",
        "Corporate lending cycles have historically caused spikes in bad loans.",
        "The value of its insurance and other subsidiaries is a meaningful part of the overall picture.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹7.6 lakh crore",
        standing: "high",
      },
      { id: "peRatio", label: "P/E ratio", value: "9.8", standing: "low" },
      { id: "pbRatio", label: "P/B ratio", value: "1.7", standing: "low" },
      {
        id: "roe",
        label: "Return on equity",
        value: "15.3%",
        standing: "typical",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "1.6%",
        standing: "high",
      },
      {
        id: "revenueGrowth",
        label: "Net interest income growth (YoY)",
        value: "10.1%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "22.1%",
        standing: "typical",
      },
      {
        id: "eps",
        label: "Earnings per share",
        value: "₹78.2",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "KOTAKBANK",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Kotak Mahindra Bank is a mid-sized private-sector bank known for conservative lending and a strong presence in wealth management, broking and asset management through its subsidiaries. It has historically prioritised profitability and asset quality over rapid growth.",
      financialHealth:
        "The bank runs with high capital levels, a low share of bad loans and healthy return on equity. Growth has generally been slower than some private peers, partly by choice. Its non-bank businesses add a steady stream of fee income.",
      thingsToWatch: [
        "A cautious approach can mean slower loan growth when rivals expand faster.",
        "A past regulatory restriction on adding new digital customers showed how supervision can affect growth.",
        "The transition after its long-time founder-CEO stepped back from the top job is still being watched.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹3.6 lakh crore",
        standing: "typical",
      },
      { id: "peRatio", label: "P/E ratio", value: "18.4", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "2.6", standing: "typical" },
      {
        id: "roe",
        label: "Return on equity",
        value: "14.2%",
        standing: "typical",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "0.3%",
        standing: "low",
      },
      {
        id: "revenueGrowth",
        label: "Net interest income growth (YoY)",
        value: "8.2%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "25.6%",
        standing: "high",
      },
      {
        id: "eps",
        label: "Earnings per share",
        value: "₹92.1",
        standing: "high",
      },
    ],
  },
  {
    symbol: "AXISBANK",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Axis Bank is India's third-largest private-sector bank. It offers the full range of retail and corporate banking, and has expanded in credit cards and digital payments, including after buying Citi's India consumer business.",
      financialHealth:
        "Profitability has improved as the bank reduced problem corporate loans and grew higher-margin retail lending, lifting return on equity into the mid-teens. Integrating the acquired Citi customers has added costs in the short term.",
      thingsToWatch: [
        "The Citi consumer business integration adds one-off costs and execution risk.",
        "A sizeable corporate loan book leaves it exposed to business-cycle downturns.",
        "Deposit growth needs to keep pace with its lending ambitions.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹3.7 lakh crore",
        standing: "typical",
      },
      { id: "peRatio", label: "P/E ratio", value: "13.6", standing: "low" },
      { id: "pbRatio", label: "P/B ratio", value: "2.1", standing: "low" },
      {
        id: "roe",
        label: "Return on equity",
        value: "15.8%",
        standing: "typical",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "0.2%",
        standing: "low",
      },
      {
        id: "revenueGrowth",
        label: "Net interest income growth (YoY)",
        value: "11.4%",
        standing: "high",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "23.9%",
        standing: "typical",
      },
      {
        id: "eps",
        label: "Earnings per share",
        value: "₹86.7",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "INDUSINDBK",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "IndusInd Bank is a mid-sized private-sector bank with a strong position in vehicle financing (commercial vehicles, two-wheelers, tractors) and in microfinance through its Bharat Financial arm, alongside regular retail and corporate banking.",
      financialHealth:
        "The bank earns relatively high lending margins because vehicle and microfinance loans carry higher interest rates, but these segments also see more defaults in a downturn. Return on equity has been in the mid-teens in good years.",
      thingsToWatch: [
        "Vehicle finance and microfinance are more cyclical and default-prone than home loans.",
        "It has a higher share of bulk deposits, which are less sticky than retail deposits.",
        "Past questions around loan classification have made investors more sensitive to its reporting.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹1.1 lakh crore",
        standing: "low",
      },
      { id: "peRatio", label: "P/E ratio", value: "10.9", standing: "low" },
      { id: "pbRatio", label: "P/B ratio", value: "1.5", standing: "low" },
      {
        id: "roe",
        label: "Return on equity",
        value: "14.6%",
        standing: "typical",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "1.4%",
        standing: "high",
      },
      {
        id: "revenueGrowth",
        label: "Net interest income growth (YoY)",
        value: "13.8%",
        standing: "high",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "20.3%",
        standing: "low",
      },
      {
        id: "eps",
        label: "Earnings per share",
        value: "₹124.5",
        standing: "high",
      },
    ],
  },
  {
    symbol: "HCLTECH",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "HCL Technologies is India's third-largest IT services company. Alongside the usual software development and IT operations work, it has an unusually large engineering and R&D services arm (designing chips, devices and software for tech and industrial firms) and a smaller software-products business.",
      financialHealth:
        "HCLTech is solidly profitable with very little debt and steady cash generation. Growth has held up a little better than some peers, helped by its engineering-services mix. It pays out a high share of profit as dividends.",
      thingsToWatch: [
        "The software-products business grows slowly and can drag on the overall growth rate.",
        "Like all Indian IT, demand depends on technology budgets at large Western companies.",
        "Engineering-services clients in areas like semiconductors and cars have their own cycles.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹4.6 lakh crore",
        standing: "high",
      },
      { id: "peRatio", label: "P/E ratio", value: "25.4", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "6.2", standing: "typical" },
      {
        id: "roe",
        label: "Return on equity",
        value: "23.6%",
        standing: "typical",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.08",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "3.6%",
        standing: "high",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "5.4%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "16.8%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "WIPRO",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Wipro is one of India's largest IT services companies, offering software development, cloud migration, consulting and IT operations for global clients. It has a large base of banking and financial-services clients and, after buying the consultancy Capco, a bigger front-end advisory business.",
      financialHealth:
        "Wipro is profitable with low debt, but revenue growth has trailed its larger rivals for several years and margins are a little lower. It returns cash through regular buybacks and dividends.",
      thingsToWatch: [
        "Growth has lagged TCS, Infosys and HCLTech, and closing that gap has proven hard.",
        "Heavy exposure to banking and financial-services clients means Western banking budgets matter a lot.",
        "Frequent changes in senior leadership over recent years have unsettled strategy.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹2.7 lakh crore",
        standing: "typical",
      },
      { id: "peRatio", label: "P/E ratio", value: "22.1", standing: "low" },
      { id: "pbRatio", label: "P/B ratio", value: "3.6", standing: "low" },
      { id: "roe", label: "Return on equity", value: "16.4%", standing: "low" },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.12",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "2.1%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "2.3%",
        standing: "low",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "16.1%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "TECHM",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Tech Mahindra is an IT services company with an unusually large share of revenue from telecom operators, whom it helps run networks and billing systems, alongside standard software and IT work for other industries.",
      financialHealth:
        "Profit margins have been below the sector's leaders and the company is midway through a plan to improve them. Debt is low and cash generation is adequate. Growth has been soft as telecom clients cut spending.",
      thingsToWatch: [
        "Telecom customers have been spending cautiously, which hits Tech Mahindra more than diversified peers.",
        "Its profit margins have room to improve, but the turnaround is still unproven.",
        "Its record on past acquisitions has been mixed.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹1.5 lakh crore",
        standing: "low",
      },
      { id: "peRatio", label: "P/E ratio", value: "31.5", standing: "high" },
      { id: "pbRatio", label: "P/B ratio", value: "4.1", standing: "low" },
      { id: "roe", label: "Return on equity", value: "13.2%", standing: "low" },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.10",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "2.8%",
        standing: "high",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "3.1%",
        standing: "low",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "9.4%",
        standing: "low",
      },
    ],
  },
  {
    symbol: "LTIM",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "LTIMindtree is an IT services company formed in 2022 by merging Larsen & Toubro's two listed software firms, L&T Infotech and Mindtree. It does software development, data and cloud work, and IT operations, with strong client bases in banking, insurance and technology.",
      financialHealth:
        "The company is profitable with negligible debt and good cash conversion. Growth has recently been closer to the sector average than to the top of the pack. The two merged businesses are still being fully integrated.",
      thingsToWatch: [
        "Completing the integration of L&T Infotech and Mindtree (systems, teams, clients) is still in progress.",
        "A concentrated set of large clients means losing one would be felt.",
        "Demand depends on Western technology budgets, as for all Indian IT.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹1.6 lakh crore",
        standing: "low",
      },
      { id: "peRatio", label: "P/E ratio", value: "29.8", standing: "high" },
      { id: "pbRatio", label: "P/B ratio", value: "5.9", standing: "typical" },
      {
        id: "roe",
        label: "Return on equity",
        value: "22.4%",
        standing: "typical",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.05",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "1.9%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "6.8%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "14.6%",
        standing: "low",
      },
    ],
  },
  {
    symbol: "TATAMOTORS",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Tata Motors makes passenger cars, trucks and buses in India and owns the British luxury carmaker Jaguar Land Rover, which brings in most of its revenue. In India it is the market leader in electric passenger cars and a major player in commercial vehicles.",
      financialHealth:
        "Profits have improved sharply as Jaguar Land Rover recovered and Indian commercial-vehicle demand held up. The company has cut what was once a very large debt pile close to zero on a net basis. Results still swing with the global luxury-car cycle.",
      thingsToWatch: [
        "Jaguar Land Rover drives most of the profit, so European and Chinese luxury-car demand matters more than the Indian business.",
        "Commercial-vehicle sales are closely tied to India's economic and infrastructure cycle.",
        "Heavy spending is needed on electric and cleaner models across both businesses.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹3.5 lakh crore",
        standing: "typical",
      },
      { id: "peRatio", label: "P/E ratio", value: "12.4", standing: "low" },
      { id: "pbRatio", label: "P/B ratio", value: "3.1", standing: "low" },
      {
        id: "roe",
        label: "Return on equity",
        value: "22.6%",
        standing: "high",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.35",
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
        label: "Revenue growth (YoY)",
        value: "11.2%",
        standing: "high",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "7.8%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "MM",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Mahindra & Mahindra makes SUVs and is India's largest tractor maker. Its SUV line-up (Thar, Scorpio-N, XUV700) has sold strongly in recent years. It also holds stakes in listed group companies in IT, finance and other areas.",
      financialHealth:
        "Both the SUV and tractor businesses have been profitable, and the company has tightened focus after exiting several loss-making ventures. Return on equity is healthy and debt in the core auto business is low. Tractor demand rises and falls with the farm economy.",
      thingsToWatch: [
        "Tractor sales depend on monsoon rains, crop prices and rural incomes.",
        "SUV demand has been strong, but competition in that segment is intense.",
        "The value of its many listed and unlisted subsidiaries is a large part of the overall picture.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹3.6 lakh crore",
        standing: "typical",
      },
      { id: "peRatio", label: "P/E ratio", value: "24.8", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "4.6", standing: "typical" },
      {
        id: "roe",
        label: "Return on equity",
        value: "18.4%",
        standing: "typical",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.12",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "0.9%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "12.6%",
        standing: "high",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "10.6%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "BAJAJ-AUTO",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Bajaj Auto makes motorcycles and three-wheelers. It sells a large share of its output abroad, particularly in Africa, Latin America and South Asia, and owns a stake in Austria's KTM. It also sells the Chetak electric scooter.",
      financialHealth:
        "Bajaj Auto runs some of the highest profit margins in the industry, holds a large cash pile and almost no debt, and returns a lot of cash to shareholders through dividends and buybacks. Exports give it a second demand engine alongside India.",
      thingsToWatch: [
        "A big export business means currency swings and economic trouble in Africa or Latin America feed through to results.",
        "It has been slower into electric two-wheelers than some newer rivals.",
        "Domestic entry-level motorcycle demand has been patchy.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹2.6 lakh crore",
        standing: "typical",
      },
      { id: "peRatio", label: "P/E ratio", value: "31.2", standing: "high" },
      { id: "pbRatio", label: "P/B ratio", value: "8.4", standing: "high" },
      {
        id: "roe",
        label: "Return on equity",
        value: "27.8%",
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
        value: "1.9%",
        standing: "high",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "9.4%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "17.2%",
        standing: "high",
      },
    ],
  },
  {
    symbol: "EICHERMOT",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Eicher Motors owns Royal Enfield, which dominates India's mid-size motorcycle segment (250–750cc) with models like the Classic and Hunter, and holds a commercial-vehicle joint venture with Volvo. Royal Enfield drives most of the profit.",
      financialHealth:
        "Royal Enfield earns unusually high margins for a motorcycle business, and the company has little debt and strong cash generation. Growth depends on holding its niche as rivals launch competing mid-size bikes and on expanding Royal Enfield sales overseas.",
      thingsToWatch: [
        "Royal Enfield faces new competition in the mid-size segment from Bajaj-Triumph, Harley-Hero and others.",
        "The company is heavily reliant on one brand in one segment.",
        "Overseas expansion is still a small part of sales.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹1.4 lakh crore",
        standing: "low",
      },
      { id: "peRatio", label: "P/E ratio", value: "29.4", standing: "high" },
      { id: "pbRatio", label: "P/B ratio", value: "6.8", standing: "high" },
      {
        id: "roe",
        label: "Return on equity",
        value: "23.6%",
        standing: "high",
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
        value: "1.3%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "10.8%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "19.4%",
        standing: "high",
      },
    ],
  },
  {
    symbol: "HEROMOTOCO",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Hero MotoCorp is the world's largest maker of motorcycles and scooters by volume, built on a dominant position in India's mass-market commuter motorcycles. It is expanding into premium bikes (with Harley-Davidson) and electric scooters (Vida).",
      financialHealth:
        "Hero is highly profitable in its core commuter segment, holds net cash and pays generous dividends. The challenge is growth: commuter demand has been flat for years, and Hero is under-represented in the faster-growing scooter, premium and electric segments.",
      thingsToWatch: [
        "Mass-market motorcycle demand in India has been broadly flat for several years.",
        "Hero is weaker in scooters and premium bikes, where the market is growing faster.",
        "The move into electric scooters is early and competitive.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹0.9 lakh crore",
        standing: "low",
      },
      { id: "peRatio", label: "P/E ratio", value: "19.6", standing: "low" },
      { id: "pbRatio", label: "P/B ratio", value: "4.2", standing: "typical" },
      {
        id: "roe",
        label: "Return on equity",
        value: "22.1%",
        standing: "high",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.02",
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
        value: "6.8%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "11.8%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "HINDUNILVR",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Hindustan Unilever is India's largest consumer-goods company, owned by the global Unilever group. It sells everyday brands across home care (Surf Excel, Vim), personal care (Dove, Lux, Lifebuoy), and foods and refreshment (Brooke Bond, Bru, Horlicks, Kissan).",
      financialHealth:
        "The company earns very high returns on capital, carries no meaningful debt, and hands almost all its profit back as dividends. Growth comes from a mix of price and volume; in rural slowdowns, volume growth can stall for several quarters.",
      thingsToWatch: [
        "Rural demand, a large share of sales, is sensitive to inflation and the monsoon.",
        "Prices of inputs like palm oil, crude derivatives and tea move margins.",
        "Smaller regional and direct-to-consumer brands are chipping away in some categories.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹5.8 lakh crore",
        standing: "high",
      },
      { id: "peRatio", label: "P/E ratio", value: "52.4", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "11.2", standing: "typical" },
      { id: "roe", label: "Return on equity", value: "20.6%", standing: "low" },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.03",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "2.1%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "4.6%",
        standing: "low",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "16.8%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "NESTLEIND",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Nestlé India, a subsidiary of the Swiss group Nestlé, sells packaged foods and beverages: Maggi noodles and sauces, Nescafé coffee, KitKat and Munch chocolates, and infant nutrition brands like Cerelac and Lactogen.",
      financialHealth:
        "Nestlé India earns among the highest returns on capital in the market, helped by strong brands and an asset-light model. It has little debt and pays out most of its profit. Milk and cocoa prices are the main pressure on margins.",
      thingsToWatch: [
        "A large share of sales comes from just a few brands, with Maggi the biggest single one.",
        "Milk, coffee and cocoa prices feed directly into costs.",
        "Its products sit at a price premium, which can be a drag when consumers trade down.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹2.4 lakh crore",
        standing: "typical",
      },
      { id: "peRatio", label: "P/E ratio", value: "58.6", standing: "high" },
      { id: "pbRatio", label: "P/B ratio", value: "38.4", standing: "high" },
      {
        id: "roe",
        label: "Return on equity",
        value: "72.4%",
        standing: "high",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.05",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "1.4%",
        standing: "low",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "6.8%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "15.4%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "BRITANNIA",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Britannia Industries is one of India's largest food companies, best known for biscuits (Good Day, Marie Gold, Bourbon, Milk Bikis). It also sells bread, cakes, rusk and a growing range of dairy products like cheese and milk drinks.",
      financialHealth:
        "Britannia is highly profitable for a food business, with strong brands and wide distribution. It carries modest debt and pays generous dividends. Wheat, sugar, palm oil and milk prices are the main swing factor for margins.",
      thingsToWatch: [
        "Biscuits are a mature category in cities; most growth now has to come from rural areas and new products.",
        "Commodity costs (wheat, palm oil, sugar) can move margins sharply.",
        "The push into dairy and other adjacent categories is still building scale.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹1.4 lakh crore",
        standing: "low",
      },
      { id: "peRatio", label: "P/E ratio", value: "52.8", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "26.4", standing: "high" },
      {
        id: "roe",
        label: "Return on equity",
        value: "58.2%",
        standing: "high",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.42",
        standing: "typical",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "1.8%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "7.4%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "12.6%",
        standing: "low",
      },
    ],
  },
  {
    symbol: "TATACONSUM",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Tata Consumer Products sells tea (Tata Tea, Tetley), Tata Salt, coffee (Eight O'Clock), pulses and spices (Tata Sampann), and packaged water. It runs the Starbucks coffee-shop joint venture in India and has been expanding from beverages into a broader food and staples business.",
      financialHealth:
        "Margins are thinner than at pure branded-foods peers because salt and tea are lower-margin staples, but the newer packaged-foods lines are helping the mix. Debt is moderate after recent acquisitions, and return on equity is in the low teens.",
      thingsToWatch: [
        "Tea and salt are low-margin staples where pricing power is limited.",
        "Recent acquisitions (Capital Foods, Organic India) need to be integrated and to earn their price.",
        "Tea leaf prices can be volatile depending on the harvest.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹1.1 lakh crore",
        standing: "low",
      },
      { id: "peRatio", label: "P/E ratio", value: "62.4", standing: "high" },
      { id: "pbRatio", label: "P/B ratio", value: "4.8", standing: "low" },
      { id: "roe", label: "Return on equity", value: "9.4%", standing: "low" },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.18",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "1.1%",
        standing: "low",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "9.8%",
        standing: "high",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "9.2%",
        standing: "low",
      },
    ],
  },
  {
    symbol: "SUNPHARMA",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Sun Pharmaceutical is India's largest drugmaker. It sells generic medicines around the world, has the biggest branded-medicine business in India, and has been building a higher-margin specialty portfolio (skin, eye and other branded drugs) in the United States.",
      financialHealth:
        "Sun is profitable with low debt and strong cash generation. The shift toward specialty drugs has lifted margins above those of a typical generics maker. US generic price competition and the cost of running specialty sales teams are the main pressures.",
      thingsToWatch: [
        "US generic prices have been under long-running pressure from consolidated buyers.",
        "Specialty drugs need heavy marketing spend before they pay off.",
        "Regulatory inspections of manufacturing plants can disrupt supply and sales.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹4.4 lakh crore",
        standing: "high",
      },
      { id: "peRatio", label: "P/E ratio", value: "36.2", standing: "typical" },
      { id: "pbRatio", label: "P/B ratio", value: "6.4", standing: "typical" },
      {
        id: "roe",
        label: "Return on equity",
        value: "17.4%",
        standing: "typical",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.05",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "0.8%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "9.6%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "17.8%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "DRREDDY",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Dr. Reddy's Laboratories makes generic medicines and the active ingredients that go into them, selling mainly in the United States, India, Russia and other emerging markets. It also has a small but growing biosimilars business and, after a recent acquisition, a consumer-health nicotine-replacement range.",
      financialHealth:
        "The company is profitable with low debt and a net cash position. Earnings depend heavily on how many high-value generic launches it lands in the US in a given year, which makes results lumpy. Margins are solid for a generics maker.",
      thingsToWatch: [
        "US earnings swing with the timing of big generic launches and how fast prices then erode.",
        "One product (a generic of a cancer drug) has contributed an outsized share of recent US profit.",
        "Factory inspections by the US regulator are a recurring risk.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹1.1 lakh crore",
        standing: "low",
      },
      { id: "peRatio", label: "P/E ratio", value: "18.6", standing: "low" },
      { id: "pbRatio", label: "P/B ratio", value: "3.2", standing: "low" },
      {
        id: "roe",
        label: "Return on equity",
        value: "18.9%",
        standing: "high",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.08",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "0.7%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "8.4%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "16.4%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "CIPLA",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Cipla is best known in India for respiratory medicines and inhalers, where it is the market leader, and has a strong presence in South Africa and other emerging markets. In the United States it sells generics and has been pushing into harder-to-copy respiratory and peptide products.",
      financialHealth:
        "Cipla is profitable with very low debt and a net cash balance sheet. Its large, steady India branded business gives it a more stable earnings base than a pure US generics maker. Growth now depends on landing complex US respiratory launches.",
      thingsToWatch: [
        "Complex US launches (such as a generic of a major inhaler) have faced delays and regulatory hurdles.",
        "Manufacturing-plant inspections by the US regulator have flagged issues in the past.",
        "The South Africa business carries currency risk from the rand.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹1.3 lakh crore",
        standing: "low",
      },
      { id: "peRatio", label: "P/E ratio", value: "24.8", standing: "low" },
      { id: "pbRatio", label: "P/B ratio", value: "3.8", standing: "low" },
      {
        id: "roe",
        label: "Return on equity",
        value: "16.8%",
        standing: "typical",
      },
      {
        id: "debtToEquity",
        label: "Debt to equity",
        value: "0.03",
        standing: "low",
      },
      {
        id: "dividendYield",
        label: "Dividend yield",
        value: "0.9%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "7.8%",
        standing: "typical",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "16.2%",
        standing: "typical",
      },
    ],
  },
  {
    symbol: "DIVISLAB",
    asOf: "2026-06-30",
    breakdown: {
      whatItDoes:
        "Divi's Laboratories does not sell finished medicines. It makes active pharmaceutical ingredients and intermediates in bulk for other drug companies — both large-volume generic ingredients and custom synthesis work for innovator drugmakers.",
      financialHealth:
        "Divi's earns unusually high margins for a manufacturer, is debt-free and holds a large cash pile. Because it supplies other pharma companies, its sales rise and fall with their production and inventory cycles, which made recent years bumpy.",
      thingsToWatch: [
        "Sales depend on a relatively small number of large pharma customers and their ordering patterns.",
        "A handful of products account for a big share of revenue.",
        "New capacity has been added ahead of demand, which weighs on returns until it fills up.",
      ],
    },
    metrics: [
      {
        id: "marketCap",
        label: "Market cap",
        value: "₹1.6 lakh crore",
        standing: "typical",
      },
      { id: "peRatio", label: "P/E ratio", value: "42.6", standing: "high" },
      { id: "pbRatio", label: "P/B ratio", value: "7.8", standing: "high" },
      {
        id: "roe",
        label: "Return on equity",
        value: "16.4%",
        standing: "typical",
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
        value: "0.7%",
        standing: "typical",
      },
      {
        id: "revenueGrowth",
        label: "Revenue growth (YoY)",
        value: "11.4%",
        standing: "high",
      },
      {
        id: "profitMargin",
        label: "Net profit margin",
        value: "22.8%",
        standing: "high",
      },
    ],
  },
];
