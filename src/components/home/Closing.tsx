import { closing, tagline } from "@/src/data/site";

export function Closing() {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <div className="wrap closing-inner">
        <h2 id="closing-title">{closing.title}</h2>
        <p className="closing-pair">{closing.pair}</p>
        <p>{closing.body}</p>
        <p className="tagline">{tagline}</p>
      </div>
    </section>
  );
}
