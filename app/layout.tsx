import type { Metadata, Viewport } from "next";
import { Crimson_Text, Noto_Serif_JP } from "next/font/google";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { requestLocale } from "@/src/data/locale";
import { getCopy } from "@/src/data/site";
import "@/src/styles/global.css";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-crimson",
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-jp",
});

export async function generateMetadata(): Promise<Metadata> {
  const copy = getCopy(await requestLocale());
  return {
    title: copy.forumName,
    description: copy.description,
    icons: { icon: "/assets/logo_jpbddef.jpeg" },
  };
}

export const viewport: Viewport = {
  themeColor: "#0E3324",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const copy = getCopy(await requestLocale());

  return (
    <html lang={copy.locale} className={`${crimsonText.variable} ${notoSerifJp.variable}`}>
      <body id="top">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
