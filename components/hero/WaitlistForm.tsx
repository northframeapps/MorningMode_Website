"use client";

import { type FormEvent, useId, useRef, useState } from "react";

export type WaitlistFormVariant = "hero" | "footer";

function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  return trimmed.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

type WaitlistFormProps = {
  variant?: WaitlistFormVariant;
};

export function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const uid = useId();
  /** Stable hero id so in-page anchors (e.g. nav CTA) can focus after scroll */
  const emailId =
    variant === "hero" ? "waitlist-email" : `${uid}-email`;
  const statusId = `${uid}-status`;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const emailInputRef = useRef<HTMLInputElement>(null);

  const isHero = variant === "hero";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Enter a valid email address.");
      queueMicrotask(() => emailInputRef.current?.focus());
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data: unknown = await response.json().catch(() => null);
      const ok =
        typeof data === "object" &&
        data !== null &&
        "ok" in data &&
        (data as { ok: unknown }).ok === true;

      if (!response.ok || !ok) {
        const errorMessage =
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof (data as { error: unknown }).error === "string"
            ? (data as { error: string }).error
            : "Something went wrong. Try again.";
        setStatus("error");
        setMessage(errorMessage);
        queueMicrotask(() => emailInputRef.current?.focus());
        return;
      }

      setStatus("success");
      setMessage("You're on the list. We'll be in touch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Check your connection and try again.");
      queueMicrotask(() => emailInputRef.current?.focus());
    }
  }

  const statusBase = isHero ? "hero-waitlist__status" : "footer-waitlist__status";
  const statusClass =
    status === "success"
      ? `${statusBase} ${statusBase}--success`
      : status === "error"
        ? `${statusBase} ${statusBase}--error`
        : statusBase;

  const wrapperClass = isHero ? "hero-waitlist" : "footer-waitlist";
  const formClass = isHero ? "hero-waitlist__form" : "footer-waitlist__form";
  const rowClass = isHero ? "hero-waitlist__row" : "footer-waitlist__row";
  const fieldClass = isHero ? "hero-waitlist__field" : "footer-waitlist__field";
  const inputClass = isHero ? "hero-waitlist__input" : "footer-waitlist__input";
  const submitClass = isHero
    ? "mm-btn mm-btn--cta hero-waitlist__submit"
    : "mm-btn footer-waitlist__submit";

  return (
    <div {...(isHero ? { id: "hero-waitlist" as const } : {})} className={wrapperClass}>
      <form className={formClass} onSubmit={onSubmit} noValidate>
        <label
          htmlFor={emailId}
          className={isHero ? "sr-only" : "footer-waitlist__label"}
        >
          Email address
        </label>
        <div className={rowClass}>
          <div className={fieldClass}>
            <input
              ref={emailInputRef}
              id={emailId}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              spellCheck={false}
              placeholder="you@company.com…"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (status !== "idle") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              disabled={status === "loading"}
              className={inputClass}
              aria-invalid={status === "error"}
              aria-describedby={statusId}
            />
          </div>
          <button
            type="submit"
            className={submitClass}
            disabled={status === "loading"}
          >
            {status === "loading"
              ? isHero
                ? "Joining…"
                : "Subscribing…"
              : isHero
                ? "Join waitlist"
                : "Subscribe"}
          </button>
        </div>
      </form>

      <div id={statusId} className={statusClass} role="status" aria-live="polite">
        {message ? message : "\u00a0"}
      </div>
    </div>
  );
}
