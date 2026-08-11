"use client";

const FOOTER_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center font-serif font-semibold text-lg">
                O
              </span>
              <span className="font-serif text-lg">Owaiz Yusufi</span>
            </a>
            <p className="text-cream/50 text-sm mt-3 max-w-xs">
              Senior frontend developer — clean interfaces, performant builds.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-cream/60 hover:text-cream transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-start gap-3">
            <a
              href="https://linkedin.com/in/owaiz-yusufi-a6621848"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
              target="_blank"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zM8.5 8.25h4.31v2.02h.06c.6-1.13 2.07-2.32 4.26-2.32 4.55 0 5.39 3 5.39 6.89V23H18v-6.8c0-1.62-.03-3.7-2.26-3.7-2.27 0-2.62 1.77-2.62 3.6V23H8.5V8.25z" />
              </svg>
            </a>
            <a
              href="https://github.com/Yusufzai"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
              target="_blank"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.5 0 12.29c0 5.42 3.44 10.02 8.2 11.65.6.11.82-.27.82-.6v-2.1c-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.34-1.83-1.34-1.83-1.1-.77.08-.75.08-.75 1.21.09 1.85 1.28 1.85 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.67-.31-5.47-1.38-5.47-6.13 0-1.36.47-2.46 1.24-3.33-.12-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.27a11.2 11.2 0 016 0c2.29-1.6 3.3-1.27 3.3-1.27.66 1.71.24 2.97.12 3.28.77.87 1.24 1.97 1.24 3.33 0 4.76-2.81 5.82-5.48 6.12.43.38.81 1.13.81 2.29v3.39c0 .33.22.72.83.6C20.57 22.3 24 17.71 24 12.29 24 5.5 18.63 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            © {new Date().getFullYear()} Owaiz Yusufi. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
