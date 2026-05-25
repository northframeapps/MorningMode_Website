import type { CarouselMoodVariant } from "@/data/featureCarouselItems";

type MoodCarouselCardProps = {
  variant: CarouselMoodVariant;
};

export function MoodCarouselCard({ variant }: MoodCarouselCardProps) {
  return (
    <div
      className={`feature-showcase__card feature-showcase__mood feature-showcase__mood--${variant}`}
      aria-hidden
    />
  );
}
