export default function ProblemSection() {
  return (
    <section className="section-space py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section label */}
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-12"
          style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
        >
          El problema que resolvemos
        </p>

        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20 items-start">

          {/* Left — pull quote */}
          <div>
            <blockquote
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.40)",
                fontStyle: "italic",
                fontWeight: 300,
                borderLeft: "2px solid rgba(14,165,233,0.35)",
                paddingLeft: "1.5rem",
              }}
            >
              "El 78% de las empresas en LATAM toman decisiones financieras sin
              visibilidad en tiempo real."
            </blockquote>

            <div
              className="mt-14 select-none"
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(5rem, 14vw, 10rem)",
                fontWeight: 800,
                lineHeight: 1,
                color: "rgba(14,165,233,0.05)",
                letterSpacing: "-0.04em",
              }}
            >
              78%
            </div>
          </div>

          {/* Right — editorial text */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
              }}
            >
              La mayoría de las empresas en crecimiento operan con hojas de
              cálculo, decisiones sin datos y tecnología desconectada.
            </h2>

            <div style={{ height: "2px", width: "40px", background: "#0EA5E9", marginTop: "0.75rem" }} />

            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.50)",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              No es un problema de talento. Es un problema de{" "}
              <strong style={{ color: "rgba(255,255,255,0.80)", fontWeight: 600 }}>estructura</strong>.
              Sin sistemas financieros reales y tecnología conectada a tu negocio,
              escalar se convierte en una carga — no en un logro.
            </p>

            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.38)",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              Las empresas que escalan no lo hacen trabajando más duro — lo hacen
              con mejores sistemas, mayor visibilidad y decisiones basadas en datos
              reales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
