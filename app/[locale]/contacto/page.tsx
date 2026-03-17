"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

type Step = 1 | 2 | 3;

const SIZE_OPTIONS    = ["1–10 empleados", "11–50 empleados", "51–200 empleados", "200+ empleados"];
const REVENUE_OPTIONS = ["< €500K", "€500K–2M", "€2M–10M", "€10M+", "Prefer not to say"];
const SERVICE_OPTIONS = ["Tecnología", "Finanzas", "Ambas", "No estoy seguro"];
const BUDGET_OPTIONS  = ["< €5K", "€5–20K", "€20–100K", "€100K+", "To be defined"];
const START_OPTIONS   = ["Inmediatamente", "En 1–3 meses", "Estoy explorando"];
const CONTACT_OPTIONS = ["Llamada", "WhatsApp", "Email", "Videollamada"];

function SelectChips({
  options,
  selected,
  onChange,
  multi = false,
}: {
  options: string[];
  selected: string | string[];
  onChange: (val: string) => void;
  multi?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isSelected = multi
          ? (selected as string[]).includes(opt)
          : selected === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-all"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: isSelected ? 500 : 400,
              background: isSelected
                ? "rgba(14,165,233,0.15)"
                : "rgba(4,6,15,0.60)",
              border: isSelected
                ? "1px solid rgba(14,165,233,0.55)"
                : "1px solid rgba(255,255,255,0.10)",
              color: isSelected ? "#0EA5E9" : "rgba(255,255,255,0.48)",
              cursor: "pointer",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function ProgressBar({ step }: { step: Step }) {
  const pct = ((step - 1) / 2) * 100;
  return (
    <div
      className="w-full rounded-full overflow-hidden"
      style={{ height: "2px", background: "rgba(14,165,233,0.12)" }}
    >
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, background: "#0EA5E9" }}
      />
    </div>
  );
}

export default function ContactoPage() {
  const locale = useLocale();

  const [step, setStep] = useState<Step>(1);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Step 1
  const [company,  setCompany]  = useState("");
  const [name,     setName]     = useState("");
  const [city,     setCity]     = useState("");
  const [size,     setSize]     = useState("");
  const [revenue,  setRevenue]  = useState("");

  // Step 2
  const [service,  setService]  = useState("");
  const [problem,  setProblem]  = useState("");
  const [budget,   setBudget]   = useState("");

  // Step 3
  const [start,    setStart]    = useState("");
  const [contPref, setContPref] = useState("");
  const [phone,    setPhone]    = useState("");
  const [email,    setEmail]    = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[\d\s\-(). ]{7,20}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPhoneError("");

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (phone && !phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company, name, city, size, revenue,
          service, problem, budget,
          start, contPref, phone, email,
        }),
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(7,13,26,0.70)",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "#FFFFFF",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    fontSize: "0.9rem",
    fontFamily: "var(--font-inter), sans-serif",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: "0.8rem",
    fontWeight: 500,
    color: "rgba(255,255,255,0.45)",
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <>
      {/* ── Page header ── */}
      <section
        className="section-space py-20 sm:py-24"
        style={{
          background: "#04060F",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Top cyan glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            aria-hidden="true"
            style={{
              width: "min(600px, 100vw)",
              height: "300px",
              background: "radial-gradient(ellipse at top, rgba(2,132,199,0.10) 0%, transparent 70%)",
            }}
          />

          <div className="relative">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8"
              style={{
                borderColor: "rgba(14,165,233,0.28)",
                background: "rgba(14,165,233,0.07)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#0EA5E9" }} />
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "#0EA5E9", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Diagnóstico Estratégico
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                maxWidth: "700px",
              }}
            >
              Cuéntanos sobre tu empresa
            </h1>

            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.45)",
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              Respondemos en menos de 24 horas. Tu información es completamente
              confidencial.
            </p>

            {/* Trust chips */}
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                "🔒 Confidencialidad garantizada",
                "⏱ Respuesta en < 24 h",
                "📞 Sin compromiso",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(255,255,255,0.35)",
                    fontWeight: 400,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Trust ── */}
      <section className="section-space py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr] lg:gap-16 items-start">

            {/* ── Left: Form ── */}
            <div>
              {sent ? (
                <div
                  className="rounded-xl p-10 text-center"
                  style={{
                    background: "rgba(14,165,233,0.06)",
                    border: "1px solid rgba(14,165,233,0.20)",
                  }}
                >
                  <div
                    className="text-5xl mb-4"
                    style={{ lineHeight: 1, color: "#0EA5E9" }}
                    aria-hidden="true"
                  >
                    ✓
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Mensaje recibido
                  </h2>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.45)",
                      fontWeight: 400,
                      lineHeight: 1.7,
                    }}
                  >
                    Nos pondremos en contacto en menos de 24 horas. Revisa tu
                    correo electrónico.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Progress */}
                  <div className="mb-8">
                    {/* Mobile: compact step counter */}
                    <div className="flex sm:hidden justify-between items-center mb-3">
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 600,
                          color: "#0EA5E9",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        {["Tu empresa", "Tu necesidad", "Contacto"][step - 1]}
                      </span>
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          color: "rgba(255,255,255,0.28)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {step} / 3
                      </span>
                    </div>
                    {/* Desktop: full label row */}
                    <div className="hidden sm:flex justify-between mb-3">
                      {(["Tu empresa", "Tu necesidad", "Contacto"] as const).map(
                        (label, i) => (
                          <span
                            key={label}
                            className="text-xs"
                            style={{
                              fontFamily: "var(--font-inter), sans-serif",
                              fontWeight: step === i + 1 ? 600 : 400,
                              color:
                                step === i + 1
                                  ? "#0EA5E9"
                                  : step > i + 1
                                  ? "rgba(14,165,233,0.45)"
                                  : "rgba(255,255,255,0.25)",
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
                            }}
                          >
                            {label}
                          </span>
                        )
                      )}
                    </div>
                    <ProgressBar step={step} />
                  </div>

                  {/* ── Step 1 ── */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>Nombre de la empresa</label>
                          <input
                            style={inputStyle}
                            placeholder="Empresa OÜ"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Tu nombre y cargo</label>
                          <input
                            style={inputStyle}
                            placeholder="Juan García, CEO"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label style={labelStyle}>País / Ciudad</label>
                        <input
                          style={inputStyle}
                          placeholder="Tallinn, Estonia"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Tamaño de empresa</label>
                        <SelectChips
                          options={SIZE_OPTIONS}
                          selected={size}
                          onChange={setSize}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Facturación anual aproximada</label>
                        <SelectChips
                          options={REVENUE_OPTIONS}
                          selected={revenue}
                          onChange={setRevenue}
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!company || !name}
                        className="btn-gold-primary rounded-xl w-full py-3.5 text-sm mt-2"
                        style={{ opacity: !company || !name ? 0.45 : 1 }}
                      >
                        Siguiente →
                      </button>
                    </div>
                  )}

                  {/* ── Step 2 ── */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label style={labelStyle}>¿Qué solución te interesa?</label>
                        <SelectChips
                          options={SERVICE_OPTIONS}
                          selected={service}
                          onChange={setService}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>
                          ¿Cuál es tu principal problema o necesidad actual?
                        </label>
                        <textarea
                          style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                          placeholder="Describe brevemente el desafío que enfrentas..."
                          value={problem}
                          onChange={(e) => setProblem(e.target.value)}
                          rows={4}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Presupuesto estimado para este proyecto</label>
                        <SelectChips
                          options={BUDGET_OPTIONS}
                          selected={budget}
                          onChange={setBudget}
                        />
                      </div>

                      <div className="flex gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="btn-ghost-border rounded-xl flex-1 py-3 text-sm"
                        >
                          ← Atrás
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="btn-gold-primary rounded-xl flex-1 py-3 text-sm"
                        >
                          Siguiente →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── Step 3 ── */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <label style={labelStyle}>¿Cuándo quieres empezar?</label>
                        <SelectChips
                          options={START_OPTIONS}
                          selected={start}
                          onChange={setStart}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>¿Cómo prefieres que te contactemos?</label>
                        <SelectChips
                          options={CONTACT_OPTIONS}
                          selected={contPref}
                          onChange={setContPref}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>Teléfono / WhatsApp</label>
                          <input
                            style={{
                              ...inputStyle,
                              borderColor: phoneError ? "rgba(239,68,68,0.6)" : undefined,
                            }}
                            type="tel"
                            placeholder="+372 5192 2133"
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value); setPhoneError(""); }}
                          />
                          {phoneError && (
                            <p style={{ color: "#f87171", fontSize: "0.75rem", marginTop: "0.25rem", fontFamily: "var(--font-inter), sans-serif" }}>
                              {phoneError}
                            </p>
                          )}
                        </div>
                        <div>
                          <label style={labelStyle}>Correo electrónico *</label>
                          <input
                            style={{
                              ...inputStyle,
                              borderColor: emailError ? "rgba(239,68,68,0.6)" : undefined,
                            }}
                            type="email"
                            placeholder="name@company.eu"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                            required
                          />
                          {emailError && (
                            <p style={{ color: "#f87171", fontSize: "0.75rem", marginTop: "0.25rem", fontFamily: "var(--font-inter), sans-serif" }}>
                              {emailError}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="btn-ghost-border rounded-xl py-3 px-6 text-sm"
                        >
                          ← Atrás
                        </button>
                        <button
                          type="submit"
                          disabled={sending || !email}
                          className="btn-gold-primary rounded-xl flex-1 py-3 text-sm"
                          style={{ opacity: !email ? 0.45 : 1 }}
                        >
                          {sending ? "Enviando..." : "Solicitar Cotización"}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* ── Right: Trust + Calendar CTA ── */}
            <div className="space-y-6">

              {/* Why us */}
              <div
                className="rounded-xl p-7"
                style={{
                  background: "rgba(7,13,26,0.60)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-5"
                  style={{ color: "rgba(14,165,233,0.70)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Por qué escribirnos
                </p>
                <ul className="space-y-4">
                  {[
                    "No vendemos proyectos. Diagnosticamos necesidades reales.",
                    "Cada consulta es tratada con confidencialidad absoluta.",
                    "Si no somos la solución correcta para ti, te lo decimos.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm"
                      style={{
                        color: "rgba(255,255,255,0.48)",
                        fontFamily: "var(--font-inter), sans-serif",
                        lineHeight: 1.6,
                        fontWeight: 400,
                      }}
                    >
                      <span style={{ color: "rgba(14,165,233,0.60)", flexShrink: 0, marginTop: "1px" }}>
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Calendar CTA */}
              <div
                className="rounded-xl p-7"
                style={{
                  background: "rgba(14,165,233,0.06)",
                  border: "1px solid rgba(14,165,233,0.18)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  ¿Prefieres hablar directamente?
                </p>
                <p
                  className="mt-2 text-sm"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(255,255,255,0.40)",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Agenda una sesión de diagnóstico de 30 minutos sin costo.
                </p>
                <a
                  href="https://wa.me/37251922133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-primary inline-flex mt-5 rounded-xl px-6 py-3 text-sm w-full justify-center"
                >
                  Agendar Diagnóstico Ahora
                </a>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/37251922133"
                className="btn-ghost-border inline-flex rounded-xl px-6 py-3 text-sm w-full justify-center items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chatear por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
