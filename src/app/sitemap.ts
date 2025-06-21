import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shivender.pro";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
  ];
}
