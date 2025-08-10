import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const host = "https://ton-domaine-ou-vercel-url.app";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
