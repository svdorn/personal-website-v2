import { social } from "../data";
import { CVIcon, EmailIcon, GitHubIcon, ScholarIcon, XIcon } from "./Icons";

const icons = {
  googlescholar: ScholarIcon,
  cv: CVIcon,
  github: GitHubIcon,
  twitter: XIcon,
  email: EmailIcon,
};

export default function Social({ className = "" }) {
  return (
    <div className={`social ${className}`.trim()}>
      {social.map((item) => {
        const Icon = icons[item.name];
        return (
          <a
            key={item.name}
            className="social__link"
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            <Icon className="social__icon" />
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
