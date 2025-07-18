import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function buildMetadata(
  locale: string,
  namespace:
    | "Metadata"
    | "AboutMetadata"
    | "ContactMetadata"
    | "PrivacyPolicyMetadata"
    | "TermsOfServiceMetadata"
    | "CookiePolicyMetadata",
  path:
    | ""
    | "about"
    | "contact"
    | "privacy-policy"
    | "terms-of-service"
    | "cookie-policy",
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });

  const ogImage =
    locale === "ar"
      ? "https://almeria-pesticides.com/og-image.ar.jpg"
      : "https://almeria-pesticides.com/og-image.en.jpg";

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(","),
    category: "Agriculture",
    creator: "Almeria Pesticides",
    themeColor: "#0D542B",
    alternates: {
      canonical: `https://almeria-pesticides.com/${path}`,
      languages: {
        en: `/en/${path}`,
        ar: `/ar/${path}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://almeria-pesticides.com/${path}`,
      siteName: "Almeria Pesticides",
      locale: locale === "ar" ? "ar_AE" : "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon/favicon.ico",
      shortcut: "/favicon/favicon-32x32.png",
      apple: "/favicon/apple-touch-icon.png",
      other: [
        {
          rel: "icon",
          url: "/favicon/favicon.ico",
          type: "image/x-icon",
        },
      ],
    },
  };
}
