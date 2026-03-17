const OUTCOMES = [
  "Reemplazamos el caos de hojas de cálculo por claridad en tiempo real",
  "Construimos sistemas que operan sin ti",
  "Convertimos tu web en una herramienta de ventas",
  "Diseñamos el backbone tecnológico para escalar",
  "Modelamos tu crecimiento financiero a 5 años",
  "Institucionalizamos lo que hoy depende del fundador",
];

export default function OutcomesSection() {
  return (
    <section className="section-space py-24 sm:py-32" style={{ background: "#04060F" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="flex items-end justify-between mb-0 gap-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest shrink-0"
            style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Lo que construimos juntos
          </p>
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)", maxWidth: "60%" }} />
        </div>

        <ul
          className="mt-0 divide-y"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {OUTCOMES.map((outcome, i) => (
            <li
              key={i}
              className="group flex items-center gap-6 py-7"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <span
                className="shrink-0 tabular-nums"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(14,165,233,0.35)",
                  letterSpacing: "0.08em",
                  width: "28px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span
                style={{
                  color: "rgba(14,165,233,0.45)",
                  fontSize: "1.1rem",
                  lineHeight: 1,
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                →
              </span>

              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: "rgba(255,255,255,0.70)",
                  letterSpacing: "-0.02em",
                }}
              >
                {outcome}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
