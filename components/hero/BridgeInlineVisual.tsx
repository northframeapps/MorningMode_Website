import type { SVGProps } from "react";

type BridgeInlinePillProps = {
  label: string;
};

/** Outline alarm-clock icon shown inside the pill (24×24 SVG). */
export function BridgeAlarmClockIcon(props: SVGProps<SVGSVGElement>) {
  const { width = 22, height = 22, className, ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} />
      <path
        d="M12 8v6l4 3"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Sun with cloud motif for inline headline accent (viewBox 24×24 SVG). */
export function BridgeSunCloudIcon(props: SVGProps<SVGSVGElement>) {
  const { width = 28, height = 28, className, ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <circle cx={14} cy={9} r={2.85} stroke="currentColor" strokeWidth={1.85} fill="none" />
      <path
        stroke="currentColor"
        strokeWidth={1.85}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 10h-1.26A8 8 0 1 0 9 18h9a5 5 0 0 0 0-10z"
      />
    </svg>
  );
}

/** Orange capsule with alarm icon inline in headline copy. */
export function BridgeInlinePill({ label }: BridgeInlinePillProps) {
  return (
    <span className="hero-bridge__pill" role="img" aria-label={label}>
      <span className="hero-bridge__pill-inner" aria-hidden="true">
        <BridgeAlarmClockIcon className="hero-bridge__pill-svg" />
      </span>
    </span>
  );
}

type BridgeInlineAccentProps = {
  label: string;
};

/** Larger inline graphical accent aligned to headline cap height (sun + cloud). */
export function BridgeInlineAccent({ label }: BridgeInlineAccentProps) {
  return (
    <span className="hero-bridge__accent" role="img" aria-label={label}>
      <span className="hero-bridge__accent-inner" aria-hidden="true">
        <BridgeSunCloudIcon className="hero-bridge__accent-svg" />
      </span>
    </span>
  );
}
