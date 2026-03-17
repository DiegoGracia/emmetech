import { getLocale } from "next-intl/server";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import MidCTA from "@/components/sections/MidCTA";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluciones Financieras — Emmetech",
  description:
    "Dirección financiera de alto nivel y sistemas operativos para empresas en LATAM. CFO Fraccional, dashboards de KPIs, modelos a 5 años e institucionalización.",
};

const SERVICES = [
  {
    name: "CFO Fraccional",
    desc: "Dirección financiera de alto nivel sin contratar un director full-time. Toma de decisiones con datos, no corazonadas.",
    tag: "Dirección",
  },
  {
    name: "Control de Flujo de Caja",
    desc: "Visibilidad real del efectivo: entradas, salidas, proyecciones y alertas. Sin sorpresas.",
    tag: "Cash Flow",
  },
  {
    name: "Dashboards de KPIs Financieros",
    desc: "Indicadores clave en tiempo real, conectados a tu operación. Tu negocio visible de un vistazo.",
    tag: "Analytics",
  },
  {
    name: "Modelo Financiero a 5 Años",
    desc: "Proyecciones, escenarios y planificación para crecer con estructura. La hoja de ruta de tu crecimiento.",
    tag: "Estrategia",
  },
  {
    name: "Implementación de ERP Financiero",
    desc: "Selección, configuración e implementación de sistemas ERP adaptados a tu negocio. Sin sobredimensionamiento.",
    tag: "ERP",
  },
  {
    name: "Institucionalización Operativa",
    desc: "Diseño de procesos, políticas y estructura organizacional para escalar sin depender del fundador.",
    tag: "Operaciones",
  },
  {
    name: "Plan de Negocios & Fundraising",
    desc: "Documentación estratégica para socios, inversores o expansión. Respaldada por modelos financieros sólidos.",
    tag: "Planeación",
  },
];

const BEFORE_AFTER = [
  ["Decisiones por intuición",              "Decisiones por datos"],
  ["Hojas de cálculo desconectadas",        "Dashboard en tiempo real"],
  ["Sin saber cuánto gana el negocio",      "P&L claro y actualizado"],
  ["Dependencia total del fundador",         "Procesos y sistemas autónomos"],
  ["Sin proyección de crecimiento",          "Modelo financiero a 5 años"],
];

const STATS = [
  { value: "+15",   unit: "empresas",  desc: "con CFO Fraccional activo en LATAM" },
  { value: "$500M", unit: "MXN+",      desc: "en flujos financieros modelados" },
  { value: "5",     unit: "años",      desc: "de proyecciones promedio entregadas" },
];

const CFO_BULLETS = [
  "Rentabilidad visible",
  "Proyecciones actualizadas",
  "Decisiones con respaldo financiero",
  "Reportes para socios e inversores",
];

export default async function FinancialServicesPage() {
  const locale = await getLocale();

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="section-space relative overflow-hidden py-28 sm:py-36"
        style={{ background: "#04060F" }}
      >
        {/* Horizontal rule lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(14,165,233,1) 0px, rgba(14,165,233,1) 1px, transparent 1px, transparent 48px)",
          }}
        />
        {/* Right cyan glow */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(2,132,199,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8"
            style={{
              borderColor: "rgba(14,165,233,0.28)",
              background: "rgba(14,165,233,0.07)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#0EA5E9" }} />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Soluciones Financieras
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              maxWidth: "760px",
            }}
          >
            Control total de tus finanzas, procesos y crecimiento
          </h1>

          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.50)",
              lineHeight: 1.75,
              fontWeight: 400,
              maxWidth: "540px",
            }}
          >
            Dirección financiera de alto nivel + sistemas operativos que
            sustituyen el caos por estructura real.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <MagnetizeButton
              href={`/${locale}/contacto`}
              variant="primary"
              className="px-7 py-3.5 text-base rounded-xl"
            >
              Agendar Diagnóstico
            </MagnetizeButton>
            <MagnetizeButton
              href={`/${locale}/contacto`}
              variant="ghost"
              className="px-7 py-3.5 text-base rounded-xl"
            >
              Solicitar Consultoría
            </MagnetizeButton>
          </div>
        </div>
      </section>

      {/* ── Core Problem ── */}
      <section
        className="section-space py-20 sm:py-24"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16 items-center">
            <h2
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
              }}
            >
              ¿Tu empresa crece, pero no sabes exactamente si estás ganando o
              perdiendo dinero?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.48)",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              La mayoría de las empresas en expansión operan con intuición.
              Nosotros instalamos la visibilidad y los sistemas que te permiten
              tomar decisiones con datos — no con suposiciones. El resultado:
              menos riesgo, más control, y un camino claro hacia el crecimiento.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-space py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-0"
            style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Qué hacemos por tu empresa
          </p>

          <ul className="mt-0 divide-y" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            {SERVICES.map((service, i) => (
              <li
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-start gap-4 sm:gap-8 py-8"
              >
                <span
                  className="shrink-0 tabular-nums"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.7rem",
                    color: "rgba(14,165,233,0.35)",
                    letterSpacing: "0.08em",
                    paddingTop: "4px",
                    minWidth: "28px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      lineHeight: 1.3,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.65,
                      fontWeight: 400,
                    }}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* Tag — hidden on mobile to avoid orphaned row */}
                <span
                  className="hidden sm:inline-block shrink-0 self-start"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "rgba(14,165,233,0.65)",
                    background: "rgba(14,165,233,0.07)",
                    border: "1px solid rgba(14,165,233,0.18)",
                    borderRadius: "999px",
                    padding: "3px 10px",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {service.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Before / After Transformation ── */}
      <section
        className="section-space py-20 sm:py-24"
        style={{
          background: "#070D1A",
          borderTop: "1px solid rgba(14,165,233,0.12)",
          borderBottom: "1px solid rgba(14,165,233,0.12)",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-12"
            style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
          >
            La transformación
          </p>

          {/* Column headers — hidden on mobile, shown sm+ */}
          <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] gap-4 mb-4">
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.28)",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
              }}
            >
              Antes
            </span>
            <span />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "rgba(14,165,233,0.65)",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
              }}
            >
              Después
            </span>
          </div>

          <div
            className="divide-y"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {BEFORE_AFTER.map(([before, after], i) => (
              <div key={i} className="py-5">
                {/* Desktop: 3-column side-by-side */}
                <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                      color: "rgba(255,255,255,0.35)",
                      lineHeight: 1.4,
                      fontWeight: 400,
                      textDecoration: "line-through",
                      textDecorationColor: "rgba(255,255,255,0.15)",
                    }}
                  >
                    {before}
                  </span>
                  <span style={{ color: "rgba(14,165,233,0.45)", fontSize: "1rem", textAlign: "center" }}>→</span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                      color: "rgba(255,255,255,0.80)",
                      lineHeight: 1.4,
                      fontWeight: 500,
                    }}
                  >
                    {after}
                  </span>
                </div>
                {/* Mobile: stacked */}
                <div className="sm:hidden flex flex-col gap-1.5">
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.35)",
                      lineHeight: 1.5,
                      fontWeight: 400,
                      textDecoration: "line-through",
                      textDecorationColor: "rgba(255,255,255,0.15)",
                    }}
                  >
                    {before}
                  </span>
                  <span style={{ color: "rgba(14,165,233,0.45)", fontSize: "0.8rem" }}>↓</span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.80)",
                      lineHeight: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    {after}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CFO Fraccional deep dive ── */}
      <section
        className="section-space py-20 sm:py-28"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16 items-start">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
              >
                CFO Fraccional
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                }}
              >
                Un Director Financiero de alto nivel. Sin el costo de contratarlo
                de tiempo completo.
              </h2>
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.48)",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                Accedes a experiencia estratégica real: análisis financiero,
                control presupuestal, reporting, gestión de liquidez y liderazgo
                en decisiones críticas — cuando lo necesitas, al costo que tiene
                sentido para tu empresa.
              </p>
            </div>

            <div
              className="rounded-xl p-8"
              style={{
                background: "rgba(14,165,233,0.05)",
                border: "1px solid rgba(14,165,233,0.14)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "rgba(14,165,233,0.70)", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Lo que incluye
              </p>
              <ul className="space-y-4">
                {CFO_BULLETS.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm"
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontFamily: "var(--font-inter), sans-serif",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "#0EA5E9", flexShrink: 0 }}>✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section-space py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="py-8 sm:py-0"
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  paddingLeft: i > 0 ? "clamp(1.5rem, 5vw, 3rem)" : "0",
                  paddingRight: "clamp(1.5rem, 5vw, 3rem)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "#FFFFFF",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#0EA5E9",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.unit}
                </div>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.38)",
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <MidCTA
        locale={locale}
        headline="¿Cuánto le está costando a tu empresa no tener claridad financiera?"
        sub="Agenda un diagnóstico financiero sin costo y descubre el estado real de tu empresa."
        primaryLabel="Agendar Diagnóstico Financiero"
        secondaryLabel="Solicitar Consultoría"
      />
      <FinalCTA
        locale={locale}
        headline="Las empresas que escalan no improvisan sus finanzas — las estructuran."
        cta="Hablar con un Especialista"
      />
    </>
  );
}
