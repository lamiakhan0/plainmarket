import { formatDate } from "@/lib/format";
import type { NewsItem } from "@/types";

/** Recent-news section for a stock profile. Each item says why it matters. */
export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <section aria-labelledby="news-heading">
      <h2
        id="news-heading"
        className="text-primary text-xs font-semibold tracking-wide uppercase"
      >
        Recent news
      </h2>

      {items.length === 0 ? (
        <p className="text-muted-foreground mt-4 text-sm">
          No recent news for this company yet.
        </p>
      ) : (
        <ul className="mt-4 space-y-4">
          {items.map((item) => (
            <li
              key={item.headline}
              className="border-border bg-card rounded-xl border p-4"
            >
              <h3 className="font-medium">{item.headline}</h3>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                {item.summary}
              </p>
              <p className="text-muted-foreground mt-2 text-xs">
                {item.source} · {formatDate(item.publishedAt)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
