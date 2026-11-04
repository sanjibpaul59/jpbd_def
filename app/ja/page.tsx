import type { Metadata } from "next";
import { HomePage } from "@/src/components/home/HomePage";
import { ja } from "@/src/data/site";

export const metadata: Metadata = {
  title: ja.forumName,
  description: ja.description,
};

export default function JapanesePage() {
  return <HomePage copy={ja} />;
}
