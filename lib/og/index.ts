import type { Metadata } from "next/types";

export const OpenGraph: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: {
    default: "Aitor's Portfolio",
    template: "%s",
  },
  description: "...",
  keywords: ["Portfolio", "Development", "Engineering"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "Aitor's Portfolio",
    description: "...",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}images/bbbookmarks-icon-128x128.png`],
    siteName: "Aitor's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aitor's Portfolio",
    description: "...",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/images/bbbookmarks-icon-128x128.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
