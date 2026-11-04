import type { CopyProps } from "@/src/data/site";

export function Closing({ copy }: CopyProps) {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <div className="wrap closing-inner">
        <h2 id="closing-title">{copy.closing.title}</h2>
        <p className="closing-pair">{copy.closing.pair}</p>
        <p>{copy.closing.body}</p>
        <p className="tagline">{copy.tagline}</p>
      </div>
    </section>
  );
}
