import Image from "next/image";
import Link from "next/link";

type LegalPage = "privacy" | "terms";

type LegalPageShellProps = {
  activePage: LegalPage;
  children: React.ReactNode;
};

const LEGAL_NAV_LINKS: { href: string; label: string; page: LegalPage }[] = [
  { href: "/privacy", label: "Privacy", page: "privacy" },
  { href: "/terms", label: "Terms", page: "terms" },
];

export function LegalPageShell({ activePage, children }: LegalPageShellProps) {
  return (
    <div className="legal-shell">
      <header className="hero-nav legal-nav">
        <div className="hero-nav__inner mm-container">
          <div className="hero-nav__brand-slot">
            <Link
              href="/"
              className="hero-nav__brand"
              aria-label="Morning Mode home"
            >
              <Image
                src="/logo.jpeg"
                alt=""
                width={44}
                height={44}
                priority
                className="hero-nav__logo"
              />
              <span className="hero-nav__title" translate="no">
                Morning Mode
              </span>
            </Link>
          </div>

          <nav className="legal-nav__links" aria-label="Legal">
            {LEGAL_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="legal-nav__link"
                aria-current={activePage === link.page ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="legal-page mm-container">
        {children}
      </main>
    </div>
  );
}
