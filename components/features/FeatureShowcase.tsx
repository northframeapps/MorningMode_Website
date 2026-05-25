import { CarouselRow } from "@/components/features/CarouselRow";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Reveal } from "@/components/ui/Reveal";
import {
  featureCarouselBottomRow,
  featureCarouselTopRow,
} from "@/data/featureCarouselItems";

const ROUTINES_SCREENSHOT = "/screenshots/routines.png";

export function FeatureShowcase() {
  return (
    <section
      id="features"
      className="feature-showcase"
      aria-labelledby="features-heading"
    >
      <Reveal className="feature-showcase__intro mm-container">
        <h2 id="features-heading" className="mm-title feature-showcase__title">
          Small habits, one calm routine
        </h2>
        <p className="mm-text feature-showcase__lede">
          Morning Mode keeps everyday wins flowing behind your routines — stay
          hydrated, move gently, and reset without the noise.
        </p>
      </Reveal>

      <div className="feature-showcase__stage">
        <div className="feature-showcase__backdrop" aria-hidden>
          <div className="feature-showcase__row-slot feature-showcase__row-slot--top">
            <CarouselRow direction="left" items={featureCarouselTopRow} />
          </div>
          <div className="feature-showcase__row-slot feature-showcase__row-slot--bottom">
            <CarouselRow direction="right" items={featureCarouselBottomRow} />
          </div>
        </div>

        <div className="feature-showcase__fade feature-showcase__fade--start" />
        <div className="feature-showcase__fade feature-showcase__fade--end" />

        <Reveal className="feature-showcase__phone" delay={1} effect="scale">
          <PhoneMockup
            src={ROUTINES_SCREENSHOT}
            alt="Morning Mode Routines screen showing saved routines and habit tiles."
            sizes="min(360px, 88vw)"
          />
        </Reveal>
      </div>
    </section>
  );
}
