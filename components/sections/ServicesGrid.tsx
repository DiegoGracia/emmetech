import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">{t("title")}</h2>
          <p className="mt-3 text-lg text-gray-500">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key) => (
            <Card
              key={key}
              className="group border border-gray-200 bg-white transition-all hover:border-teal hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-2xl text-navy group-hover:bg-teal/10 group-hover:text-teal transition-colors">
                  {icons[key]}
                </div>
                <CardTitle className="text-navy">{s(`${key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{s(`${key}.summary`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
            <Link href={`/${locale}/services`}>
              {locale === "en" ? "See All Services →" : "Ver Todos los Servicios →"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
