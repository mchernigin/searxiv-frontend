import { AppProps } from "next/app";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "../styles/globals.css";

const plex = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Searxiv",
  description: "Search through sience papers on arXiv.org",
};

export default function SearXiv({ Component, pageProps }: AppProps) {
  return (
    <div className={plex.className}>
      <Component {...pageProps} />
    </div>
  );
}
