import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/team",
    "/aircraft",
    "/display",
    "/schedule",
    "/gallery",
    "/sponsors",
    "/media",
    "/contact",
    "/privacy",
    "/legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: (path === "/schedule" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  return staticRoutes;
}
