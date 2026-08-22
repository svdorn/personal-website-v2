import { research } from "../data";
import SectionHead from "../components/SectionHead";

export default function Research() {
  return (
    <section className="section" id="research">
      <div className="shell">
        <SectionHead eyebrow="What I work on" title="Research" />
        <div className="cards">
          {research.map((area, i) => (
            <a
              key={area.name}
              className="card card--link"
              href="#publications"
            >
              <span className="card__index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="card__title">{area.name}</h3>
              <p className="card__body">{area.description}</p>
              <span className="card__cta">
                Related work <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
