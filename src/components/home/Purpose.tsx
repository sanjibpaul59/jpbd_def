import { purpose } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function Purpose() {
  return (
    <section id="purpose" className="section" aria-labelledby="purpose-title">
      <div className="wrap">
        <SectionIntro kicker="Purpose" title={purpose.title} titleId="purpose-title" />
        <div className="purpose-grid">
          <article className="purpose-card">
            <img
              src={purpose.missionImage.src}
              alt={purpose.missionImage.alt}
              width={1152}
              height={864}
            />
            <h3>Mission</h3>
            <p>{purpose.mission}</p>
          </article>
          <div className="purpose-rule" role="separator" aria-hidden="true" />
          <article className="purpose-card">
            <img
              src={purpose.visionImage.src}
              alt={purpose.visionImage.alt}
              width={1152}
              height={864}
            />
            <h3>Vision</h3>
            <p>{purpose.vision}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
