import type { Metadata } from "next";
import { HomePage } from "@/src/components/home/HomePage";
import { ja } from "@/src/data/site";
import { pageMetadata } from "@/src/data/seo";

export const metadata: Metadata = pageMetadata(ja);

export default function JapanesePage() {
  return <HomePage copy={ja} />;
}
