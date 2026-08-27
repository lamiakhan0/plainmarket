import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { getCompany, listCompanies } from "@/lib/data-provider";

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
  const company = await getCompany(symbol);
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

      <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
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

      <div className="border-border bg-card text-muted-foreground mt-10 rounded-xl border border-dashed p-6 text-sm leading-relaxed">
        The 30-second breakdown, financial metrics with plain-English
        explanations, and recent news for {company.name} are coming next.
      </div>
    </Container>
  );
}
