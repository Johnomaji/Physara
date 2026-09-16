import type { MetadataRoute } from "next";
import { navLinks, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    ...navLinks.map((l) => ({
      url: `${site.url}${l.href}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
