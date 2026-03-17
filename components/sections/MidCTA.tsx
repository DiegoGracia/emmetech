import { MagnetizeButton } from "@/components/ui/magnetize-button";

interface MidCTAProps {
  locale: string;
  headline?: string;
  sub?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export default function MidCTA({
  locale,
  headline = "¿Listo para operar con estructura?",
  sub = "Agenda un diagnóstico sin costo y descubre exactamente qué necesita tu empresa.",
  primaryLabel = "Agendar Diagnóstico",
  secondaryLabel = "Solicitar Cotización",
  primaryHref,
  secondaryHref,
}: MidCTAProps) {
  return (
    <section
      className="section-space py-24 sm:py-28"
      style={{
        background: "#070D1A",
        borderTop: "1px solid rgba(14,165,233,0.12)",
        borderBottom: "1px solid rgba(14,165,233,0.12)",
      }}
    >
      {/* Top cyan glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: "600px",
          height: "200px",
          background: "radial-gradient(ellipse at top, rgba(2,132,199,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <h2
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
          }}
        >
          {headline}
        </h2>

        <p
          className="mt-4"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          {sub}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <MagnetizeButton
            href={primaryHref || `/${locale}/contacto`}
            variant="primary"
            className="px-8 py-3.5 text-base rounded-xl"
          >
            {primaryLabel}
          </MagnetizeButton>
          <MagnetizeButton
            href={secondaryHref || `/${locale}/contacto`}
            variant="ghost"
            className="px-8 py-3.5 text-base rounded-xl"
          >
            {secondaryLabel}
          </MagnetizeButton>
        </div>
      </div>
    </section>
  );
}
