import type { CopyProps } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function Partnership({ copy }: CopyProps) {
  return (
    <section id="partnership" className="section" aria-labelledby="partnership-title">
      <div className="wrap split">
        <img
          className="split-media"
          src={copy.partnership.src}
          alt={copy.partnership.alt}
          width={1152}
          height={864}
        />
        <div>
          <SectionIntro
            kicker={copy.partnership.kicker}
            title={copy.partnership.title}
            titleId="partnership-title"
          />
          <p>{copy.partnership.body}</p>
          <ul className="with-list">
            {copy.partnership.with.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
