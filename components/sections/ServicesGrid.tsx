import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

interface PackageTier {
  name: string;
  nameEs: string;
  delivery: string;
  deliveryEs: string;
  eaa: string;
  tag?: string;
  tagEs?: string;
  features: string[];
  featuresEs: string[];
  highlight: boolean;
}

const packages: PackageTier[] = [
  {
    name: "Starter",
    nameEs: "Starter",
    delivery: "10–14 days",
    deliveryEs: "10–14 días",
    eaa: "WCAG 2.1 AA",
    features: [
      "5-page responsive website",
      "CMS (WordPress / Sanity)",
      "Basic SEO + GA4",
      "30-day post-launch support",
    ],
    featuresEs: [
      "Sitio responsive de 5 páginas",
      "CMS (WordPress / Sanity)",
      "SEO básico + GA4",
      "30 días de soporte post-lanzamiento",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    nameEs: "Professional",
    delivery: "18–21 days",
    deliveryEs: "18–21 días",
    eaa: "WCAG AA + EN 301 549",
    tag: "Best Value",
    tagEs: "Mejor Valor",
    features: [
      "Up to 12 pages, custom design",
      "CRM & analytics integrations",
      "Technical SEO audit",
      "60-day support + revision round",
    ],
    featuresEs: [
      "Hasta 12 páginas, diseño personalizado",
      "Integraciones CRM y analítica",
      "Auditoría SEO técnico",
      "60 días de soporte + ronda de revisión",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    nameEs: "Enterprise",
    delivery: "4–6 weeks",
    deliveryEs: "4–6 semanas",
    eaa: "Full EN 301 549 + VPAT",
    features: [
      "Up to 20 pages or web application",
      "Custom APIs & authentication",
      "Full SEO strategy + 3-month roadmap",
      "90-day support + training + docs",
    ],
    featuresEs: [
      "Hasta 20 páginas o aplicación web",
      "APIs personalizadas + autenticación",
      "Estrategia SEO + hoja de ruta 3 meses",
      "90 días de soporte + formación + docs",
    ],
    highlight: false,
  },
];

export default function ServicesGrid() {
  const t = useTranslations("home.services_section");
  const locale = useLocale();
  const isEs = locale === "es";

  return (
    <section id="services" className="section-space py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("title")}</h2>
          <p className="mt-3 text-lg text-white/55">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`glass rounded-xl p-6 flex flex-col relative transition-all ${
                pkg.highlight
                  ? "border border-teal-glow/30 shadow-[0_0_24px_rgba(75,124,243,0.12)]"
                  : "border-white/10 hover:border-teal-glow/30 hover:shadow-[0_0_24px_rgba(75,124,243,0.12)] transition-all"
              }`}
            >
              {pkg.tag && (
                <span className="absolute -top-3 left-5 rounded-full bg-teal-glow/10 border border-teal-glow/25 px-3 py-0.5 text-xs font-semibold teal-glow">
                  {isEs ? pkg.tagEs : pkg.tag}
                </span>
              )}

              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {isEs ? pkg.nameEs : pkg.name}
              </p>

              <div className="mt-3 flex flex-wrap gap-3 text-xs">
                <span className="text-white/40">⏱ {isEs ? pkg.deliveryEs : pkg.delivery}</span>
                <span className="teal-glow font-medium">✓ {pkg.eaa}</span>
              </div>

              <ul className="mt-5 flex-1 space-y-2">
                {(isEs ? pkg.featuresEs : pkg.features).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="mt-0.5 text-teal-glow/50 shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href={`/${locale}/contact`}
                  className={
                    pkg.highlight
                      ? "btn-teal-glow rounded-lg w-full py-2.5 text-sm font-semibold text-center block"
                      : "btn-ghost-glass rounded-lg w-full py-2.5 text-sm font-semibold text-center block"
                  }
                >
                  {isEs ? "Solicitar Presupuesto" : "Get a Quote"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/services`}
            className="btn-ghost-glass rounded-lg px-6 py-2.5 text-sm font-semibold"
          >
            {isEs ? "Ver Catálogo Completo →" : "See Full Catalogue →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
