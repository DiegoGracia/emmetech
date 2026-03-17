import Link from "next/link";

interface VerticalsContent {
  tech_label: string;
  tech_heading: string;
  tech_body: string;
  tech_items: string[];
  tech_link: string;
  finance_label: string;
  finance_heading: string;
  finance_body: string;
  finance_items: string[];
  finance_link: string;
}

export default function VerticalsSection({ locale, content }: { locale: string; content: VerticalsContent }) {
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
              {content.tech_label}
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
              {content.tech_heading}
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
              {content.tech_body}
            </p>

            <ul className="mt-8 space-y-3">
              {content.tech_items.map((item) => (
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
              {content.tech_link}
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
              {content.finance_label}
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
              {content.finance_heading}
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
              {content.finance_body}
            </p>

            <ul className="mt-8 space-y-3">
              {content.finance_items.map((item) => (
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
              {content.finance_link}
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
