import type { CopyProps } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function News({ copy }: CopyProps) {
  return (
    <section id="news" className="section section-ivory" aria-labelledby="news-title">
      <div className="wrap split">
        <img
          className="split-media"
          src={copy.news.src}
          alt={copy.news.alt}
          width={1152}
          height={864}
        />
        <div>
          <SectionIntro kicker={copy.news.kicker} title={copy.news.title} titleId="news-title" />
          <p>{copy.news.body}</p>
          {copy.bulletin.length > 0 ? (
            <ul className="schedule">
              {copy.bulletin.map((item) => (
                <li key={item.title}>
                  <p className="schedule-when">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
