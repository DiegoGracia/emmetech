import type { MetadataRoute } from "next";

const BASE_URL = "https://emxtech.eu";
const LOCALES = ["en", "es", "fr", "de", "et"];
const ROUTES = ["", "/soluciones-tecnologicas", "/soluciones-financieras", "/contact", "/contacto", "/about", "/services"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of ROUTES) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  return entries;
}
