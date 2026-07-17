import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { pilots } from "@/data/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/team",
    "/team/pilots",
    "/team/support",
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

  const pilotRoutes = pilots.map((p) => ({
    url: `${site.url}/team/pilots/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...pilotRoutes];
}
