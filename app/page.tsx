import { FeaturesMarketing } from "@/components/features/FeaturesMarketing";
import { FeatureShowcase } from "@/components/features/FeatureShowcase";
import { HeroSection } from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <FeatureShowcase />
      <FeaturesMarketing />
    </main>
  );
}
