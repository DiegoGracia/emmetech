interface Stat {
  value: string;
  unit: string;
  desc: string;
}

interface TrustContent {
  label: string;
  stats: Stat[];
  credentials: string[];
}

export default function TrustSection({ content }: { content: TrustContent }) {
  return (
    <section
      className="section-space py-24 sm:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <p
          className="text-xs font-semibold uppercase tracking-widest mb-16"
          style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
        >
          {content.label}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
          {content.stats.map((stat, i) => (
            <div
              key={i}
              className="py-8 sm:py-0"
              style={{
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                paddingLeft:  i > 0 ? "clamp(1.5rem, 5vw, 3rem)" : "0",
                paddingRight: "clamp(1.5rem, 5vw, 3rem)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "clamp(2.8rem, 7vw, 5rem)",
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
                className="mt-3"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.38)",
                  lineHeight: 1.6,
                  fontWeight: 400,
                  maxWidth: "200px",
                }}
              >
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Credentials */}
        <div
          className="mt-16 pt-14"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.credentials.map((cred) => (
              <div
                key={cred}
                className="flex items-start gap-3"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.42)",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: "rgba(14,165,233,0.60)", flexShrink: 0, marginTop: "2px" }}>✓</span>
                {cred}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
