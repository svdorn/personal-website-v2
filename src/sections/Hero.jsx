import { profile } from "../data";
import Social from "../components/Social";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <div className="hero__id">
          <img
            className="hero__photo"
            src={profile.photo}
            alt={profile.name}
            width="116"
            height="116"
          />
          <div>
            <div className="hero__eyebrow">
              <span>{profile.role}</span>
              <span className="hero__dot" aria-hidden="true">
                /
              </span>
              <a
                href={profile.affiliationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.affiliation}
              </a>
            </div>
            <h1 className="hero__name">{profile.name}</h1>
          </div>
        </div>

        <p className="hero__lede">
          I am a PhD student at UCLA in the{" "}
          <a
            href={profile.affiliationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Computational Medicine Department
          </a>
          , working with{" "}
          {profile.advisors.map((advisor, i) => (
            <span key={advisor.href}>
              {i > 0 && " and "}
              <a href={advisor.href} target="_blank" rel="noopener noreferrer">
                {advisor.name}
              </a>
            </span>
          ))}
          .
        </p>

        <Social />
      </div>
    </section>
  );
}
