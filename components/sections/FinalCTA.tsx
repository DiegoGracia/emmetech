import Link from "next/link";

interface FinalCTAProps {
  locale: string;
  headline?: string;
  cta?: string;
}

export default function FinalCTA({
  locale,
  headline = "Tu empresa ya tiene el potencial. Nosotros ponemos los sistemas.",
  cta = "Hablar con un Especialista",
}: FinalCTAProps) {
  return (
    <section className="section-space py-20 sm:py-24" style={{ background: "#02040B" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
            fontWeight: 600,
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.65)",
            letterSpacing: "-0.02em",
            maxWidth: "640px",
          }}
        >
          {headline}
        </p>

        <Link
          href={`/${locale}/contacto`}
          className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
          style={{
            color: "#0EA5E9",
            fontFamily: "var(--font-inter), sans-serif",
            letterSpacing: "0.01em",
            whiteSpace: "nowrap",
          }}
        >
          {cta}
          <span
            className="transition-transform group-hover:translate-x-1.5 inline-block"
            style={{ fontSize: "1.1rem" }}
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
