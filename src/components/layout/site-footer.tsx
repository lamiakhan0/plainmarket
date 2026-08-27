import { siteConfig } from "@/config/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-border bg-muted/40 mt-24 border-t">
      <Container className="py-10">
        <p className="text-sm font-semibold">{siteConfig.name}</p>
        <p className="text-muted-foreground mt-2 max-w-2xl text-xs leading-relaxed">
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
