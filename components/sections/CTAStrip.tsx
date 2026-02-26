import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function CTAStrip() {
  const t = useTranslations("home.cta_strip");
  const locale = useLocale();

  return (
    <section className="section-space py-20 relative">
      {/* Ambient teal glow behind the CTA */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(45,122,132,0.10) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("title")}</h2>
        <p className="mt-4 text-lg text-white/65">{t("subtitle")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={`/${locale}/contact`}
            className="btn-teal-glow rounded-lg px-8 py-3 text-base font-semibold"
          >
            {t("cta")}
          </Link>
          <a
            href="https://wa.me/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-glass rounded-lg px-8 py-3 text-base font-semibold"
          >
            {locale === "en" ? "Chat on WhatsApp" : "Chatear por WhatsApp"}
          </a>
        </div>
      </div>
    </section>
  );
}
