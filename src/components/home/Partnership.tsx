import { partnership } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function Partnership() {
  return (
    <section id="partnership" className="section" aria-labelledby="partnership-title">
      <div className="wrap split">
        <img
          className="split-media"
          src={partnership.src}
          alt={partnership.alt}
          width={1152}
          height={864}
        />
        <div>
          <SectionIntro
            kicker="Partnership"
            title={partnership.title}
            titleId="partnership-title"
          />
          <p>{partnership.body}</p>
          <ul className="with-list">
            {partnership.with.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
