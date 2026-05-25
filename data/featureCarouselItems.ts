export type CarouselCategory =
  | "routine"
  | "workout"
  | "task"
  | "insight";

export type HabitCarouselIcon =
  | "droplet"
  | "stretch"
  | "calendar"
  | "journal"
  | "phone-off"
  | "sparkle"
  | "sun"
  | "wind"
  | "run"
  | "lotus"
  | "layout"
  | "book-open"
  | "moon"
  | "leaf"
  | "bell";

export type CarouselHabitEntry = {
  kind: "habit";
  id: string;
  label: string;
  category: CarouselCategory;
  icon: HabitCarouselIcon;
};

export type CarouselMoodVariant = "dawn" | "calm" | "focus" | "evening";

export type CarouselMoodEntry = {
  kind: "mood";
  id: string;
  variant: CarouselMoodVariant;
};

export type CarouselEntry = CarouselHabitEntry | CarouselMoodEntry;

/** Mix behind top marquee (scrolls left). */
export const featureCarouselTopRow: CarouselEntry[] = [
  {
    kind: "habit",
    id: "water",
    label: "Drink water",
    category: "routine",
    icon: "droplet",
  },
  {
    kind: "mood",
    id: "m-dawn",
    variant: "dawn",
  },
  {
    kind: "habit",
    id: "stretch",
    label: "Morning stretch",
    category: "workout",
    icon: "stretch",
  },
  {
    kind: "habit",
    id: "plan",
    label: "Plan the day",
    category: "task",
    icon: "calendar",
  },
  {
    kind: "mood",
    id: "m-calm-a",
    variant: "calm",
  },
  {
    kind: "habit",
    id: "journal",
    label: "Quick journal",
    category: "insight",
    icon: "journal",
  },
  {
    kind: "habit",
    id: "phone",
    label: "Phone‑free hour",
    category: "task",
    icon: "phone-off",
  },
  {
    kind: "habit",
    id: "gratitude",
    label: "Gratitude note",
    category: "routine",
    icon: "sparkle",
  },
  {
    kind: "habit",
    id: "sunlight",
    label: "Step outside",
    category: "routine",
    icon: "sun",
  },
  {
    kind: "habit",
    id: "breathe",
    label: "Three calm breaths",
    category: "insight",
    icon: "wind",
  },
];

/** Mix behind bottom marquee (scrolls right). */
export const featureCarouselBottomRow: CarouselEntry[] = [
  {
    kind: "habit",
    id: "move",
    label: "Light workout",
    category: "workout",
    icon: "run",
  },
  {
    kind: "mood",
    id: "m-focus",
    variant: "focus",
  },
  {
    kind: "habit",
    id: "meditate",
    label: "Meditate",
    category: "insight",
    icon: "lotus",
  },
  {
    kind: "habit",
    id: "tidy",
    label: "Tidy desk",
    category: "task",
    icon: "layout",
  },
  {
    kind: "mood",
    id: "m-evening",
    variant: "evening",
  },
  {
    kind: "habit",
    id: "read",
    label: "Read ten pages",
    category: "routine",
    icon: "book-open",
  },
  {
    kind: "habit",
    id: "wind-down",
    label: "Evening reset",
    category: "routine",
    icon: "moon",
  },
  {
    kind: "habit",
    id: "greens",
    label: "Eat something green",
    category: "routine",
    icon: "leaf",
  },
  {
    kind: "habit",
    id: "bedtime",
    label: "Same bedtime",
    category: "task",
    icon: "bell",
  },
  {
    kind: "mood",
    id: "m-calm-b",
    variant: "calm",
  },
];
