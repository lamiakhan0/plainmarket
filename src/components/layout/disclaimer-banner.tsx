import { siteConfig } from "@/config/site";

/** Thin, always-visible strip reminding users this is education, not advice. */
export function DisclaimerBanner() {
  return (
    <div className="border-border bg-muted/60 border-b">
      <p className="text-muted-foreground mx-auto max-w-5xl px-5 py-2 text-center text-xs sm:px-8">
        {siteConfig.disclaimerShort}
      </p>
    </div>
  );
}
