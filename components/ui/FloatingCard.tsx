import type { ReactNode } from "react";

type FloatingCardVariant = "insights" | "routine";

type FloatingCardProps = {
  variant: FloatingCardVariant;
  children: ReactNode;
};

export function FloatingCard({ variant, children }: FloatingCardProps) {
  const surface =
    variant === "routine"
      ? "mm-card mm-card--gradient hero-float-card hero-float-card--routine"
      : "mm-card mm-card--insights hero-float-card hero-float-card--insights";

  return <div className={surface}>{children}</div>;
}
