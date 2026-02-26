import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import MissionVision from "@/components/sections/MissionVision";
import CTAStrip from "@/components/sections/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <MissionVision />
      <CTAStrip />
    </>
  );
}
