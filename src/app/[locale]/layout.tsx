import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { getMessages } from "next-intl/server";

import { Providers } from "@/components/Providers";
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
