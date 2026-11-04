import { hashHref, type CopyProps } from "@/src/data/site";
import { Carousel } from "@/src/components/home/Carousel";

export function Hero({ copy }: CopyProps) {
  return (
    <section className="landing" aria-labelledby="hero-title">
      <Carousel copy={copy} />
      <div className="wrap landing-intro">
        <img
          className="landing-logo"
          src="/assets/logo_jpbddef.jpeg"
          alt=""
          width={1254}
          height={1254}
        />
        <h1 id="hero-title">{copy.forumName}</h1>
        <p className="tagline">{copy.tagline}</p>
        <p className="lead">{copy.hero.lead}</p>
        <a className="text-link" href={hashHref(copy.locale, copy.hero.ctaHash)}>
          {copy.hero.ctaLabel}
        </a>
      </div>
    </section>
  );
}
