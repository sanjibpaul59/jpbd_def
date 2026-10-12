import { forumName, hero, tagline } from "@/src/data/site";
import { Carousel } from "@/src/components/home/Carousel";

export function Hero() {
  return (
    <section className="landing" aria-labelledby="hero-title">
      <Carousel />
      <div className="wrap landing-intro">
        <img
          className="landing-logo"
          src="/assets/logo_jpbddef.jpeg"
          alt=""
          width={1254}
          height={1254}
        />
        <h1 id="hero-title">{forumName}</h1>
        <p className="tagline">{tagline}</p>
        <p className="lead">{hero.lead}</p>
        <a className="text-link" href={hero.ctaHref}>
          {hero.ctaLabel}
        </a>
      </div>
    </section>
  );
}
