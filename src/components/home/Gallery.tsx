import type { CopyProps } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function Gallery({ copy }: CopyProps) {
  return (
    <section id="gallery" className="section section-ivory" aria-labelledby="gallery-title">
      <div className="wrap">
        <SectionIntro
          kicker={copy.galleryHeading.kicker}
          title={copy.galleryHeading.title}
          titleId="gallery-title"
        />
        <div className="gallery-grid">
          {copy.gallery.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} width={1152} height={864} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
