import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-10 border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="text-muted-foreground flex items-center gap-6 text-sm">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
