import type { CopyProps } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function Pillars({ copy }: CopyProps) {
  return (
    <section id="pillars" className="section section-ivory" aria-labelledby="pillars-title">
      <div className="wrap">
        <SectionIntro
          kicker={copy.pillarsHeading.kicker}
          title={copy.pillarsHeading.title}
          titleId="pillars-title"
        />
        <div className="pillar-grid">
          {copy.pillars.map((pillar) => (
            <article key={pillar.number} className="pillar">
              <img
                className="pillar-photo"
                src={pillar.src}
                alt={pillar.alt}
                width={1000}
                height={750}
              />
              <div className="pillar-body">
                <p className="pillar-num" aria-hidden="true">
                  {pillar.number}
                </p>
                <h3>{pillar.title}</h3>
                <p>{pillar.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
