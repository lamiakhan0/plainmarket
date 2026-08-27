import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ThirtySecondBreakdown } from "@/components/stock/thirty-second-breakdown";
import { MetricsGrid } from "@/components/stock/metrics-grid";
import { NewsList } from "@/components/stock/news-list";
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
  return {
    title: `${company.name} (${company.symbol})`,
    description: company.description,
  };
}

export default async function StockPage({ params }: Params) {
  const { symbol } = await params;
  const [company, fundamentals, glossary, news] = await Promise.all([
    getCompany(symbol),
    getFundamentals(symbol),
    listGlossary(),
    getCompanyNews(symbol),
  ]);
  if (!company) notFound();

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
          <p className="border-border bg-card text-muted-foreground rounded-xl border border-dashed p-6 text-sm leading-relaxed">
            A plain-English breakdown, metrics, and news for {company.name} are
            being written and will appear here soon.
          </p>
        )}
      </div>
    </Container>
  );
}
