import { profile } from "../data";
import Social from "../components/Social";

export default function Contact() {
  return (
    <section className="section section--sunken contact" id="contact">
      <div className="shell">
        <h2 className="contact__title">Get in touch</h2>
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <Social className="contact__social" />
      </div>
    </section>
  );
}
