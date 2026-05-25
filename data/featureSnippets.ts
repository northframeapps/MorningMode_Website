export type FeatureSnippetId =
  | "routines"
  | "workout"
  | "routine-builder"
  | "insights";

export type FeatureSnippet = {
  id: FeatureSnippetId;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export const featureSnippets: FeatureSnippet[] = [
  {
    id: "routines",
    title: "Routines at a glance",
    description:
      "Browse saved flows with streaks and timing hints — tap in when you’re ready, without hunting through menus.",
    imageSrc: "/screenshots/features/routines-snippet.png",
    imageAlt:
      "Routines list showing Morning Routine cards with streak counts and estimated durations.",
  },
  {
    id: "workout",
    title: "Guided workout moments",
    description:
      "Dial in reps or duration fast, hit Complete, and move on — progress stays visible while you’re mid-session.",
    imageSrc: "/screenshots/features/workout-snippet.png",
    imageAlt:
      "Active workout session with exercise cards for plank and sit-ups and completion controls.",
  },
  {
    id: "routine-builder",
    title: "Routine creation",
    description:
      "Name your flow, tune estimates, and stack tasks — optional AI assists pick icons and duration hints on-device.",
    imageSrc: "/screenshots/features/routine-builder-snippet.png",
    imageAlt:
      "New Routine editor with Perfect Morning title, appearance row, estimated duration, and task list.",
  },
  {
    id: "insights",
    title: "Insights that reward consistency",
    description:
      "See time reclaimed across the week and streak tiles that celebrate mornings, routines, and movement.",
    imageSrc: "/screenshots/features/insights-snippet.png",
    imageAlt:
      "Insights screen highlighting Time Reclaimed weekly totals and streak summary rows.",
  },
];
