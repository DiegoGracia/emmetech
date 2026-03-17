import { getLocale } from "next-intl/server";
import HeroHome from "@/components/sections/HeroHome";
import ProblemSection from "@/components/sections/ProblemSection";
import VerticalsSection from "@/components/sections/VerticalsSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import TrustSection from "@/components/sections/TrustSection";
import MidCTA from "@/components/sections/MidCTA";
import FinalCTA from "@/components/sections/FinalCTA";

export default async function HomePage() {
  const locale = await getLocale();

  return (
    <>
      <HeroHome />
      <ProblemSection />
      <VerticalsSection locale={locale} />
      <OutcomesSection />
      <TrustSection />
      <MidCTA locale={locale} />
      <FinalCTA locale={locale} />
    </>
  );
}
