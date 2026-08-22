import { Fragment } from "react";
import { publications } from "../data";
import SectionHead from "../components/SectionHead";

// Render "A, **B**, C" with the starred segments bold.
function Authors({ value }) {
  return (
    <p className="pub__authors">
      {value.split("**").map((part, i) =>
        i % 2 === 1 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>
      )}
    </p>
  );
}

function groupByYear(list) {
  const groups = [];
  for (const pub of list) {
    const last = groups[groups.length - 1];
    if (last && last.year === pub.year) last.items.push(pub);
    else groups.push({ year: pub.year, items: [pub] });
  }
  return groups;
}

export default function Publications() {
  const groups = groupByYear(publications);

  return (
    <section className="section section--sunken" id="publications">
      <div className="shell">
        <SectionHead eyebrow="Selected work" title="Publications" />

        <div className="pubs">
          {groups.map((group) => (
            <div className="pubyear" key={group.year}>
              <div className="pubyear__label">{group.year}</div>
              <div className="pubyear__list">
                {group.items.map((pub) => (
                  <article
                    key={pub.name}
                    className={`pub${pub.featured ? " pub--featured" : ""}`}
                  >
                    <h3 className="pub__title">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pub.name}
                      </a>
                    </h3>
                    <Authors value={pub.authors} />
                    <div className="pub__venue">{pub.journal}</div>
                    <div className="chips">
                      {pub.published_journal && (
                        <a
                          className="chip chip--solid"
                          href={pub.published_journal}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Journal
                        </a>
                      )}
                      {pub.preprint && (
                        <a
                          className="chip"
                          href={pub.preprint}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Preprint
                        </a>
                      )}
                      {pub.software && (
                        <a
                          className="chip chip--code"
                          href={pub.software.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.software.name}
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="pubs__note">
          <b>*</b> indicates authors with equal contribution.
        </p>
      </div>
    </section>
  );
}
