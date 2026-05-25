/** Waitlist scarcity cue — replaces App Store teaser until launch. */

export function HeroStoreBadge() {
  return (
    <div className="hero-store">
      <div className="hero-store__pill" role="group" aria-label="Waitlist status">
        <span className="hero-store__dot" aria-hidden />
        <span className="hero-store__label">142 early testers — spots limited</span>
      </div>
    </div>
  );
}
