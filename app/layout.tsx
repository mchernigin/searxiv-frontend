import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Searxiv",
  description: "Search through sience papers on arXiv.org",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plex.className}>{children}</body>
    </html>
  );
}
