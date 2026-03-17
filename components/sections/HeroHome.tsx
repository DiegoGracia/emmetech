"use client";

import { useLocale } from "next-intl";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { Sparkles } from "@/components/ui/sparkles";
import { GooeyTextMorphing } from "@/components/ui/gooey-text-morphing";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

const MORPHING_TEXTS = [
  "Control financiero real.",
  "Arquitectura digital a medida.",
  "Escalabilidad sin caos.",
];

// Hexagonal SVG pattern — matches live site
function HexPattern() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.035 }}
    >
      <svg width="100%" height="100%">
        <defs>
          <pattern id="hex" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <polygon
              points="30,2 58,17 58,43 30,58 2,43 2,17"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
    </div>
  );
}

export default function HeroHome() {
  const locale = useLocale();

  return (
    <section
      className="section-space relative overflow-hidden"
      style={{ minHeight: "100svh", display: "flex", alignItems: "center" }}
    >
      {/* Pulse beams background */}
      <PulseBeams className="opacity-55" color="#0EA5E9" />

      {/* Hex pattern overlay */}
      <HexPattern />

      {/* Cyan radial glow — top */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% -5%, rgba(2,132,199,0.18) 0%, transparent 65%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, transparent, #04060F)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8 animate-fade-slide-up"
          style={{
            borderColor: "rgba(14,165,233,0.30)",
            background: "rgba(14,165,233,0.07)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#0EA5E9" }} />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Estrategia · Tecnología · Finanzas
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-slide-up delay-100"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            maxWidth: "820px",
            opacity: 0,
          }}
        >
          Tu empresa necesita más que operaciones —{" "}
          <Sparkles count={6} color="#0EA5E9">
            <span style={{ color: "#0EA5E9" }}>necesita sistemas.</span>
          </Sparkles>
        </h1>

        {/* Morphing subheadline */}
        <div
          className="mt-5 animate-fade-slide-up delay-200"
          style={{ opacity: 0 }}
        >
          <p
            className="text-lg sm:text-xl font-medium"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "#0EA5E9",
              letterSpacing: "-0.01em",
            }}
          >
            <GooeyTextMorphing texts={MORPHING_TEXTS} />
          </p>
        </div>

        {/* Body */}
        <p
          className="mt-5 animate-fade-slide-up delay-300"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.75,
            maxWidth: "560px",
            fontWeight: 400,
            opacity: 0,
          }}
        >
          Combinamos dirección financiera de alto nivel con tecnología a medida
          para que tu empresa opere con claridad, crezca con estructura y escale
          sin depender del caos.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap gap-4 justify-center sm:justify-start animate-fade-slide-up delay-400"
          style={{ opacity: 0 }}
        >
          <MagnetizeButton
            href={`/${locale}/contacto`}
            variant="primary"
            className="px-7 py-3.5 text-base rounded-xl"
          >
            Agendar Diagnóstico
          </MagnetizeButton>
          <MagnetizeButton
            href={`/${locale}/soluciones-tecnologicas`}
            variant="ghost"
            className="px-7 py-3.5 text-base rounded-xl"
          >
            Conocer los Servicios
          </MagnetizeButton>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800"
          style={{ opacity: 0 }}
          aria-hidden="true"
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.18)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            scroll
          </span>
          <div
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, rgba(14,165,233,0.40), transparent)" }}
          />
        </div>
      </div>
    </section>
  );
}
