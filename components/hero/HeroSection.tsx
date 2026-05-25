import { HeroBridge } from "@/components/hero/HeroBridge";
import { HeroCopy } from "@/components/hero/HeroCopy";
import { HeroNav } from "@/components/hero/HeroNav";
import { HeroSocialProof } from "@/components/hero/HeroSocialProof";
import { HeroStoreBadge } from "@/components/hero/HeroStoreBadge";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { WaitlistForm } from "@/components/hero/WaitlistForm";

export function HeroSection() {
  return (
    <>
      <section className="hero" aria-label="Morning Mode hero">
        <div className="hero__surface">
          <HeroNav />
          <div className="hero__grid mm-container">
            <div className="hero__lead">
              <HeroStoreBadge />
              <HeroCopy />
              <WaitlistForm />
              <HeroSocialProof />
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>
      <HeroBridge />
    </>
  );
}
