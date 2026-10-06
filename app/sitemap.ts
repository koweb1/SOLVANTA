import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

// Add each new route here as you build the other pages.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
