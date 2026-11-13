import type { Metadata } from "next";
import { HomePage } from "@/src/components/home/HomePage";
import { en } from "@/src/data/site";
import { pageMetadata } from "@/src/data/seo";

export const metadata: Metadata = pageMetadata(en);

export default function Page() {
  return <HomePage copy={en} />;
}
