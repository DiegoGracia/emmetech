import { useTranslations } from "next-intl";

export default function MissionVision() {
  const t = useTranslations("about");

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Mission */}
          <div className="rounded-2xl bg-navy p-8 text-white">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-teal" />
              <span className="text-sm font-semibold uppercase tracking-wider text-teal-light">
                {t("mission_label")}
              </span>
            </div>
            <p className="text-lg leading-relaxed text-gray-200">{t("mission")}</p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl bg-teal p-8 text-white">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-white/60" />
              <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                {t("vision_label")}
              </span>
            </div>
            <p className="text-lg leading-relaxed text-white/90">{t("vision")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
