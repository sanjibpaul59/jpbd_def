import type { Metadata, Viewport } from "next";
import { Crimson_Text } from "next/font/google";
import { SiteFooter } from "@/src/components/SiteFooter";
import { SiteHeader } from "@/src/components/SiteHeader";
import { forumName } from "@/src/data/site";
import "@/src/styles/global.css";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-crimson",
});

const description =
  "The Japan Bangladesh Development Exchange Forum builds friendship, cooperation, and co-prosperity between Japan and Bangladesh.";

export const metadata: Metadata = {
  title: forumName,
  description,
  icons: { icon: "/assets/logo_jpbddef.jpeg" },
};

export const viewport: Viewport = {
  themeColor: "#0E3324",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={crimsonText.variable}>
      <body id="top">
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
