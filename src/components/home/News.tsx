import { bulletin, news } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function News() {
  return (
    <section id="news" className="section section-ivory" aria-labelledby="news-title">
      <div className="wrap split">
        <img className="split-media" src={news.src} alt={news.alt} width={1152} height={864} />
        <div>
          <SectionIntro kicker="News" title={news.title} titleId="news-title" />
          <p>{news.body}</p>
          {bulletin.length > 0 ? (
            <ul className="schedule">
              {bulletin.map((item) => (
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
