import type { ImageBreak as ImageBreakContent } from "@/src/data/site";

type ImageBreakProps = {
  item: ImageBreakContent;
};

export function ImageBreak({ item }: ImageBreakProps) {
  return (
    <figure className="image-break">
      <img src={item.src} alt={item.alt} width={1280} height={720} />
      <figcaption>{item.caption}</figcaption>
    </figure>
  );
}
