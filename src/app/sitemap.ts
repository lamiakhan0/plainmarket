import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { listCompanies } from "@/lib/data-provider";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();
  const companies = await listCompanies();

  const staticRoutes = ["", "/about", "/companies"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));

  const stockRoutes = companies.map((company) => ({
    url: `${base}/stocks/${company.symbol}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...stockRoutes];
}
