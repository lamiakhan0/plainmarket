import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function StockNotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-2xl font-semibold">We don{"’"}t track that ticker</h1>
      <p className="text-muted-foreground mx-auto mt-2 max-w-md leading-relaxed">
        PlainMarket currently covers the 50 companies in the Nifty 50 index. The
        symbol you asked for isn{"’"}t one of them, or the address has a typo.
      </p>
      <Link
        href="/companies"
        className="text-primary mt-6 inline-block text-sm hover:underline"
      >
        Browse all 50 companies
      </Link>
    </Container>
  );
}
