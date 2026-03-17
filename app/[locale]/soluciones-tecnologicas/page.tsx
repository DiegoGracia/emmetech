import { getLocale } from "next-intl/server";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import MidCTA from "@/components/sections/MidCTA";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluciones Tecnológicas — Emmetech",
  description:
    "Construimos sistemas digitales que hacen operar y crecer a tu empresa. Desarrollo web, e-commerce, software a medida, integraciones y automatización con propósito de negocio.",
};

const SERVICES = [
  {
    name: "Desarrollo Web Corporativo",
    desc: "Sitios rápidos, seguros y conectados a tus datos de negocio. Arquitectura que soporta crecimiento.",
    tag: "Web",
  },
  {
    name: "E-commerce & Plataformas de Venta",
    desc: "Tiendas y canales digitales diseñados para convertir. Optimizados para experiencia de compra y conversión.",
    tag: "E-commerce",
  },
  {
    name: "Software a Medida",
    desc: "Aplicaciones y sistemas internos construidos para tu operación específica. Sin plantillas, sin atajos.",
    tag: "Software",
  },
  {
    name: "Integraciones & APIs",
    desc: "Conectamos tus herramientas: ERP, CRM, pagos, logística y cualquier sistema que ya uses.",
    tag: "Integraciones",
  },
  {
    name: "Automatización de Procesos",
    desc: "Eliminamos trabajo manual repetitivo con flujos inteligentes. Tu equipo enfocado en lo que importa.",
    tag: "Automatización",
  },
  {
    name: "Arquitectura Digital",
    desc: "Diseño de la infraestructura tecnológica para escalar sin fricciones. Planeamos antes de construir.",
    tag: "Arquitectura",
  },
  {
    name: "Seguridad y Performance",
    desc: "Plataformas rápidas, protegidas y confiables. Auditorías, optimizaciones y monitoreo continuo.",
    tag: "Seguridad",
  },
];

const PROCESS = [
  { num: "01", name: "Diagnóstico",  desc: "Entendemos tu negocio, no solo el proyecto" },
  { num: "02", name: "Arquitectura", desc: "Diseñamos la solución antes de escribir código" },
  { num: "03", name: "Desarrollo",   desc: "Metodología ágil con entregas parciales verificables" },
  { num: "04", name: "Integración",  desc: "Conectamos con tus sistemas actuales" },
  { num: "05", name: "Lanzamiento",  desc: "Entrega, testing y acompañamiento post-lanzamiento" },
];

const STATS = [
  { value: "+40", unit: "proyectos",   desc: "entregados en LATAM" },
  { value: "3x",  unit: "más rápido", desc: "tiempo de carga promedio en sitios rediseñados" },
  { value: "100%", unit: "custom",    desc: "sin plantillas, sin atajos" },
];

export default async function TechServicesPage() {
  const locale = await getLocale();

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="section-space relative overflow-hidden py-28 sm:py-36"
        style={{ background: "#04060F" }}
      >
        {/* Hex pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          aria-hidden="true"
        >
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hex-tech-page" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <polygon points="30,2 58,17 58,43 30,58 2,43 2,17" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-tech-page)" />
          </svg>
        </div>
        {/* Cyan radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          aria-hidden="true"
          style={{
            width: "min(800px, 100vw)",
            height: "400px",
            background: "radial-gradient(ellipse at top, rgba(2,132,199,0.14) 0%, transparent 70%)",
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
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#0EA5E9" }}
            />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Soluciones Tecnológicas
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              maxWidth: "780px",
            }}
          >
            Construimos los sistemas digitales que hacen operar y crecer a tu empresa
          </h1>

          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.50)",
              lineHeight: 1.75,
              fontWeight: 400,
              maxWidth: "560px",
            }}
          >
            Desde arquitectura web hasta automatización de procesos — tecnología
            con propósito de negocio.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <MagnetizeButton
              href={`/${locale}/contacto`}
              variant="primary"
              className="px-7 py-3.5 text-base rounded-xl"
            >
              Cotizar Proyecto
            </MagnetizeButton>
            <MagnetizeButton
              href={`/${locale}/contacto`}
              variant="ghost"
              className="px-7 py-3.5 text-base rounded-xl"
            >
              Agendar Diagnóstico
            </MagnetizeButton>
          </div>
        </div>
      </section>

      {/* ── Positioning statement ── */}
      <section
        className="section-space py-20 sm:py-24"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16 items-center">
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
              No somos una agencia web. Somos tu socio tecnológico estratégico.
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
              Diseñamos, construimos y conectamos sistemas digitales que realmente
              impactan tus operaciones y ventas. Cada proyecto parte del negocio,
              no de una plantilla. Antes de escribir una línea de código,
              entendemos a fondo el problema que hay que resolver.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services — Editorial list ── */}
      <section className="section-space py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-0"
            style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Qué construimos
          </p>

          <ul className="mt-0 divide-y" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            {SERVICES.map((service, i) => (
              <li
                key={i}
                className="group grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-start gap-4 sm:gap-8 py-8"
              >
                {/* Number */}
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

                {/* Content */}
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

      {/* ── Process ── */}
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
            Cómo trabajamos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {PROCESS.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector */}
                {i < PROCESS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-4 left-[calc(100%_+_0px)] w-full h-px pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(14,165,233,0.25), transparent)",
                    }}
                    aria-hidden="true"
                  />
                )}

                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.7rem",
                    color: "#0EA5E9",
                    letterSpacing: "0.10em",
                    fontWeight: 600,
                  }}
                >
                  {step.num}
                </span>

                <h3
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.name}
                </h3>

                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.38)",
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
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
        headline="¿Qué sistema necesita tu empresa?"
        sub="Cuéntanos tu desafío y te damos un diagnóstico tecnológico sin costo."
        primaryLabel="Cotizar Proyecto"
        secondaryLabel="Agendar Diagnóstico"
      />
      <FinalCTA
        locale={locale}
        headline="La tecnología no es un gasto. Es la infraestructura de tu crecimiento."
        cta="Hablar con un Especialista"
      />
    </>
  );
}
