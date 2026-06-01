"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const DARK = "nightblue";
const LIGHT = "dayblue";
const STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): string {
  if (typeof window === "undefined") return DARK;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === DARK || stored === LIGHT) return stored;
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  return prefersLight ? LIGHT : DARK;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(DARK);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === DARK ? LIGHT : DARK;
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable; theme still applies for the session */
    }
  };

  const isDark = theme === DARK;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="btn btn-circle btn-ghost border border-base-content/10 hover:border-primary/40"
    >
      {/* Avoid hydration mismatch: render a stable icon until mounted */}
      <span className="swap swap-rotate" aria-hidden>
        {mounted && isDark ? (
          <MoonIcon className="h-5 w-5" />
        ) : (
          <SunIcon className="h-5 w-5" />
        )}
      </span>
    </button>
  );
}
