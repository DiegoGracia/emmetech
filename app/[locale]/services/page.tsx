import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">{nav("services")}</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            {locale === "en"
              ? "Everything you need to grow your digital presence and operations."
              : "Todo lo que necesitas para hacer crecer tu presencia digital y operaciones."}
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {serviceKeys.map((key) => (
              <Card
                key={key}
                className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-white text-2xl">
                    {icons[key]}
                  </div>
                  <CardTitle className="text-xl text-navy">
                    {t(`${key}.title`)}
                  </CardTitle>
                  <p className="text-sm font-medium text-teal">{t(`${key}.summary`)}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`${key}.description`)}
                  </p>
                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-navy hover:bg-navy-light text-white"
                    >
                      <Link href={`/${locale}/contact`}>
                        {locale === "en" ? "Get a Quote" : "Solicitar Presupuesto"}
                      </Link>
                    </Button>
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
