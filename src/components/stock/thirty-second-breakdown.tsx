import { Eye } from "lucide-react";
import type { ThirtySecondBreakdown as Breakdown } from "@/types";

/** The plain-language summary card shown at the top of a stock profile. */
export function ThirtySecondBreakdown({ breakdown }: { breakdown: Breakdown }) {
  const watch = breakdown.thingsToWatch ?? [];

  return (
    <section
      aria-labelledby="breakdown-heading"
      className="border-border bg-card rounded-2xl border p-6 sm:p-8"
    >
      <h2
        id="breakdown-heading"
        className="text-primary text-xs font-semibold tracking-wide uppercase"
      >
        The 30-second breakdown
      </h2>

      <div className="mt-4 space-y-5">
        <div>
          <h3 className="text-sm font-semibold">What it does</h3>
          <p className="text-muted-foreground mt-1 leading-relaxed">
            {breakdown.whatItDoes}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Financial health</h3>
          <p className="text-muted-foreground mt-1 leading-relaxed">
            {breakdown.financialHealth}
          </p>
        </div>
      </div>

      {watch.length > 0 && (
        <div className="border-border mt-6 border-t pt-5">
          <h3 className="flex items-center gap-1.5 text-sm font-semibold">
            <Eye className="text-primary h-4 w-4" aria-hidden />
            Things to watch
          </h3>
          <ul className="text-muted-foreground mt-2 space-y-1.5 leading-relaxed">
            {watch.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span
                  aria-hidden
                  className="bg-primary mt-2.5 block h-1 w-1 shrink-0 rounded-full"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
