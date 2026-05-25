import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/footer/SiteFooter";

import "./globals.css";

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Morning Mode — Own your morning — earn your phone",
  description:
    "Build routines, track workouts, and reclaim your time before the day gets away.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mm-body">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
