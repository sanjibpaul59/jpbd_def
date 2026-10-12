import { gatherings, standingGatherings } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function Gatherings() {
  return (
    <section id="events" className="section" aria-labelledby="events-title">
      <div className="wrap">
        <SectionIntro kicker="Events" title="Upcoming gatherings" titleId="events-title" />
        <p className="measure">
          The Forum brings people together through forums, policy dialogues, academic
          exchange, and cultural meetings between Japan and Bangladesh.
        </p>
        {gatherings.length > 0 ? (
          <div className="event-grid">
            {gatherings.map((item) => (
              <article key={item.title} className="event-card">
                <img src={item.src} alt={item.alt} width={1280} height={720} />
                <div className="event-body">
                  <p className="schedule-when">
                    {item.when} · {item.place}
                  </p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        ) : null}
        <div className="pillar-grid standing-grid">
          {standingGatherings.map((item) => (
            <article key={item.title} className="pillar pillar-note">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
