import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "../globals.css";

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
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return params.then(({ locale }) => (
    <html lang={locale} className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  ));
}
