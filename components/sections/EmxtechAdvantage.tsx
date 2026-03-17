import { useLocale } from "next-intl";

const pillars = [
  {
    icon: "📊",
    title: "We speak both languages",
    titleEs: "Hablamos los dos idiomas",
    body: "Most tech agencies don't understand a P&L. Most financial advisors don't know how to build a scalable API. We do both — so every system we build is designed to generate measurable returns, not just function.",
    bodyEs: "La mayoría de las agencias tech no entienden un estado de resultados. La mayoría de los asesores financieros no saben construir una API escalable. Nosotros hacemos ambas cosas — por eso cada sistema que construimos está diseñado para generar retornos medibles, no solo para funcionar.",
  },
  {
    icon: "🔗",
    title: "No fragmented vendors",
    titleEs: "Sin proveedores fragmentados",
    body: "When your CFO and your dev team are the same team, there are no communication gaps, no finger-pointing, and no misaligned incentives. Strategy and execution move together.",
    bodyEs: "Cuando tu Director Financiero y tu equipo de desarrollo son el mismo equipo, no hay brechas de comunicación, ni culpas cruzadas, ni incentivos desalineados. La estrategia y la ejecución avanzan juntas.",
  },
  {
    icon: "📈",
    title: "Technology that understands profitability",
    titleEs: "Tecnología que entiende de rentabilidad",
    body: "We don't build features — we build revenue engines. Every dashboard, integration, and platform is designed with your unit economics in mind from day one.",
    bodyEs: "No construimos funcionalidades — construimos motores de ingresos. Cada tablero, integración y plataforma está diseñado con tus economías unitarias en mente desde el primer día.",
  },
  {
    icon: "🏛️",
    title: "Institutionalize your business",
    titleEs: "Institucionaliza tu empresa",
    body: "We transform family businesses and growing companies into institutional-grade organizations — structured, scalable, and no longer 100% dependent on you.",
    bodyEs: "Transformamos empresas familiares y negocios en crecimiento en organizaciones institucionales — estructuradas, escalables y que dejan de depender 100% de ti.",
  },
];

export default function EmxtechAdvantage() {
  const locale = useLocale();
  const isEs = locale === "es";

  return (
    <section id="advantage" className="section-space py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest teal-glow mb-2">
            {isEs ? "La Ventaja Emxtech" : "The Emxtech Advantage"}
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {isEs
              ? "¿Por Qué Contratar a un Financiero y a un Ingeniero de Sistemas Juntos?"
              : "Why Hire a CFO and a Systems Engineer Together?"}
          </h2>
          <p className="mt-4 text-lg text-white/60 leading-relaxed">
            {isEs
              ? "Contratar una agencia web y un CFO por separado cuesta más, avanza más lento y genera desalineación. Fusionamos ambas disciplinas en un solo equipo — para que obtengas tecnología que realmente entiende tu modelo de negocio."
              : "Hiring a web agency and a CFO separately costs more, moves slower, and creates misalignment. We fused both disciplines into one team — so you get technology that actually understands your business model."}
          </p>
          <p className="mt-3 text-base font-semibold teal-glow">
            {isEs
              ? "«Construimos tecnología que entiende de rentabilidad.»"
              : "\"We build technology that understands profitability.\""}
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="glass rounded-xl border border-white/10 p-6 hover:border-teal-glow/30 hover:shadow-[0_0_24px_rgba(75,124,243,0.10)] transition-all"
            >
              <div className="mb-3 text-2xl">{p.icon}</div>
              <h3 className="text-base font-semibold text-white">
                {isEs ? p.titleEs : p.title}
              </h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                {isEs ? p.bodyEs : p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Founders callout */}
        <div className="mt-10 glass-strong rounded-2xl border border-teal-glow/20 p-8 flex flex-col sm:flex-row items-start gap-6">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
              {isEs ? "El Equipo Detrás de Emxtech" : "The Team Behind Emxtech"}
            </p>
            <h3 className="text-xl font-bold text-white">Marco &amp; Diego</h3>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              {isEs
                ? "Un CFO Fraccional con experiencia en finanzas institucionales y estrategia corporativa, junto a un Ingeniero de Sistemas Full-Stack especializado en desarrollo de ERPs, arquitectura en la nube y plataformas web. Juntos entregamos lo que ninguna agencia puede — claridad financiera y ejecución técnica bajo un mismo techo."
                : "A Fractional CFO with a background in institutional finance and corporate strategy, paired with a Full-Stack Systems Engineer with expertise in ERP development, cloud architecture, and web platforms. Together, we deliver what no single agency can — financial clarity and technical execution under one roof."}
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-center gap-1 text-center">
            <div className="h-14 w-14 rounded-full bg-teal-glow/10 border border-teal-glow/25 flex items-center justify-center text-2xl">
              🤝
            </div>
            <span className="text-xs text-white/40 mt-1">
              {isEs ? "Finanzas + Tech" : "Finance + Tech"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
