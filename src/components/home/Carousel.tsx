"use client";

import { useEffect, useRef, useState } from "react";
import { slides } from "@/src/data/site";

export function Carousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const timer = useRef(0);

  function show(next: number): void {
    const count = slides.length;
    if (count === 0) {
      return;
    }
    const value = (next + count) % count;
    indexRef.current = value;
    setIndex(value);
  }

  function start(): void {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || slides.length < 2 || timer.current) {
      return;
    }
    timer.current = window.setInterval(() => show(indexRef.current + 1), 7000);
  }

  function stop(): void {
    window.clearInterval(timer.current);
    timer.current = 0;
  }

  useEffect(() => {
    start();
    return stop;
  }, []);

  const active = slides[index] ?? slides[0];

  return (
    <div
      className="carousel"
      data-carousel
      onMouseEnter={stop}
      onMouseLeave={start}
      onFocus={stop}
      onBlur={start}
    >
      <div className="carousel-viewport">
        {slides.map((slide, slideIndex) => (
          <figure
            key={slide.src}
            className={
              slideIndex === index ? "carousel-slide is-active" : "carousel-slide"
            }
            data-slide
          >
            <img src={slide.src} alt={slide.alt} width={1280} height={720} />
          </figure>
        ))}
      </div>
      <div className="carousel-bar">
        <div className="carousel-copy">
          <p className="carousel-kicker">{active.kicker}</p>
          <p className="carousel-caption">{active.caption}</p>
        </div>
        <div className="carousel-controls">
          <button
            type="button"
            data-prev
            aria-label="Previous photograph"
            onClick={() => show(index - 1)}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <div className="carousel-dots">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.kicker}
                type="button"
                className={
                  slideIndex === index ? "carousel-dot is-active" : "carousel-dot"
                }
                aria-label={slide.kicker}
                aria-pressed={slideIndex === index}
                onClick={() => show(slideIndex)}
              />
            ))}
          </div>
          <button
            type="button"
            data-next
            aria-label="Next photograph"
            onClick={() => show(index + 1)}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
