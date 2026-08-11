"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SECTION_IDS = ["home", "about", "skills", "achievements", "projects", "contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);

  // Keep local dark-mode state in sync with the class set by the
  // beforeInteractive theme-init script in the root layout. This must run
  // in an effect since the class is only known client-side after that
  // script runs — there's nothing to derive during render/SSR.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Navbar background: on past 20px scroll, OR whenever the mobile menu is open
  // (fixes the "transparent nav behind the open mobile menu at scrollY 0" bug).
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20 || menuOpen);
    }
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Scroll-spy: highlight the nav link for whichever section is in view.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  function closeMobileMenu() {
    setMenuOpen(false);
  }

  const navBg = scrolled
    ? "bg-cream/90 dark:bg-ink/90 backdrop-blur-md shadow-sm"
    : "";

  return (
    <header
      id="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center font-serif font-semibold text-lg">
              O
            </span>
            <span className="font-serif text-lg tracking-tight">Owaiz Yusufi</span>
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm text-muted dark:text-white/60 hover:text-ink dark:hover:text-white transition-colors ${
                  activeSection === link.href.slice(1) ? "active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-10 h-10 rounded-full border border-line dark:border-white/10 flex items-center justify-center text-ink dark:text-cream hover:bg-black/[0.03] dark:hover:bg-white/5 transition-colors"
            >
              <ThemeIcon isDark={isDark} />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-dark hover:scale-[1.03] transition-all"
            >
              Start a Project
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-10 h-10 rounded-full border border-line dark:border-white/10 flex items-center justify-center text-ink dark:text-cream hover:bg-black/[0.03] dark:hover:bg-white/5 transition-colors"
            >
              <ThemeIcon isDark={isDark} />
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-line dark:border-white/10 text-ink dark:text-cream"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`mobile-menu md:hidden bg-cream/95 dark:bg-ink/95 backdrop-blur-md ${menuOpen ? "open" : ""}`}>
          <div className="flex flex-col gap-1 pb-6 pt-2 border-t border-line dark:border-white/10 px-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="px-2 py-3 text-sm text-muted dark:text-white/60 hover:text-ink dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-3 text-center px-5 py-3 rounded-full bg-accent text-white text-sm font-medium"
            >
              Start a Project
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function ThemeIcon({ isDark }) {
  return isDark ? (
    <svg className="w-[18px] h-[18px]" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ) : (
    <svg className="w-[18px] h-[18px]" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}
