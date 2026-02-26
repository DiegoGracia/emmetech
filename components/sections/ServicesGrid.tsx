import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const serviceKeys = ["web_dev", "digital_marketing", "it_consulting"] as const;

const icons: Record<string, string> = {
  web_dev: "⬡",
  digital_marketing: "◈",
  it_consulting: "◎",
};

export default function ServicesGrid() {
  const t = useTranslations("home.services_section");
  const s = useTranslations("services");
  const locale = useLocale();

  return (
    <section id="services" className="section-space py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("title")}</h2>
          <p className="mt-3 text-lg text-white/55">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key) => (
            <Card
              key={key}
              className="group glass rounded-xl transition-all hover:teal-glow-border bg-transparent border-white/10"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white/[0.08] text-2xl text-teal-light group-hover:bg-teal/[0.15] transition-colors">
                  {icons[key]}
                </div>
                <CardTitle className="text-white">{s(`${key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/60">{s(`${key}.summary`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/services`}
            className="btn-ghost-glass rounded-lg px-6 py-2.5 text-sm font-semibold"
          >
            {locale === "en" ? "See All Services →" : "Ver Todos los Servicios →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
