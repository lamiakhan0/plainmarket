import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { listCompanies, listCuratedSymbols } from "@/lib/data-provider";
import { cn } from "@/lib/utils";
import type { Company } from "@/types";

const listDescription =
  "Browse all 50 Nifty 50 companies, grouped by sector, with a plain-English description of what each one does.";

export const metadata: Metadata = {
  title: "Companies",
  description: listDescription,
  openGraph: {
    title: "Companies · PlainMarket",
    description: listDescription,
  },
  twitter: {
    title: "Companies · PlainMarket",
    description: listDescription,
  },
};

/** Group companies by sector, sectors A–Z, companies by name within each. */
function groupBySector(companies: Company[]): [string, Company[]][] {
  const bySector = new Map<string, Company[]>();
  for (const company of companies) {
    const list = bySector.get(company.sector) ?? [];
    list.push(company);
    bySector.set(company.sector, list);
  }
  return [...bySector.entries()]
    .map(
      ([sector, list]) =>
        [sector, [...list].sort((a, b) => a.name.localeCompare(b.name))] as [
          string,
          Company[],
        ],
    )
    .sort((a, b) => a[0].localeCompare(b[0]));
}

const sectorId = (sector: string) =>
  `sector-${sector.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default async function CompaniesPage() {
  const [companies, curatedSymbols] = await Promise.all([
    listCompanies(),
    listCuratedSymbols(),
  ]);
  const curated = new Set(curatedSymbols);
  const sectors = groupBySector(companies);

  return (
    <Container className="py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Companies</h1>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          All {companies.length} Nifty 50 companies, grouped by sector. Pick one
          to see what it does in plain English.
        </p>

        <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
          <span className="inline-flex items-center gap-1">
            <Check className="h-3 w-3" aria-hidden />
            In-depth analysis
          </span>
          <span className="inline-flex items-center gap-1">
            <Sparkles className="h-3 w-3" aria-hidden />
            Auto-generated overview
          </span>
          <span>
            {curated.size} of {companies.length} have in-depth analysis
          </span>
        </div>
      </header>

      <nav aria-label="Jump to sector" className="mt-8 flex flex-wrap gap-2">
        {sectors.map(([sector]) => (
          <a
            key={sector}
            href={`#${sectorId(sector)}`}
            className="border-border hover:border-primary hover:text-primary text-muted-foreground rounded-full border px-3 py-1 text-xs transition-colors"
          >
            {sector}
          </a>
        ))}
      </nav>

      <div className="mt-10 space-y-10">
        {sectors.map(([sector, list]) => (
          <section key={sector} aria-labelledby={sectorId(sector)}>
            <h2
              id={sectorId(sector)}
              className="border-border flex scroll-mt-24 items-baseline justify-between border-b pb-2 text-sm font-semibold"
            >
              {sector}
              <span className="text-muted-foreground font-normal">
                {list.length}
              </span>
            </h2>

            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((company) => {
                const isCurated = curated.has(company.symbol);
                return (
                  <li key={company.symbol}>
                    <Link
                      href={`/stocks/${company.symbol}`}
                      className="border-border bg-card hover:border-primary/50 focus-visible:ring-ring group block h-full rounded-xl border p-4 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="group-hover:text-primary font-medium transition-colors">
                          {company.name}
                        </span>
                        <span className="bg-muted text-muted-foreground shrink-0 rounded-md px-1.5 py-0.5 font-mono text-xs">
                          {company.symbol}
                        </span>
                      </div>

                      <p className="text-muted-foreground mt-1.5 line-clamp-2 text-sm leading-relaxed">
                        {company.description}
                      </p>

                      <span
                        className={cn(
                          "mt-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs",
                          isCurated
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        {isCurated ? (
                          <Check className="h-3 w-3" aria-hidden />
                        ) : (
                          <Sparkles className="h-3 w-3" aria-hidden />
                        )}
                        {isCurated ? "In-depth analysis" : "Auto-generated"}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  );
}
