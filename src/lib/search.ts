import type { Company } from "@/types";

/**
 * Rank companies against a search query, best match first.
 *
 * Ordering, roughly: exact symbol → symbol prefix → name prefix →
 * name-word prefix → name contains → symbol contains. Ties break
 * alphabetically by name. Pure and side-effect free.
 */
export function rankCompanies(
  companies: Company[],
  query: string,
  limit = 8,
): Company[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored: { company: Company; score: number }[] = [];

  for (const company of companies) {
    const symbol = company.symbol.toLowerCase();
    const name = company.name.toLowerCase();

    let score = Number.POSITIVE_INFINITY;
    if (symbol === q) score = 0;
    else if (symbol.startsWith(q)) score = 1;
    else if (name.startsWith(q)) score = 2;
    else if (name.split(/[\s&]+/).some((word) => word.startsWith(q))) score = 3;
    else if (name.includes(q)) score = 4;
    else if (symbol.includes(q)) score = 5;

    if (Number.isFinite(score)) scored.push({ company, score });
  }

  scored.sort(
    (a, b) => a.score - b.score || a.company.name.localeCompare(b.company.name),
  );

  return scored.slice(0, limit).map((entry) => entry.company);
}
