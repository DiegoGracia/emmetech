import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <section className="section-space overflow-hidden py-24 sm:py-32 text-white">
      {/* Subtle hex grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpolygon points='30,2 58,17 58,43 30,58 2,43 2,17' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-teal/[0.12] teal-glow border border-teal/20 hover:bg-teal/[0.18]">
            {t("tagline")}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg text-white/70 sm:text-xl max-w-2xl">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/contact`}
              className="btn-teal-glow rounded-lg px-7 py-3 text-base font-semibold"
            >
              {t("cta_primary")}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="btn-ghost-glass rounded-lg px-7 py-3 text-base font-semibold"
            >
              {t("cta_secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
