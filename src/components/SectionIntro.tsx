type SectionIntroProps = {
  kicker: string;
  title: string;
  titleId: string;
};

export function SectionIntro({ kicker, title, titleId }: SectionIntroProps) {
  return (
    <>
      <p className="kicker">{kicker}</p>
      <h2 id={titleId}>{title}</h2>
    </>
  );
}
