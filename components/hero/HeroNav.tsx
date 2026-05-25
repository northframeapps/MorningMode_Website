import type { SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";

import { HeroJoinWaitlist } from "@/components/hero/HeroJoinWaitlist";

const NAV_LINKS = [{ href: "#feature-spotlight", label: "Features" }] as const;

function HeroNavJoinChevron({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={13}
      height={13}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroNav() {
  return (
    <header className="hero-nav">
      <div className="hero-nav__inner mm-container">
        <div className="hero-nav__brand-slot">
          <Link href="/" className="hero-nav__brand" aria-label="Morning Mode home">
            <Image
              src="/logo.jpeg"
              alt=""
              width={44}
              height={44}
              priority
              className="hero-nav__logo"
            />
            <span className="hero-nav__title">Morning Mode</span>
          </Link>
        </div>

        <nav className="hero-nav__links" aria-label="Primary">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="hero-nav__link">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hero-nav__cta">
          <HeroJoinWaitlist className="mm-btn mm-btn--cta hero-nav__cta-btn">
            Join waitlist
            <HeroNavJoinChevron className="hero-nav__cta-chevron" />
          </HeroJoinWaitlist>
        </div>
      </div>
    </header>
  );
}
