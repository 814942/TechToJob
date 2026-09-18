import type { Metadata } from "next";
import { getMessages } from "next-intl/server";

import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

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
    <Providers locale={locale} messages={messages}>
      <Header locale={locale} />
      {children}
      <ScrollToTop />
    </Providers>
  );
}
