import { getLocale, getTranslations } from "next-intl/server";
import HeroHome from "@/components/sections/HeroHome";
import ProblemSection from "@/components/sections/ProblemSection";
import VerticalsSection from "@/components/sections/VerticalsSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import TrustSection from "@/components/sections/TrustSection";
import MidCTA from "@/components/sections/MidCTA";
import FinalCTA from "@/components/sections/FinalCTA";

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getTranslations("home");

  const problemContent = {
    label:        t("problem.label"),
    quote:        t("problem.quote"),
    heading:      t("problem.heading"),
    body1_pre:    t("problem.body1_pre"),
    body1_strong: t("problem.body1_strong"),
    body1_post:   t("problem.body1_post"),
    body2:        t("problem.body2"),
  };

  const verticalsContent = {
    tech_label:    t("verticals.tech_label"),
    tech_heading:  t("verticals.tech_heading"),
    tech_body:     t("verticals.tech_body"),
    tech_items:    t.raw("verticals.tech_items") as string[],
    tech_link:     t("verticals.tech_link"),
    finance_label:   t("verticals.finance_label"),
    finance_heading: t("verticals.finance_heading"),
    finance_body:    t("verticals.finance_body"),
    finance_items:   t.raw("verticals.finance_items") as string[],
    finance_link:    t("verticals.finance_link"),
  };

  const outcomesContent = {
    label: t("outcomes.label"),
    items: t.raw("outcomes.items") as string[],
  };

  const trustContent = {
    label:       t("trust.label"),
    stats:       t.raw("trust.stats") as { value: string; unit: string; desc: string }[],
    credentials: t.raw("trust.credentials") as string[],
  };

  return (
    <>
      <HeroHome />
      <ProblemSection content={problemContent} />
      <VerticalsSection locale={locale} content={verticalsContent} />
      <OutcomesSection content={outcomesContent} />
      <TrustSection content={trustContent} />
      <MidCTA
        locale={locale}
        headline={t("mid_cta.headline")}
        sub={t("mid_cta.sub")}
        primaryLabel={t("mid_cta.primary")}
        secondaryLabel={t("mid_cta.secondary")}
      />
      <FinalCTA
        locale={locale}
        headline={t("final_cta.headline")}
        cta={t("final_cta.cta")}
      />
    </>
  );
}
