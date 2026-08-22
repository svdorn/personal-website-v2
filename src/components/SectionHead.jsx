export default function SectionHead({ eyebrow, title, id }) {
  return (
    <div className="section__head">
      <span className="section__eyebrow">{eyebrow}</span>
      <h2 className="section__title" id={id}>
        {title}
      </h2>
      <span className="section__rule" aria-hidden="true" />
    </div>
  );
}
