import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { getMessages } from "next-intl/server";

import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

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
    <html lang={locale} className={`${sora.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TechToJob',
              url: 'https://techtojob.com',
              sameAs: [
                'https://discord.gg/h9FFgKdkRd',
                'https://www.linkedin.com/company/techtojob/',
                'https://x.com/techtojob',
                'https://www.instagram.com/techtojob',
              ],
            }),
          }}
        />
        <Providers locale={locale} messages={messages}>
          <Header locale={locale} />
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
