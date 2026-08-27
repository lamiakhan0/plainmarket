import type { Company } from "@/types";

/**
 * Mock Nifty 50 companies. Populated in a later step.
 * This is the source of truth until `src/lib/data-provider.ts` is wired
 * to a real database / API. Read it only through the data provider.
 */
export const companies: Company[] = [];
