export type FooterNavLink = {
  label: string;
  href: string;
};

export type FooterNavColumn = {
  id: string;
  heading: string;
  links: FooterNavLink[];
};

/** Primary footer navigation — edit hrefs when standalone pages ship. */
export const footerNavColumns: FooterNavColumn[] = [
  {
    id: "product",
    heading: "Product",
    links: [{ label: "Features", href: "#features" }],
  },
  {
    id: "explore",
    heading: "Explore",
    links: [
      { label: "Spotlight", href: "#feature-spotlight" },
      { label: "Join waitlist", href: "#hero-waitlist" },
    ],
  },
  {
    id: "support",
    heading: "Support",
    links: [
      {
        label: "Contact",
        href: "mailto:hello@morningmode.app",
      },
    ],
  },
];

export type FooterSocialLink = {
  label: string;
  /** Omit or leave empty to hide this icon until you add a real profile URL. */
  href?: string;
};

export const footerSocialLinks: FooterSocialLink[] = [
  { label: "Instagram", href: undefined },
  { label: "LinkedIn", href: undefined },
  { label: "Facebook", href: undefined },
  { label: "X", href: undefined },
];
