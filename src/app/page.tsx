import Link from "next/link";
import { BookOpen, LineChart, Newspaper } from "lucide-react";
import { Container } from "@/components/layout/container";
import { StockSearch } from "@/components/search/stock-search";
import { listCompanies } from "@/lib/data-provider";

const POPULAR = ["RELIANCE", "TCS", "HDFCBANK", "INFY", "ITC", "MARUTI"];

const FEATURES = [
  {
    icon: BookOpen,
    title: "30-second breakdown",
    body: "A short, plain-language summary of what the company does and how healthy its finances look.",
  },
  {
    icon: LineChart,
    title: "Metrics, explained",
    body: "Every number comes with a beginner-friendly explanation of what it actually means.",
  },
  {
    icon: Newspaper,
    title: "Recent news",
    body: "The latest headlines about the company, gathered in one place.",
  },
];

export default async function HomePage() {
  const companies = await listCompanies();
  const popular = companies.filter((company) =>
    POPULAR.includes(company.symbol),
  );

  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Understand any Indian stock in plain English
        </h1>
        <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
          Search a Nifty 50 company and get a clear, jargon-free breakdown of
          what it does and how it{"’"}s doing. No tips, no trading {"—"} just
          understanding.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl">
        <StockSearch companies={companies} autoFocus />

        {popular.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-muted-foreground text-sm">Try:</span>
            {popular.map((company) => (
              <Link
                key={company.symbol}
                href={`/stocks/${company.symbol}`}
                className="border-border hover:border-primary hover:text-primary rounded-full border px-3 py-1 text-sm transition-colors"
              >
                {company.name.replace(/ (Ltd\.?|Limited)$/, "")}
              </Link>
            ))}
          </div>
        )}

        <p className="text-muted-foreground mt-4 text-center text-sm">
          <Link
            href="/companies"
            className="hover:text-foreground underline underline-offset-4 transition-colors"
          >
            Or browse all {companies.length} companies
          </Link>
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-3xl gap-6 sm:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="border-border bg-card rounded-xl border p-5"
          >
            <Icon className="text-primary h-5 w-5" aria-hidden />
            <h2 className="mt-3 text-sm font-semibold">{title}</h2>
            <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
