import Link from "next/link";

const TECH_ITEMS = [
  "Desarrollo Web Corporativo",
  "E-commerce & Plataformas de Venta",
  "Software a Medida",
  "Integraciones & APIs",
  "Automatización de Procesos",
];

const FINANCE_ITEMS = [
  "CFO Fraccional",
  "Control de Flujo de Caja",
  "Dashboards de KPIs Financieros",
  "Modelo Financiero a 5 Años",
  "Institucionalización Operativa",
];

export default function VerticalsSection({ locale }: { locale: string }) {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.07)" }} />
      </div>

      {/* Two-panel split — both dark, differentiated by surface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[620px]">

        {/* ── Left: Tech Panel ── */}
        <div
          className="relative flex flex-col justify-between px-8 sm:px-14 py-16 sm:py-20"
          style={{ background: "#04060F" }}
        >
          {/* Hex overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025]"
            aria-hidden="true"
          >
            <svg width="100%" height="100%">
              <defs>
                <pattern id="hex-tech" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <polygon points="30,2 58,17 58,43 30,58 2,43 2,17" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex-tech)" />
            </svg>
          </div>

          {/* Cyan border accent — right edge */}
          <div
            className="hidden lg:block absolute top-0 right-0 w-px h-full"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(14,165,233,0.20), transparent)" }}
          />

          <div className="relative">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Soluciones Tecnológicas
            </p>

            <h2
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
                maxWidth: "380px",
              }}
            >
              Sistemas digitales que hacen crecer tu negocio
            </h2>

            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.48)",
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: "400px",
              }}
            >
              No construimos páginas — construimos herramientas de negocio.
              Desarrollo web, e-commerce, software a medida, integraciones y
              automatización con propósito estratégico.
            </p>

            <ul className="mt-8 space-y-3">
              {TECH_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "rgba(255,255,255,0.48)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <span style={{ color: "rgba(14,165,233,0.65)" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-10 flex lg:block justify-center">
            <Link
              href={`/${locale}/soluciones-tecnologicas`}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
              style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif", letterSpacing: "0.01em" }}
            >
              Explorar Tecnología
              <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
            </Link>
          </div>
        </div>

        {/* ── Right: Finance Panel — slightly lighter dark surface ── */}
        <div
          className="relative flex flex-col justify-between px-8 sm:px-14 py-16 sm:py-20"
          style={{ background: "#070D1A" }}
        >
          {/* Cyan corner glow */}
          <div
            className="absolute top-0 right-0 w-32 h-32 lg:w-64 lg:h-64 pointer-events-none"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse at top right, rgba(2,132,199,0.10) 0%, transparent 65%)",
            }}
          />

          <div className="relative">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Soluciones Financieras
            </p>

            <h2
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
                maxWidth: "380px",
              }}
            >
              Control total de tus números y tu futuro
            </h2>

            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.48)",
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: "400px",
              }}
            >
              CFO Fraccional, dashboards de KPIs, modelos financieros a 5 años
              e institucionalización operativa. Tu empresa con visibilidad y
              dirección real.
            </p>

            <ul className="mt-8 space-y-3">
              {FINANCE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "rgba(255,255,255,0.48)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <span style={{ color: "rgba(14,165,233,0.65)" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-10 flex lg:block justify-center">
            <Link
              href={`/${locale}/soluciones-financieras`}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
              style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif", letterSpacing: "0.01em" }}
            >
              Explorar Finanzas
              <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.07)" }} />
      </div>
    </section>
  );
}
