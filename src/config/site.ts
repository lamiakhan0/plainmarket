/** Static site-wide configuration and standing legal copy. */
export const siteConfig = {
  name: "PlainMarket",
  tagline: "The Indian stock market, in plain English.",
  description:
    "PlainMarket helps beginners understand the Indian stock market in plain English. It translates public financial data into clear, jargon-free insights. It does not give investment recommendations or facilitate trading.",
  url: "https://plainmarket.app",

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ],

  /** Short, persistent disclaimer for headers / banners. Keep it one line. */
  disclaimerShort:
    "Educational only — not investment advice, and we don't facilitate trading.",

  /** Full disclaimer for the footer and About page. */
  disclaimerLong:
    "PlainMarket provides educational explanations of publicly available financial data about Indian companies. Nothing here is a recommendation to buy, sell, or hold any security. We do not facilitate trading and we are not a registered investment adviser. Always do your own research and consult a SEBI-registered adviser before making financial decisions. During the MVP, all figures shown are illustrative mock data, not live market data.",
} as const;

export type SiteConfig = typeof siteConfig;
