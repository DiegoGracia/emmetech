import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAStrip from "@/components/sections/CTAStrip";

const serviceKeys = ["web_dev", "digital_marketing", "it_consulting"] as const;

const icons: Record<string, string> = {
  web_dev: "⬡",
  digital_marketing: "◈",
  it_consulting: "◎",
};

export default function ServicesPage() {
  const t = useTranslations("services");
  const nav = useTranslations("nav");
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="section-space py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">{nav("services")}</h1>
          <p className="mt-4 text-xl text-white/65 max-w-2xl">
            {locale === "en"
              ? "Everything you need to grow your digital presence and operations."
              : "Todo lo que necesitas para hacer crecer tu presencia digital y operaciones."}
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="section-space py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {serviceKeys.map((key) => (
              <Card
                key={key}
                className="glass rounded-xl transition-all hover:teal-glow-border bg-transparent border-white/10"
              >
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal/[0.15] text-teal-light text-2xl">
                    {icons[key]}
                  </div>
                  <CardTitle className="text-xl text-white">
                    {t(`${key}.title`)}
                  </CardTitle>
                  <p className="text-sm font-medium teal-glow">{t(`${key}.summary`)}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 leading-relaxed">
                    {t(`${key}.description`)}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/${locale}/contact`}
                      className="btn-teal-glow w-full rounded-lg py-2.5 text-sm font-semibold"
                    >
                      {locale === "en" ? "Get a Quote" : "Solicitar Presupuesto"}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
