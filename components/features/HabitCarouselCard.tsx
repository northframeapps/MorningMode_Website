import type { CarouselCategory, HabitCarouselIcon } from "@/data/featureCarouselItems";

type HabitCarouselCardProps = {
  label: string;
  category: CarouselCategory;
  icon: HabitCarouselIcon;
};

function HabitCarouselGlyph({ icon }: { icon: HabitCarouselIcon }) {
  const attrs = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "droplet":
      return (
        <svg {...attrs}>
          <path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7z" />
        </svg>
      );
    case "stretch":
      return (
        <svg {...attrs}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...attrs}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    case "journal":
      return (
        <svg {...attrs}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case "phone-off":
      return (
        <svg {...attrs}>
          <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
          <path d="m3 3 18 18" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...attrs}>
          <path d="m12 3-1.9 5.8L4 11l6 2.2L12 21l2-7.8 6-2.2-6.1-2.2z" />
        </svg>
      );
    case "sun":
      return (
        <svg {...attrs}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32L19.07 4.93" />
        </svg>
      );
    case "wind":
      return (
        <svg {...attrs}>
          <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
          <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
          <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
        </svg>
      );
    case "run":
      return (
        <svg {...attrs}>
          <circle cx="13.5" cy="6.5" r="2.5" />
          <path d="M9 21 13 13l4 4 3-7 4 3-6 9zM7 13l4-4 3 5" />
        </svg>
      );
    case "lotus":
      return (
        <svg {...attrs}>
          <path d="M12 20c-4 0-7-4-7-8 3 2 7 2 7 2s4 0 7-2c0 4-3 8-7 8z" />
          <path d="M12 20V10M9 12l-4 2M15 12l4 2M10 8 8 5M14 8l2-3" />
        </svg>
      );
    case "layout":
      return (
        <svg {...attrs}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case "book-open":
      return (
        <svg {...attrs}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case "moon":
      return (
        <svg {...attrs}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...attrs}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case "bell":
      return (
        <svg {...attrs}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    default:
      return (
        <svg {...attrs}>
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}

export function HabitCarouselCard({
  label,
  category,
  icon,
}: HabitCarouselCardProps) {
  return (
    <div className="feature-showcase__card feature-showcase__habit">
      <div
        className={`feature-showcase__habit-icon feature-showcase__habit-icon--${category}`}
      >
        <HabitCarouselGlyph icon={icon} />
      </div>
      <span className="feature-showcase__habit-label">{label}</span>
    </div>
  );
}
