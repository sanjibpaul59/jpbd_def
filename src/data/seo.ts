import type { Metadata } from "next";
import type { SiteContent } from "@/src/data/types";

export const siteUrl = "https://www.jbdef.com";

export const tabTitle = "JBDEF";

export function pagePath(locale: SiteContent["locale"]): string {
  return locale === "ja" ? "/ja" : "/";
}

export function pageMetadata(copy: SiteContent): Metadata {
  const path = pagePath(copy.locale);
  const socialTitle =
    copy.locale === "ja"
      ? "JBDEF — 日本・バングラデシュ交流会"
      : "JBDEF — Japan Bangladesh Exchange Forum";

  return {
    title: { absolute: tabTitle },
    description: copy.description,
    keywords: copy.keywords,
    applicationName: tabTitle,
    authors: [{ name: "今泉 政幸 (Imaizumi Masayuki)" }],
    alternates: {
      canonical: path,
      languages: {
        en: "/",
        ja: "/ja",
        "x-default": "/",
      },
    },
    openGraph: {
      title: socialTitle,
      description: copy.description,
      url: path,
      siteName: tabTitle,
      locale: copy.locale === "ja" ? "ja_JP" : "en_US",
      alternateLocale: copy.locale === "ja" ? ["en_US"] : ["ja_JP"],
      type: "website",
      images: [
        {
          url: "/assets/jbdef_logo_updated.jpeg",
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description: copy.description,
      images: ["/assets/jbdef_logo_updated.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Japan Bangladesh Exchange Forum",
    alternateName: ["JBDEF", "日本・バングラデシュ交流会"],
    url: siteUrl,
    logo: `${siteUrl}/assets/jbdef_logo_updated.jpeg`,
    email: "m1023hikaruman@gmail.com",
    telephone: "+81-90-4072-2000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "篠籠田1422-1",
      addressLocality: "柏市",
      addressRegion: "千葉県",
      postalCode: "277-0086",
      addressCountry: "JP",
    },
    founder: {
      "@type": "Person",
      name: "Imaizumi Masayuki",
      alternateName: "今泉 政幸",
      jobTitle: "代表理事長",
    },
  };
}
