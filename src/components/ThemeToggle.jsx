import { useEffect, useState } from "react";

// `null` means "follow the OS". We only write an explicit theme once the
// visitor actually clicks, so the site keeps tracking system changes until then.
function readStored() {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || saved === "light" ? saved : null;
  } catch {
    return null;
  }
}

function systemPrefersDark() {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export default function ThemeToggle() {
  const [choice, setChoice] = useState(readStored);
  const [systemDark, setSystemDark] = useState(systemPrefersDark);

  // Track the OS preference while we are following it.
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;
    const onChange = (e) => setSystemDark(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (choice) root.setAttribute("data-theme", choice);
    else root.removeAttribute("data-theme");

    try {
      if (choice) localStorage.setItem("theme", choice);
      else localStorage.removeItem("theme");
    } catch {
      /* private mode — the toggle still works for this session */
    }
  }, [choice]);

  const effective = choice ?? (systemDark ? "dark" : "light");
  const next = effective === "dark" ? "light" : "dark";

  return (
    <button
      className="toggle"
      onClick={() => setChoice(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {effective === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
