import type { CopyProps } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function About({ copy }: CopyProps) {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="wrap split">
        <div>
          <SectionIntro kicker={copy.about.kicker} title={copy.about.title} titleId="about-title" />
          <p>{copy.about.body}</p>
        </div>
        <img
          className="split-media"
          src={copy.about.src}
          alt={copy.about.alt}
          width={1152}
          height={864}
        />
      </div>
    </section>
  );
}
