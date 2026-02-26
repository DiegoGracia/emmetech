import { useTranslations } from "next-intl";
import MissionVision from "@/components/sections/MissionVision";
import CTAStrip from "@/components/sections/CTAStrip";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">{t("title")}</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* CTA */}
      <CTAStrip />
    </>
  );
}
