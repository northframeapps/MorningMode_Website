import { PhoneMockup } from "@/components/ui/PhoneMockup";

const DASHBOARD_SCREENSHOT = "/screenshots/dashboard.png";

export function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual__phone-wrap">
        <PhoneMockup
          src={DASHBOARD_SCREENSHOT}
          alt="Morning Mode dashboard showing today's progress and an active morning routine session."
          priority
        />
      </div>
    </div>
  );
}
