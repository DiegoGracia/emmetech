import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";

export default function CTAStrip() {
  const t = useTranslations("home.cta_strip");
  const locale = useLocale();

  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("title")}</h2>
        <p className="mt-4 text-lg text-gray-300">{t("subtitle")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-teal hover:bg-teal-dark text-white font-semibold shadow-lg"
          >
            <Link href={`/${locale}/contact`}>{t("cta")}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white"
          >
            <a
              href="https://wa.me/placeholder"
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale === "en" ? "Chat on WhatsApp" : "Chatear por WhatsApp"}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
