import { useEffect, useState } from "react";
import { navItems, profile } from "../data";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header" data-scrolled={scrolled}>
      <div className="shell header__inner">
        <a className="header__mark" href="#top">
          <img src="/images/dna.svg" alt="" aria-hidden="true" />
          {profile.name}
        </a>
        <nav className="header__nav" aria-label="Sections">
          {navItems.map((item) => (
            <a key={item.name} className="header__link" href={item.link}>
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
