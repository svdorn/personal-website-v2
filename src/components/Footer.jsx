import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          Built with{" "}
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            Vite
          </a>{" "}
          &amp;{" "}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>
        </span>
      </div>
    </footer>
  );
}
