import { ArrowDown, ArrowRight, ArrowUp, type LucideIcon } from "lucide-react";
import type { GlossaryEntry, Metric, MetricStanding } from "@/types";
import { formatDate } from "@/lib/format";

const STANDING_LABEL: Record<MetricStanding, string> = {
  low: "Below sector norm",
  typical: "Around sector norm",
  high: "Above sector norm",
};

const STANDING_ICON: Record<MetricStanding, LucideIcon> = {
  low: ArrowDown,
  typical: ArrowRight,
  high: ArrowUp,
};

interface MetricsGridProps {
  metrics: Metric[];
  glossary: GlossaryEntry[];
  asOf: string;
}

/** Grid of metric cards, each with an expandable plain-English explanation. */
export function MetricsGrid({ metrics, glossary, asOf }: MetricsGridProps) {
  const byId = new Map(glossary.map((entry) => [entry.id, entry]));

  return (
    <section aria-labelledby="metrics-heading">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2
          id="metrics-heading"
          className="text-primary text-xs font-semibold tracking-wide uppercase"
        >
          Key metrics, explained
        </h2>
        <p className="text-muted-foreground text-xs">
          Figures as of {formatDate(asOf)} · illustrative mock data
        </p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            metric={metric}
            entry={byId.get(metric.id)}
          />
        ))}
      </div>
    </section>
  );
}

function MetricCard({
  metric,
  entry,
}: {
  metric: Metric;
  entry?: GlossaryEntry;
}) {
  const Icon = metric.standing ? STANDING_ICON[metric.standing] : null;

  return (
    <div className="border-border bg-card rounded-xl border p-4">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-muted-foreground text-sm">{metric.label}</span>
        <span className="text-lg font-semibold">{metric.value}</span>
      </div>

      {metric.standing && (
        <span className="text-muted-foreground bg-muted mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs">
          {Icon && <Icon className="h-3 w-3" aria-hidden />}
          {STANDING_LABEL[metric.standing]}
        </span>
      )}

      {entry && (
        <details className="group mt-3">
          <summary className="text-primary flex cursor-pointer list-none items-center gap-1 text-xs font-medium select-none [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">What this means</span>
            <span className="hidden group-open:inline">Hide explanation</span>
          </summary>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {entry.plainEnglish}
          </p>
          {entry.analogy && (
            <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed italic">
              {entry.analogy}
            </p>
          )}
        </details>
      )}
    </div>
  );
}
