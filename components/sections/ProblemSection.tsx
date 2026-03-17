interface ProblemContent {
  label: string;
  quote: string;
  heading: string;
  body1_pre: string;
  body1_strong: string;
  body1_post: string;
  body2: string;
}

export default function ProblemSection({ content }: { content: ProblemContent }) {
  return (
    <section className="section-space py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section label */}
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-12"
          style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
        >
          {content.label}
        </p>

        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-20 items-start">

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
              &ldquo;{content.quote}&rdquo;
            </blockquote>

            <div
              className="mt-14 select-none"
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(4rem, 14vw, 10rem)",
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
              {content.heading}
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
              {content.body1_pre}{" "}
              <strong style={{ color: "rgba(255,255,255,0.80)", fontWeight: 600 }}>{content.body1_strong}</strong>
              {content.body1_post}
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
              {content.body2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
