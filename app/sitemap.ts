import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const host = "https://ton-domaine-ou-vercel-url.app";
  return [
    { url: `${host}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${host}/#about`, changeFrequency: "monthly" },
    { url: `${host}/#roadmap`, changeFrequency: "monthly" },
    { url: `${host}/#download`, changeFrequency: "monthly" },
  ];
}
