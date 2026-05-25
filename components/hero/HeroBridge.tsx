import { BridgeInlineAccent, BridgeInlinePill } from "@/components/hero/BridgeInlineVisual";
import { Reveal } from "@/components/ui/Reveal";

export function HeroBridge() {
  return (
    <section className="hero-bridge" aria-labelledby="hero-bridge-heading">
      <div className="hero-bridge__inner mm-container">
        <div className="hero-bridge__headline-block">
          <h2 id="hero-bridge-heading" className="hero-bridge__title">
            <Reveal as="span" className="hero-bridge__line" delay={0}>
              <span>Tired of losing your</span>
              <BridgeInlinePill label="Alarm clock — morning slipping away" />
              <span>morning</span>
            </Reveal>
            <Reveal as="span" className="hero-bridge__line" delay={1}>
              <span>before it</span>
              <BridgeInlineAccent label="Sunrise behind clouds — a fresh start" />
              <span>starts?</span>
            </Reveal>
          </h2>
          <Reveal delay={2}>
            <p className="hero-bridge__kicker">Built with early testers refining calm morning routines.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
