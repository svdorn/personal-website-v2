import { Analytics } from "@vercel/analytics/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Research from "./sections/Research";
import Publications from "./sections/Publications";
import Software from "./sections/Software";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Research />
        <Publications />
        <Software />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
