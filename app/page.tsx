import type { Metadata } from "next";
import { HomePage } from "@/src/components/home/HomePage";
import { en } from "@/src/data/site";

export const metadata: Metadata = {
  title: en.forumName,
  description: en.description,
};

export default function Page() {
  return <HomePage copy={en} />;
}
