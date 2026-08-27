import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.description,
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description: siteConfig.description,
  },
  twitter: {
    title: `About · ${siteConfig.name}`,
    description: siteConfig.description,
  },
};

const IS = [
  "A way to understand what a company does, in plain language.",
  "A plain-English explanation of common financial metrics.",
  "A single place to see recent news about a company.",
];

const IS_NOT = [
  "Not investment advice or stock recommendations.",
  "Not a broker — you can’t buy or sell here.",
  "Not a source of live prices during this early version.",
];

export default function AboutPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          About PlainMarket
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          {siteConfig.description}
        </p>

        <h2 className="text-muted-foreground mt-12 text-sm font-semibold tracking-wide uppercase">
          What PlainMarket is
        </h2>
        <ul className="mt-3 space-y-2 text-[15px] leading-relaxed">
          {IS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="text-muted-foreground mt-10 text-sm font-semibold tracking-wide uppercase">
          What PlainMarket is not
        </h2>
        <ul className="mt-3 space-y-2 text-[15px] leading-relaxed">
          {IS_NOT.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="border-border bg-muted/40 text-muted-foreground mt-12 rounded-xl border p-5 text-sm leading-relaxed">
          {siteConfig.disclaimerLong}
        </p>
      </div>
    </Container>
  );
}
