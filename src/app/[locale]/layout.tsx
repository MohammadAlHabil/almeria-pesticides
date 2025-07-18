import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Geist, Geist_Mono } from "next/font/google";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DirectionProvider } from "@base-ui-components/react";
import { ParamsProps, Props } from "@/utils/types";
import { buildMetadata } from "@/utils/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(props: ParamsProps) {
  const { locale } = await props.params;
  return buildMetadata(locale, "Metadata", "");
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !bg-white !text-gray-900 overflow-x-hidden`}
      >
        <NextIntlClientProvider>
          <DirectionProvider direction={dir}>
            <Header />
            <main className="font-sans min-h-screen">{children}</main>
            <Footer />
          </DirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
