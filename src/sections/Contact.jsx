import { profile } from "../data";
import Social from "../components/Social";

export default function Contact() {
  return (
    <section className="section section--sunken contact" id="contact">
      <div className="shell">
        <h2 className="contact__title">Get in touch</h2>
        <p className="contact__body">
          Please feel free to contact me for any reason — I&rsquo;d love to talk!
        </p>
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <Social className="contact__social" />
      </div>
    </section>
  );
}
