import { breakAfterEvents, breakAfterProgrammes } from "@/src/data/site";
import { About } from "@/src/components/home/About";
import { Closing } from "@/src/components/home/Closing";
import { Gallery } from "@/src/components/home/Gallery";
import { Gatherings } from "@/src/components/home/Gatherings";
import { Hero } from "@/src/components/home/Hero";
import { ImageBreak } from "@/src/components/home/ImageBreak";
import { News } from "@/src/components/home/News";
import { Partnership } from "@/src/components/home/Partnership";
import { Pillars } from "@/src/components/home/Pillars";
import { Programmes } from "@/src/components/home/Programmes";
import { Purpose } from "@/src/components/home/Purpose";
import { TakePart } from "@/src/components/home/TakePart";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Purpose />
      <Pillars />
      <Programmes />
      <ImageBreak item={breakAfterProgrammes} />
      <Gallery />
      <Gatherings />
      <ImageBreak item={breakAfterEvents} />
      <Partnership />
      <News />
      <TakePart />
      <Closing />
    </>
  );
}
