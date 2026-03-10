import Link from "next/link";
import { useLocale } from "next-intl";
import CTAStrip from "@/components/sections/CTAStrip";

// ─── Data Types ──────────────────────────────────────────────────────────────

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

interface CatalogueItem {
  name: string;
  nameEs: string;
  delivery: string;
  deliveryEs: string;
  eaa: string;
}

interface CatalogueCategory {
  label: string;
  labelEs: string;
  items: CatalogueItem[];
}

// ─── Package Tiers ───────────────────────────────────────────────────────────

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
      "Basic SEO foundation + GA4",
      "30-day post-launch support",
    ],
    featuresEs: [
      "Sitio web responsive de 5 páginas",
      "CMS (WordPress / Sanity)",
      "SEO base + GA4",
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
      "CRM, payments & analytics integrations",
      "Technical SEO audit + implementation",
      "60-day support + 1 revision round",
    ],
    featuresEs: [
      "Hasta 12 páginas, diseño personalizado",
      "Integraciones CRM, pagos y analítica",
      "Auditoría SEO técnico + implementación",
      "60 días de soporte + 1 ronda de revisión",
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
      "Up to 20 pages or full web application",
      "Custom APIs & authentication flows",
      "Full SEO strategy + 3-month roadmap",
      "90-day support + training + docs",
    ],
    featuresEs: [
      "Hasta 20 páginas o aplicación web completa",
      "APIs personalizadas + flujos de autenticación",
      "Estrategia SEO completa + hoja de ruta 3 meses",
      "90 días de soporte + formación + documentación",
    ],
    highlight: false,
  },
];

// ─── Service Catalogue ───────────────────────────────────────────────────────

const catalogue: CatalogueCategory[] = [
  {
    label: "Website & Web Development",
    labelEs: "Sitios Web y Desarrollo",
    items: [
      {
        name: "Starter Website (5 pages)",
        nameEs: "Sitio Web Starter (5 páginas)",
        delivery: "10–14 days",
        deliveryEs: "10–14 días",
        eaa: "WCAG AA",
      },
      {
        name: "Professional Website (12 pages)",
        nameEs: "Sitio Web Profesional (12 páginas)",
        delivery: "18–21 days",
        deliveryEs: "18–21 días",
        eaa: "WCAG AA + EN 301 549",
      },
      {
        name: "Enterprise Website / Web App",
        nameEs: "Sitio Empresarial / App Web",
        delivery: "4–6 weeks",
        deliveryEs: "4–6 semanas",
        eaa: "Full EN 301 549 + VPAT",
      },
      {
        name: "Campaign Landing Page",
        nameEs: "Landing Page de Campaña",
        delivery: "5–7 days",
        deliveryEs: "5–7 días",
        eaa: "WCAG AA",
      },
      {
        name: "Design System",
        nameEs: "Sistema de Diseño",
        delivery: "4–6 weeks",
        deliveryEs: "4–6 semanas",
        eaa: "WCAG AA",
      },
      {
        name: "SaaS Web Application",
        nameEs: "Aplicación Web SaaS",
        delivery: "6–12 weeks",
        deliveryEs: "6–12 semanas",
        eaa: "Full EN 301 549",
      },
    ],
  },
  {
    label: "Accessibility & EAA Compliance",
    labelEs: "Accesibilidad y Cumplimiento EAA",
    items: [
      {
        name: "WCAG 2.1 AA / EN 301 549 Audit",
        nameEs: "Auditoría WCAG 2.1 AA / EN 301 549",
        delivery: "1–2 weeks",
        deliveryEs: "1–2 semanas",
        eaa: "Core service",
      },
      {
        name: "Accessibility Remediation",
        nameEs: "Remediación de Accesibilidad",
        delivery: "2–4 weeks",
        deliveryEs: "2–4 semanas",
        eaa: "Core service",
      },
      {
        name: "Accessibility Monitoring Retainer",
        nameEs: "Monitoreo de Accesibilidad (Retainer)",
        delivery: "Ongoing",
        deliveryEs: "Continuo",
        eaa: "Core service",
      },
    ],
  },
  {
    label: "Performance & Digital Marketing",
    labelEs: "Rendimiento y Marketing Digital",
    items: [
      {
        name: "Performance Optimization (Core Web Vitals)",
        nameEs: "Optimización de Rendimiento (Core Web Vitals)",
        delivery: "1–2 weeks",
        deliveryEs: "1–2 semanas",
        eaa: "Included",
      },
      {
        name: "Technical SEO Package",
        nameEs: "Paquete SEO Técnico",
        delivery: "Ongoing",
        deliveryEs: "Continuo",
        eaa: "Included",
      },
      {
        name: "Digital Marketing Strategy",
        nameEs: "Estrategia de Marketing Digital",
        delivery: "1–2 weeks",
        deliveryEs: "1–2 semanas",
        eaa: "—",
      },
    ],
  },
  {
    label: "Business & Finance",
    labelEs: "Negocio y Finanzas",
    items: [
      {
        name: "Virtual CFO Retainer",
        nameEs: "Retainer CFO Virtual",
        delivery: "Ongoing",
        deliveryEs: "Continuo",
        eaa: "—",
      },
      {
        name: "Business Plan + Financial Model",
        nameEs: "Plan de Negocio + Modelo Financiero",
        delivery: "2–3 weeks",
        deliveryEs: "2–3 semanas",
        eaa: "—",
      },
      {
        name: "ERP Implementation (QuickBooks / Odoo)",
        nameEs: "Implementación ERP (QuickBooks / Odoo)",
        delivery: "2–4 weeks",
        deliveryEs: "2–4 semanas",
        eaa: "—",
      },
    ],
  },
  {
    label: "Ongoing Support",
    labelEs: "Soporte Continuo",
    items: [
      {
        name: "Monthly Maintenance (4 hrs/month)",
        nameEs: "Mantenimiento Mensual (4 hrs/mes)",
        delivery: "Ongoing",
        deliveryEs: "Continuo",
        eaa: "WCAG AA",
      },
    ],
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const locale = useLocale();
  const isEs = locale === "es";

  return (
    <>
      {/* ── Hero ── */}
      <section className="section-space py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold sm:text-5xl">
              {isEs ? "Nuestros Servicios" : "Our Services"}
            </h1>
            <p className="mt-4 text-xl text-white/60 max-w-2xl">
              {isEs
                ? "Soluciones digitales de nivel empresarial, con cumplimiento EAA y bajo estándares europeos."
                : "Enterprise-grade digital solutions, EAA-compliant and built to European standards."}
            </p>
            {/* EAA compliance badges */}
            <div className="mt-5 flex flex-wrap gap-3">
              {(["WCAG 2.1 AA", "EN 301 549", "VPAT / ACR"] as const).map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-teal-glow/25 bg-teal-glow/[0.07] px-3 py-1 text-xs font-medium teal-glow"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Package Tiers ── */}
      <section className="section-space pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            {isEs ? "Paquetes de Sitio Web" : "Website Packages"}
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`glass rounded-2xl p-7 flex flex-col relative transition-all ${
                  pkg.highlight
                    ? "border border-teal-glow/30 shadow-[0_0_32px_rgba(75,124,243,0.14)]"
                    : "border-white/10 hover:border-teal-glow/30 hover:shadow-[0_0_32px_rgba(75,124,243,0.14)]"
                }`}
              >
                {pkg.tag && (
                  <span className="absolute -top-3 left-6 rounded-full bg-teal-glow/10 border border-teal-glow/25 px-3 py-0.5 text-xs font-semibold teal-glow">
                    {isEs ? pkg.tagEs : pkg.tag}
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-widest text-white/45">
                  {isEs ? pkg.nameEs : pkg.name}
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs">
                  <span className="text-white/45">⏱ {isEs ? pkg.deliveryEs : pkg.delivery}</span>
                  <span className="teal-glow font-medium">✓ {pkg.eaa}</span>
                </div>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {(isEs ? pkg.featuresEs : pkg.features).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="mt-0.5 teal-glow/50 shrink-0">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/contact`}
                  className="mt-7 btn-teal-glow rounded-lg py-2.5 text-sm font-semibold text-center block"
                >
                  {isEs ? "Solicitar Presupuesto" : "Get a Quote"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── New Company Bundle ── */}
      <section className="section-space pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl border border-teal-glow/20 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex-1">
              <span className="inline-block rounded-full bg-teal-glow/10 border border-teal-glow/20 px-3 py-0.5 text-xs font-semibold teal-glow mb-3">
                {isEs ? "Ideal para e-Residents" : "Best for e-Residents"}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {isEs ? "Pack Empresa Nueva" : "New Company Bundle"}
              </h3>
              <p className="mt-2 text-white/60 text-sm max-w-xl leading-relaxed">
                {isEs
                  ? "Starter Website + Plan de Negocio + Implementación ERP. Precio fijo único vs. €8,500+ por separado. Ahorra 60%, elimina la coordinación multi-proveedor e incluye cumplimiento WCAG AA."
                  : "Starter Website + Business Plan + ERP Setup. One fixed price vs. €8,500+ à la carte. Saves 60%, eliminates multi-vendor coordination, and includes WCAG AA compliance."}
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs">
                <span className="text-white/40">✓ {isEs ? "Precio único" : "Single fixed price"}</span>
                <span className="text-white/40">✓ WCAG AA</span>
                <span className="text-white/40">✓ {isEs ? "Un solo proveedor" : "One vendor"}</span>
              </div>
            </div>
            <div className="text-left sm:text-right flex-shrink-0">
              <Link
                href={`/${locale}/contact`}
                className="btn-teal-glow inline-block rounded-lg px-7 py-2.5 text-sm font-semibold"
              >
                {isEs ? "Solicitar Presupuesto" : "Get a Quote"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Service Catalogue ── */}
      <section className="section-space pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-12">
            {isEs ? "Catálogo Completo de Servicios" : "Full Service Catalogue"}
          </h2>
          <div className="space-y-12">
            {catalogue.map((cat) => (
              <div key={cat.label}>
                <h3 className="text-xs font-semibold uppercase tracking-widest teal-glow/60 mb-5 pb-3 border-b border-white/[0.06]">
                  {isEs ? cat.labelEs : cat.label}
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="glass rounded-xl p-5 flex flex-col gap-3 border-white/[0.06] hover:border-teal-glow/30 hover:shadow-[0_0_24px_rgba(75,124,243,0.12)] transition-all"
                    >
                      <p className="font-medium text-white text-sm leading-snug">
                        {isEs ? item.nameEs : item.name}
                      </p>
                      <div className="mt-auto flex items-end justify-between gap-2">
                        <p className="text-xs text-white/40">
                          ⏱ {isEs ? item.deliveryEs : item.delivery}
                        </p>
                        {item.eaa !== "—" && (
                          <span className="text-xs teal-glow/65 font-medium text-right leading-tight">
                            ✓ {item.eaa}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
