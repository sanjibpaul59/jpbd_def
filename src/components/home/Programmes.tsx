"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { programmes } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function Programmes() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const shown: Record<string, boolean> = {};
      for (const programme of programmes) {
        if (programme.points) {
          shown[programme.title] = true;
        }
      }
      setRevealed(shown);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) {
            return;
          }
          const title = entry.target.dataset.title;
          if (title) {
            setRevealed((current) => ({ ...current, [title]: true }));
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll<HTMLElement>(".point-list").forEach((list) => {
      observer.observe(list);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="programmes" className="section" aria-labelledby="programmes-title">
      <div className="wrap">
        <SectionIntro
          kicker="Programmes"
          title="Culture, education, youth, and sustainable development"
          titleId="programmes-title"
        />
        <div className="programme-list">
          {programmes.map((programme, index) => (
            <article
              key={programme.title}
              className={
                index % 2 === 1 ? "programme-row programme-row-flip" : "programme-row"
              }
            >
              <img
                className="split-media"
                src={programme.src}
                alt={programme.alt}
                width={1152}
                height={864}
              />
              <div className="programme-copy">
                <h3>{programme.title}</h3>
                {programme.summary ? <p>{programme.summary}</p> : null}
                {programme.points ? (
                  <ul
                    className={
                      revealed[programme.title] ? "point-list is-shown" : "point-list"
                    }
                    data-title={programme.title}
                  >
                    {programme.points.map((point, pointIndex) => (
                      <li
                        key={point}
                        style={{ "--i": pointIndex } as CSSProperties}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
