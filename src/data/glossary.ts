import type { GlossaryEntry } from "@/types";

/**
 * Plain-English definitions of financial terms. Populated in a later step.
 * Each entry's `id` is referenced by `Metric.id`. Read via the data provider.
 */
export const glossary: GlossaryEntry[] = [];
