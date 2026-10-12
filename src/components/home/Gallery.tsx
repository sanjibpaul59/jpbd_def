import { gallery } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function Gallery() {
  return (
    <section id="gallery" className="section section-ivory" aria-labelledby="gallery-title">
      <div className="wrap">
        <SectionIntro
          kicker="Gallery"
          title="Scenes from the exchange"
          titleId="gallery-title"
        />
        <div className="gallery-grid">
          {gallery.map((item) => (
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
