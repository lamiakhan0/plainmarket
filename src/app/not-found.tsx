import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground mt-2">
        We couldn{"’"}t find what you were looking for.
      </p>
      <Link
        href="/"
        className="text-primary mt-6 inline-block text-sm hover:underline"
      >
        Go back home
      </Link>
    </Container>
  );
}
