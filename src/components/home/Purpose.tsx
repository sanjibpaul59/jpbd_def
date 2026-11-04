import type { CopyProps } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function Purpose({ copy }: CopyProps) {
  return (
    <section id="purpose" className="section" aria-labelledby="purpose-title">
      <div className="wrap">
        <SectionIntro
          kicker={copy.purpose.kicker}
          title={copy.purpose.title}
          titleId="purpose-title"
        />
        <div className="purpose-grid">
          <article className="purpose-card">
            <img
              src={copy.purpose.missionImage.src}
              alt={copy.purpose.missionImage.alt}
              width={1152}
              height={864}
            />
            <h3>{copy.purpose.missionLabel}</h3>
            <p>{copy.purpose.mission}</p>
          </article>
          <div className="purpose-rule" role="separator" aria-hidden="true" />
          <article className="purpose-card">
            <img
              src={copy.purpose.visionImage.src}
              alt={copy.purpose.visionImage.alt}
              width={1152}
              height={864}
            />
            <h3>{copy.purpose.visionLabel}</h3>
            <p>{copy.purpose.vision}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
