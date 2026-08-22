import { social } from "../data";

export default function Social({ className = "" }) {
  return (
    <div className={`social ${className}`.trim()}>
      {social.map((item) => (
        <a
          key={item.name}
          className="social__link"
          href={item.href}
          target={item.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
        >
          <img src={`/images/social/${item.name}.svg`} alt="" aria-hidden="true" />
          {item.label}
        </a>
      ))}
    </div>
  );
}
