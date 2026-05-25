import Image from "next/image";
import Link from "next/link";

import { WaitlistForm } from "@/components/hero/WaitlistForm";
import { Reveal } from "@/components/ui/Reveal";
import {
  footerNavColumns,
  footerSocialLinks,
  type FooterSocialLink,
} from "@/data/footerLinks";

function isSocialReady(link: FooterSocialLink): link is FooterSocialLink & { href: string } {
  return typeof link.href === "string" && link.href.length > 0;
}

function InstagramGlyph() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInGlyph() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" aria-hidden fill="none">
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XGlyph() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" aria-hidden fill="none">
      <path
        d="M4 4l16 16M20 4 4 20"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

function SocialGlyph({ label }: { label: string }) {
  switch (label) {
    case "Instagram":
      return <InstagramGlyph />;
    case "LinkedIn":
      return <LinkedInGlyph />;
    case "Facebook":
      return <FacebookGlyph />;
    case "X":
      return <XGlyph />;
    default:
      return null;
  }
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const activeSocial = footerSocialLinks.filter(isSocialReady);

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__band mm-container">
        <Reveal>
          <Link href="/" className="site-footer__brand" aria-label="Morning Mode home">
            <Image
              src="/logo.jpeg"
              alt=""
              width={44}
              height={44}
              className="site-footer__logo"
            />
            <span className="site-footer__brand-name">Morning Mode</span>
          </Link>
        </Reveal>

        <Reveal delay={1} className="site-footer__newsletter">
          <p className="mm-heading site-footer__newsletter-title">
            Stay consistent with gentle reminders
          </p>
          <p className="site-footer__newsletter-lede mm-text mm-text--sm">
            No spam — occasional notes on routines, workouts, and reclaiming your mornings.
          </p>
          <WaitlistForm variant="footer" />
        </Reveal>
      </div>

      <Reveal delay={2} className="site-footer__cols mm-container">
        {footerNavColumns.map((column) => (
          <nav
            key={column.id}
            className="site-footer__nav-col"
            aria-labelledby={`footer-col-${column.id}`}
          >
            <h3 id={`footer-col-${column.id}`} className="site-footer__col-heading mm-heading">
              {column.heading}
            </h3>
            <ul className="site-footer__link-list">
              {column.links.map((link) => (
                <li key={`${column.id}-${link.label}`}>
                  <Link href={link.href} className="site-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Reveal>

      <div className="site-footer__divider" aria-hidden />

      <div className="site-footer__bottom mm-container">
        <p className="site-footer__copyright mm-text mm-text--sm">
          © {year} Morning Mode. All rights reserved.
        </p>
        {activeSocial.length > 0 ? (
          <ul className="site-footer__social">
            {activeSocial.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__social-btn"
                  aria-label={item.label}
                >
                  <SocialGlyph label={item.label} />
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </footer>
  );
}
