import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";
import { HeaderNav } from "./header-nav";

export function SiteHeader() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-10 border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <HeaderNav items={siteConfig.nav} />
      </Container>
    </header>
  );
}
