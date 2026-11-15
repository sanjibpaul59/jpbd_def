import type { MetadataRoute } from "next";
import { siteUrl } from "@/src/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-11-13"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/`,
          ja: `${siteUrl}/ja`,
        },
      },
    },
    {
      url: `${siteUrl}/ja`,
      lastModified: new Date("2026-11-13"),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${siteUrl}/`,
          ja: `${siteUrl}/ja`,
        },
      },
    },
  ];
}
