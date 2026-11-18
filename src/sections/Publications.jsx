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

// Inline so it picks up the chip's text color in both themes and on hover.
function GitHubMark() {
  return (
    <svg className="chip__icon" viewBox="0 0 98 96" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      />
    </svg>
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
                    // Anything that made it into a journal gets the
                    // headline-venue treatment.
                    className={`pub${
                      pub.published_journal ? " pub--featured" : ""
                    }`}
                  >
                    <h3 className="pub__title">
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pub.name}
                        </a>
                      ) : (
                        pub.name
                      )}
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
                      {pub.workshop && (
                        <a
                          className="chip chip--accent"
                          href={pub.workshop}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Workshop
                        </a>
                      )}
                      {/* Once a paper is in a journal, the preprint is noise. */}
                      {pub.preprint && !pub.published_journal && (
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
                          <GitHubMark />
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
