import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SpaceBackground from "@/components/layout/SpaceBackground";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Emmetech — Technology & Financial Leadership for Europe",
  description:
    "Combinamos dirección financiera de alto nivel con tecnología a medida para que tu empresa opere con claridad, crezca con estructura y escale sin depender del caos.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} font-sans antialiased relative`}>
        <NextIntlClientProvider messages={messages}>
          <SpaceBackground />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
