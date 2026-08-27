import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-border bg-muted/40 mt-24 border-t">
      <Container className="py-10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="text-sm font-semibold">{siteConfig.name}</p>
          <nav className="flex items-center gap-4 text-xs">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="text-muted-foreground mt-4 max-w-2xl text-xs leading-relaxed">
          {siteConfig.disclaimerLong}
        </p>
        <p className="text-muted-foreground mt-4 text-xs">
          {"©"} {new Date().getFullYear()} {siteConfig.name}. For education, not
          advice.
        </p>
      </Container>
    </footer>
  );
}
