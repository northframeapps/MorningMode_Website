import type { AnchorHTMLAttributes, ReactNode } from "react";

import { TESTFLIGHT_JOIN_URL } from "@/data/footerLinks";

type HeroJoinWaitlistProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

/** Opens the public TestFlight join link. */
export function HeroJoinWaitlist(props: HeroJoinWaitlistProps) {
  const { children, className, ...rest } = props;

  return (
    <a {...rest} href={TESTFLIGHT_JOIN_URL} className={className}>
      {children}
    </a>
  );
}
