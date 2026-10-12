import { about } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="wrap split">
        <div>
          <SectionIntro kicker="About" title={about.title} titleId="about-title" />
          <p>{about.body}</p>
        </div>
        <img
          className="split-media"
          src={about.src}
          alt={about.alt}
          width={1152}
          height={864}
        />
      </div>
    </section>
  );
}
