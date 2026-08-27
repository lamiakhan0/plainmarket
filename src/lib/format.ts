/**
 * Display helpers for Indian-market numbers and dates.
 * Pure functions — safe on both server and client.
 */

/**
 * Format a rupee amount. With `compact`, large values use the Indian
 * crore / lakh scale (e.g. "₹1,240.00 Cr"); otherwise the full currency form.
 */
export function formatINR(
  amount: number,
  opts: { compact?: boolean } = {},
): string {
  if (opts.compact) {
    const abs = Math.abs(amount);
    if (abs >= 1e7) return `₹${(amount / 1e7).toFixed(2)} Cr`;
    if (abs >= 1e5) return `₹${(amount / 1e5).toFixed(2)} L`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(amount);
}

/** Format a ratio or plain number with a fixed number of decimals. */
export function formatNumber(value: number, decimals = 2): string {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/** Format a fraction (0.123) as a percentage string ("12.3%"). */
export function formatPercent(fraction: number, decimals = 1): string {
  return `${(fraction * 100).toFixed(decimals)}%`;
}

/** Coarse relative date, e.g. "yesterday", "5 days ago", "2 months ago". */
export function formatRelativeDate(
  iso: string,
  now: Date = new Date(),
): string {
  const days = Math.floor(
    (now.getTime() - new Date(iso).getTime()) / 86_400_000,
  );
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
}
