"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

const PROMPT_CLASS = "hero-waitlist__input--prompt";
const SCROLL_FOCUS_DELAY_MS = 320;

function promptWaitlistEmail() {
  const input = document.getElementById("waitlist-email");
  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  input.classList.remove(PROMPT_CLASS);
  void input.offsetWidth;
  input.classList.add(PROMPT_CLASS);
  input.focus({ preventScroll: true });

  const removePrompt = () => {
    input.classList.remove(PROMPT_CLASS);
  };

  input.addEventListener("input", removePrompt, { once: true });
  window.setTimeout(removePrompt, 2600);
}

type HeroJoinWaitlistProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

/** Scrolls to the waitlist and highlights the email field (respects reduced motion). */
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
            promptWaitlistEmail();
          },
          reduceMotion ? 0 : SCROLL_FOCUS_DELAY_MS,
        );
      }}
    >
      {children}
    </a>
  );
}
