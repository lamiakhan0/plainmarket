"use client";

import { useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import type { Company } from "@/types";
import { rankCompanies } from "@/lib/search";
import { cn } from "@/lib/utils";

interface StockSearchProps {
  companies: Company[];
  className?: string;
  /** Focus the input on mount. Use on the landing page only. */
  autoFocus?: boolean;
}

/** Accessible combobox: type a company name or ticker, pick from the list. */
export function StockSearch({
  companies,
  className,
  autoFocus,
}: StockSearchProps) {
  const router = useRouter();
  const listboxId = useId();
  const optionId = (i: number) => `${listboxId}-option-${i}`;

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const results = useMemo(
    () => rankCompanies(companies, query, 8),
    [companies, query],
  );
  const showList = open && query.trim().length > 0;

  function goTo(company: Company) {
    setOpen(false);
    setQuery("");
    setActiveIndex(-1);
    router.push(`/stocks/${company.symbol}`);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      const pick = results[activeIndex] ?? results[0];
      if (pick) {
        event.preventDefault();
        goTo(pick);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  return (
    <div
      className={cn("relative", className)}
      onBlur={() => {
        blurTimer.current = setTimeout(() => setOpen(false), 120);
      }}
      onFocus={() => {
        if (blurTimer.current) clearTimeout(blurTimer.current);
      }}
    >
      <div className="relative">
        <Search
          className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2"
          aria-hidden
        />
        <input
          autoFocus={autoFocus}
          type="text"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={
            activeIndex >= 0 ? optionId(activeIndex) : undefined
          }
          placeholder="Search a company or ticker (e.g. Reliance, INFY)"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className="border-border bg-card focus:border-primary focus:ring-primary/30 h-14 w-full rounded-xl border pr-4 pl-12 text-base outline-none focus:ring-4"
        />
      </div>

      {showList && (
        <ul
          id={listboxId}
          role="listbox"
          className="border-border bg-card absolute z-20 mt-2 w-full overflow-hidden rounded-xl border shadow-lg"
        >
          {results.length === 0 && (
            <li className="text-muted-foreground px-4 py-3 text-sm">
              No companies match {`"${query.trim()}"`}.
            </li>
          )}
          {results.map((company, index) => (
            <li
              key={company.symbol}
              id={optionId(index)}
              role="option"
              aria-selected={index === activeIndex}
              onMouseDown={(event) => event.preventDefault()}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => goTo(company)}
              className={cn(
                "flex cursor-pointer items-center justify-between gap-4 px-4 py-3",
                index === activeIndex && "bg-accent",
              )}
            >
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">
                  {highlight(company.name, query)}
                </span>
                <span className="text-muted-foreground block truncate text-xs">
                  {company.sector}
                </span>
              </span>
              <span className="text-muted-foreground font-mono text-xs">
                {highlight(company.symbol, query)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Bold the portion of `text` that matches the trimmed query. */
function highlight(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-foreground font-semibold">
        {text.slice(idx, idx + q.length)}
      </span>
      {text.slice(idx + q.length)}
    </>
  );
}
