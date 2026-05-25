import type { CarouselEntry } from "@/data/featureCarouselItems";
import { HabitCarouselCard } from "@/components/features/HabitCarouselCard";
import { MoodCarouselCard } from "@/components/features/MoodCarouselCard";

function CarouselCard({ item }: { item: CarouselEntry }) {
  if (item.kind === "habit") {
    return (
      <HabitCarouselCard
        label={item.label}
        category={item.category}
        icon={item.icon}
      />
    );
  }
  return <MoodCarouselCard variant={item.variant} />;
}

export type CarouselDirection = "left" | "right";

type CarouselRowProps = {
  direction: CarouselDirection;
  items: CarouselEntry[];
};

export function CarouselRow({ direction, items }: CarouselRowProps) {
  const trackModifier =
    direction === "left"
      ? "feature-showcase__track--left"
      : "feature-showcase__track--right";

  return (
    <div className="feature-showcase__clip" aria-hidden>
      <div className={`feature-showcase__track ${trackModifier}`}>
        <div className="feature-showcase__sequence">
          {items.map((item, index) => (
            <CarouselCard key={`${item.id}-a-${index}`} item={item} />
          ))}
        </div>
        <div className="feature-showcase__sequence" aria-hidden>
          {items.map((item, index) => (
            <CarouselCard key={`${item.id}-b-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
