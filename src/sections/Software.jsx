import { software } from "../data";
import SectionHead from "../components/SectionHead";

export default function Software() {
  return (
    <section className="section" id="software">
      <div className="shell">
        <SectionHead eyebrow="Open source" title="Software" />
        <div className="cards">
          {software.map((tool) => (
            <a
              key={tool.name}
              className="card card--link"
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="card__name-mono">{tool.name}</span>
              <p className="card__body">{tool.description}</p>
              <span className="card__cta">
                View on GitHub <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
