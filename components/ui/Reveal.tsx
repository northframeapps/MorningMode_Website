"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Delay = 0 | 1 | 2 | 3 | 4;
type Effect = "fade" | "scale";
type Tag = "div" | "section" | "article" | "span";

const DELAY_CLASSES: Record<Exclude<Delay, 0>, string> = {
  1: "mm-reveal--delay-1",
  2: "mm-reveal--delay-2",
  3: "mm-reveal--delay-3",
  4: "mm-reveal--delay-4",
};

export type RevealProps = {
  readonly as?: Tag | undefined;
  readonly children: ReactNode;
  readonly className?: string | undefined;
  readonly delay?: Delay | undefined;
  readonly effect?: Effect | undefined;
  readonly style?: CSSProperties | undefined;
};

/** Scroll-driven entrance; skips observation when prefers-reduced-motion */
export function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  effect = "fade",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setVisible(true);
          observer.unobserve(entry.target);
          observer.disconnect();
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay === 0 ? "" : DELAY_CLASSES[delay];
  const scaleClass = effect === "scale" ? "mm-reveal--scale" : "";
  const merged = ["mm-reveal", scaleClass, delayClass, visible ? "mm-reveal--visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return createElement(
    as,
    {
      ref,
      className: merged.trim() || undefined,
      style,
    },
    children
  );
}
