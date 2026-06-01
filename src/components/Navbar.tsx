"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 rounded-box px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "bg-base-100/80 shadow-lg shadow-primary/5 ring-1 ring-base-content/10 backdrop-blur-xl"
            : "bg-transparent"
        } w-[calc(100%-1.5rem)]`}
      >
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-bold text-primary-content shadow-md shadow-primary/30">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-field px-3 py-2 text-sm font-medium text-base-content/70 transition-colors hover:bg-base-content/5 hover:text-base-content"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Let&apos;s talk
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn btn-circle btn-ghost border border-base-content/10 md:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 w-[calc(100%-1.5rem)] max-w-6xl rounded-box bg-base-100/95 p-2 shadow-xl ring-1 ring-base-content/10 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-field px-4 py-3 text-sm font-medium text-base-content/80 transition-colors hover:bg-base-content/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary btn-sm mt-1"
            >
              Let&apos;s talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
