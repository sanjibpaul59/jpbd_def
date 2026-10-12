import { pillars } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function Pillars() {
  return (
    <section id="pillars" className="section section-ivory" aria-labelledby="pillars-title">
      <div className="wrap">
        <SectionIntro
          kicker="Focus"
          title="Six pillars for a stronger partnership"
          titleId="pillars-title"
        />
        <div className="pillar-grid">
          {pillars.map((pillar) => (
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
