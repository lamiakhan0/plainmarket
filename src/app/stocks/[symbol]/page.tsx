import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ThirtySecondBreakdown } from "@/components/stock/thirty-second-breakdown";
import { MetricsGrid } from "@/components/stock/metrics-grid";
import { NewsList } from "@/components/stock/news-list";
import { siteConfig } from "@/config/site";
import {
  getCompany,
  getCompanyNews,
  getFundamentals,
  listCompanies,
  listGlossary,
} from "@/lib/data-provider";

type Params = { params: Promise<{ symbol: string }> };

export async function generateStaticParams() {
  const companies = await listCompanies();
  return companies.map((company) => ({ symbol: company.symbol }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { symbol } = await params;
  const company = await getCompany(symbol);
  if (!company) return { title: "Company not found" };
  const title = `${company.name} (${company.symbol})`;
  return {
    title,
    description: company.description,
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description: company.description,
    },
    twitter: {
      title: `${title} · ${siteConfig.name}`,
      description: company.description,
    },
  };
}

export default async function StockPage({ params }: Params) {
  const { symbol } = await params;
  const [company, fundamentals, glossary, news, allCompanies] =
    await Promise.all([
      getCompany(symbol),
      getFundamentals(symbol),
      listGlossary(),
      getCompanyNews(symbol),
      listCompanies(),
    ]);
  if (!company) notFound();

  const peers = allCompanies
    .filter((c) => c.sector === company.sector && c.symbol !== company.symbol)
    .slice(0, 6);

  return (
    <Container className="py-12">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to search
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="text-3xl font-semibold tracking-tight">
            {company.name}
          </h1>
          <span className="bg-muted text-muted-foreground rounded-md px-2 py-0.5 font-mono text-sm">
            {company.symbol}
          </span>
        </div>
        <p className="text-muted-foreground mt-1 text-sm">{company.sector}</p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          {company.description}
        </p>
      </header>

      <div className="mt-10 space-y-10">
        {fundamentals ? (
          <>
            <ThirtySecondBreakdown breakdown={fundamentals.breakdown} />
            <MetricsGrid
              metrics={fundamentals.metrics}
              glossary={glossary}
              asOf={fundamentals.asOf}
            />
            <NewsList items={news} />
          </>
        ) : (
          <div className="border-border bg-card rounded-xl border border-dashed p-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              A plain-English breakdown, metrics, and news for {company.name}{" "}
              are being written and will appear here soon.
            </p>
            <Link
              href="/companies"
              className="text-primary mt-3 inline-block text-sm hover:underline"
            >
              See companies with full breakdowns
            </Link>
          </div>
        )}
      </div>

      {peers.length > 0 && (
        <section aria-labelledby="peers-heading" className="mt-12">
          <h2
            id="peers-heading"
            className="text-primary text-xs font-semibold tracking-wide uppercase"
          >
            More in {company.sector}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {peers.map((peer) => (
              <Link
                key={peer.symbol}
                href={`/stocks/${peer.symbol}`}
                className="border-border hover:border-primary hover:text-primary rounded-full border px-3 py-1 text-sm transition-colors"
              >
                {peer.name.replace(/ (Ltd\.?|Limited)$/, "")}
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="text-muted-foreground border-border mt-12 border-t pt-6 text-xs leading-relaxed">
        {siteConfig.disclaimerShort}
      </p>
    </Container>
  );
}
