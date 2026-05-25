"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type HeroJoinWaitlistProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

/** Scrolls to the waitlist and focuses the email field (respects reduced motion). */
export function HeroJoinWaitlist(props: HeroJoinWaitlistProps) {
  const { children, onClick, className, ...rest } = props;

  return (
    <a
      {...rest}
      href="#hero-waitlist"
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }

        const reduceMotion =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        event.preventDefault();
        const anchor = document.getElementById("hero-waitlist");
        anchor?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });

        window.setTimeout(
          () => {
            document.getElementById("waitlist-email")?.focus({ preventScroll: true });
          },
          reduceMotion ? 0 : 320,
        );
      }}
    >
      {children}
    </a>
  );
}
