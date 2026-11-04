import { headers } from "next/headers";
import type { Locale } from "@/src/data/types";

export async function requestLocale(): Promise<Locale> {
  const headerStore = await headers();
  return headerStore.get("x-locale") === "ja" ? "ja" : "en";
}
