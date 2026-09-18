import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | TechToJob",
    default: "TechToJob — Comunidad de desarrolladores y empresas tech",
  },
  description:
    "Comunidad de desarrolladores y empresas tech en español. Te encuentran, participas en torneos y accedes a oportunidades reales.",
  metadataBase: new URL("https://techtojob.com"),
  openGraph: {
    title: "TechToJob",
    description:
      "Comunidad de desarrolladores y empresas tech en español.",
    url: "https://techtojob.com",
    siteName: "TechToJob",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechToJob",
    description:
      "Comunidad de desarrolladores y empresas tech en español.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
