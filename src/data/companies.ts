import type { Company } from "@/types";

/**
 * Representative Nifty 50 constituents for the MVP.
 *
 * This is a static snapshot for demo purposes — it is NOT maintained against
 * the exchange's periodic index reshuffles. Descriptions are plain-English
 * summaries of what each company does. Read this only through
 * `src/lib/data-provider.ts`.
 */
export const companies: Company[] = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries Ltd.",
    sector: "Energy",
    description:
      "Runs India's largest oil refinery, the Jio mobile network, and Reliance Retail stores.",
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services Ltd.",
    sector: "Information Technology",
    description:
      "India's biggest IT services firm; builds and runs software systems for large companies worldwide.",
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank Ltd.",
    sector: "Banking",
    description:
      "India's largest private-sector bank, offering savings accounts, loans, and credit cards.",
  },
  {
    symbol: "ICICIBANK",
    name: "ICICI Bank Ltd.",
    sector: "Banking",
    description:
      "A large private-sector bank serving individuals and businesses across India.",
  },
  {
    symbol: "INFY",
    name: "Infosys Ltd.",
    sector: "Information Technology",
    description:
      "A global IT services company that builds software and manages technology for big clients.",
  },
  {
    symbol: "HINDUNILVR",
    name: "Hindustan Unilever Ltd.",
    sector: "FMCG",
    description:
      "Makes everyday household brands like Dove, Surf Excel, Lipton, and Lux.",
  },
  {
    symbol: "ITC",
    name: "ITC Ltd.",
    sector: "FMCG",
    description:
      "Sells cigarettes, packaged foods (Aashirvaad, Sunfeast), and runs hotels and paper businesses.",
  },
  {
    symbol: "SBIN",
    name: "State Bank of India",
    sector: "Banking",
    description:
      "India's largest bank, majority-owned by the government, with branches in nearly every town.",
  },
  {
    symbol: "BHARTIARTL",
    name: "Bharti Airtel Ltd.",
    sector: "Telecom",
    description:
      "One of India's biggest mobile and broadband providers, also operating across Africa.",
  },
  {
    symbol: "KOTAKBANK",
    name: "Kotak Mahindra Bank Ltd.",
    sector: "Banking",
    description:
      "A private-sector bank known for retail lending, wealth management, and broking.",
  },
  {
    symbol: "LT",
    name: "Larsen & Toubro Ltd.",
    sector: "Construction & Engineering",
    description:
      "India's largest engineering and construction company, building roads, ports, and metros.",
  },
  {
    symbol: "BAJFINANCE",
    name: "Bajaj Finance Ltd.",
    sector: "Financial Services",
    description:
      "A non-bank lender offering consumer loans, shopping EMIs, and small-business credit.",
  },
  {
    symbol: "AXISBANK",
    name: "Axis Bank Ltd.",
    sector: "Banking",
    description:
      "A large private-sector bank offering retail, corporate, and digital banking services.",
  },
  {
    symbol: "ASIANPAINT",
    name: "Asian Paints Ltd.",
    sector: "Consumer Goods",
    description:
      "India's largest paint maker, also selling home decor and waterproofing products.",
  },
  {
    symbol: "MARUTI",
    name: "Maruti Suzuki India Ltd.",
    sector: "Automobiles",
    description:
      "India's biggest carmaker, known for models like the Swift, Baleno, and Dzire.",
  },
  {
    symbol: "HCLTECH",
    name: "HCL Technologies Ltd.",
    sector: "Information Technology",
    description:
      "A global IT services and software company serving enterprise clients.",
  },
  {
    symbol: "SUNPHARMA",
    name: "Sun Pharmaceutical Industries Ltd.",
    sector: "Pharmaceuticals",
    description:
      "India's largest drugmaker, selling generic and specialty medicines worldwide.",
  },
  {
    symbol: "TITAN",
    name: "Titan Company Ltd.",
    sector: "Consumer Goods",
    description:
      "Sells Tanishq jewellery, Titan and Fastrack watches, and eyewear.",
  },
  {
    symbol: "ULTRACEMCO",
    name: "UltraTech Cement Ltd.",
    sector: "Cement & Construction",
    description:
      "India's largest cement producer, supplying builders and infrastructure projects.",
  },
  {
    symbol: "WIPRO",
    name: "Wipro Ltd.",
    sector: "Information Technology",
    description:
      "A global IT services company providing software, consulting, and outsourcing.",
  },
  {
    symbol: "NESTLEIND",
    name: "Nestle India Ltd.",
    sector: "FMCG",
    description:
      "Makes Maggi noodles, Nescafe coffee, KitKat, and infant nutrition products.",
  },
  {
    symbol: "ONGC",
    name: "Oil & Natural Gas Corporation Ltd.",
    sector: "Energy",
    description:
      "India's largest crude oil and natural gas producer, majority government-owned.",
  },
  {
    symbol: "NTPC",
    name: "NTPC Ltd.",
    sector: "Power & Utilities",
    description:
      "India's biggest electricity generator, running mostly coal and some renewable power plants.",
  },
  {
    symbol: "POWERGRID",
    name: "Power Grid Corporation of India Ltd.",
    sector: "Power & Utilities",
    description:
      "Owns and operates most of India's high-voltage electricity transmission network.",
  },
  {
    symbol: "M&M",
    name: "Mahindra & Mahindra Ltd.",
    sector: "Automobiles",
    description:
      "Makes SUVs, tractors, and commercial vehicles; India's top tractor brand.",
  },
  {
    symbol: "TATAMOTORS",
    name: "Tata Motors Ltd.",
    sector: "Automobiles",
    description:
      "Makes passenger cars, trucks, and buses, and owns Jaguar Land Rover.",
  },
  {
    symbol: "TATASTEEL",
    name: "Tata Steel Ltd.",
    sector: "Metals & Mining",
    description:
      "One of India's largest steel producers, with operations in India and Europe.",
  },
  {
    symbol: "JSWSTEEL",
    name: "JSW Steel Ltd.",
    sector: "Metals & Mining",
    description:
      "A large private-sector steelmaker supplying construction, auto, and appliance industries.",
  },
  {
    symbol: "ADANIENT",
    name: "Adani Enterprises Ltd.",
    sector: "Diversified",
    description:
      "The Adani group's flagship that incubates new businesses like airports, roads, and green hydrogen.",
  },
  {
    symbol: "ADANIPORTS",
    name: "Adani Ports and Special Economic Zone Ltd.",
    sector: "Infrastructure",
    description:
      "India's largest private port operator, handling cargo across coastal terminals.",
  },
  {
    symbol: "COALINDIA",
    name: "Coal India Ltd.",
    sector: "Metals & Mining",
    description:
      "The government-owned company that produces most of India's coal.",
  },
  {
    symbol: "BAJAJFINSV",
    name: "Bajaj Finserv Ltd.",
    sector: "Financial Services",
    description:
      "A holding company for Bajaj's lending, life insurance, and general insurance businesses.",
  },
  {
    symbol: "HDFCLIFE",
    name: "HDFC Life Insurance Company Ltd.",
    sector: "Insurance",
    description: "Sells life insurance and retirement savings plans.",
  },
  {
    symbol: "SBILIFE",
    name: "SBI Life Insurance Company Ltd.",
    sector: "Insurance",
    description:
      "A life insurer that sells policies largely through State Bank of India branches.",
  },
  {
    symbol: "GRASIM",
    name: "Grasim Industries Ltd.",
    sector: "Diversified",
    description:
      "An Aditya Birla company making viscose fibre and chemicals, and the parent of UltraTech Cement.",
  },
  {
    symbol: "BRITANNIA",
    name: "Britannia Industries Ltd.",
    sector: "FMCG",
    description:
      "Makes biscuits, bread, cakes, and dairy products like Good Day and Marie Gold.",
  },
  {
    symbol: "EICHERMOT",
    name: "Eicher Motors Ltd.",
    sector: "Automobiles",
    description:
      "Owns Royal Enfield motorcycles and a commercial-vehicle joint venture with Volvo.",
  },
  {
    symbol: "DRREDDY",
    name: "Dr. Reddy's Laboratories Ltd.",
    sector: "Pharmaceuticals",
    description:
      "Makes generic medicines and active drug ingredients for markets around the world.",
  },
  {
    symbol: "CIPLA",
    name: "Cipla Ltd.",
    sector: "Pharmaceuticals",
    description:
      "A drugmaker known for respiratory, HIV, and generic medicines.",
  },
  {
    symbol: "HEROMOTOCO",
    name: "Hero MotoCorp Ltd.",
    sector: "Automobiles",
    description:
      "The world's largest maker of motorcycles and scooters by volume.",
  },
  {
    symbol: "BAJAJ-AUTO",
    name: "Bajaj Auto Ltd.",
    sector: "Automobiles",
    description:
      "Makes motorcycles and three-wheelers, with a large share of exports.",
  },
  {
    symbol: "INDUSINDBK",
    name: "IndusInd Bank Ltd.",
    sector: "Banking",
    description:
      "A private-sector bank focused on vehicle finance, microfinance, and retail banking.",
  },
  {
    symbol: "TATACONSUM",
    name: "Tata Consumer Products Ltd.",
    sector: "FMCG",
    description: "Sells Tata Tea, Tata Salt, Tetley, and Eight O'Clock Coffee.",
  },
  {
    symbol: "APOLLOHOSP",
    name: "Apollo Hospitals Enterprise Ltd.",
    sector: "Healthcare Services",
    description:
      "Runs one of India's largest hospital chains, along with pharmacies and clinics.",
  },
  {
    symbol: "DIVISLAB",
    name: "Divi's Laboratories Ltd.",
    sector: "Pharmaceuticals",
    description:
      "Makes active pharmaceutical ingredients in bulk for other drug companies.",
  },
  {
    symbol: "TECHM",
    name: "Tech Mahindra Ltd.",
    sector: "Information Technology",
    description:
      "An IT services company with a strong focus on telecom clients.",
  },
  {
    symbol: "LTIM",
    name: "LTIMindtree Ltd.",
    sector: "Information Technology",
    description:
      "An IT services firm formed by merging Larsen & Toubro Infotech and Mindtree.",
  },
  {
    symbol: "SHRIRAMFIN",
    name: "Shriram Finance Ltd.",
    sector: "Financial Services",
    description:
      "A non-bank lender specialising in truck and two-wheeler loans and small-business credit.",
  },
  {
    symbol: "BPCL",
    name: "Bharat Petroleum Corporation Ltd.",
    sector: "Energy",
    description:
      "A government-owned company that refines crude oil and sells fuel through petrol pumps.",
  },
  {
    symbol: "HINDALCO",
    name: "Hindalco Industries Ltd.",
    sector: "Metals & Mining",
    description:
      "An Aditya Birla company that makes aluminium and copper; owns Novelis in the US.",
  },
];
