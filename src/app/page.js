import Image from "next/image";
import Reveal from "@/components/Reveal";
import SkillsGrid from "@/components/SkillsGrid";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/lib/projects";
import { achievements } from "@/lib/achievements";

const ArrowIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
  </svg>
);

export default function Home() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="rounded-4xl bg-white/60 dark:bg-white/3 border border-line dark:border-white/10 px-6 py-10 md:p-14 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 md:gap-10 items-center">
              {/* text */}
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted dark:text-white/60 font-medium border border-line dark:border-white/10 rounded-full px-4 py-2 bg-white dark:bg-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Owaiz Yusufi
                </span>

                <h1 className="font-serif mt-6 text-[2.6rem] leading-[1.08] sm:text-5xl md:text-[3.4rem] md:leading-[1.08]">
                  <span className="block text-ink dark:text-cream font-semibold">Built With Purpose,</span>
                  <span className="block text-muted dark:text-white/50 font-medium">Engineered With Precision.</span>
                </h1>

                <p className="mt-6 text-muted dark:text-white/60 text-base md:text-lg leading-relaxed max-w-md">
                  {"I'm a senior frontend developer with 9+ years of experience building clean, performant interfaces for brands, products, and teams, with full-stack capability across Laravel, Next.js, and PHP."}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-8">
                  <a
                    href="#projects"
                    className="inline-flex items-center px-7 py-3.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-dark hover:scale-[1.03] transition-all"
                  >
                    View Projects
                  </a>
                  <div>
                    <p className="font-serif text-2xl leading-none">9+ Years</p>
                    <p className="text-muted text-sm mt-1 dark:text-white/60">Experience</p>
                  </div>
                </div>
              </Reveal>

              {/* portrait */}
              <Reveal delay={2} className="relative">
                <div className="absolute -inset-6 -z-10 bg-line/60 dark:bg-white/5 rounded-[2.5rem] rotate-2"></div>
                <div className="relative rounded-[2.25rem] overflow-hidden aspect-[4/5]">
                  <Image
                    src="/images/profile.png"
                    alt="Owaiz Yusufi"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* floating badge */}
                <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:w-[280px] bg-charcoal grain-dark text-cream rounded-2xl p-5 shadow-xl flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-cream/50">Status</p>
                    <p className="font-serif text-base mt-0.5">Available for new opportunities</p>
                  </div>
                  <a
                    href="#contact"
                    aria-label="Go to contact section"
                    className="shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:scale-110 hover:bg-accent-dark transition-all"
                  >
                    <ArrowIcon className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-muted dark:text-white/60 font-medium border border-line dark:border-white/10 rounded-full px-4 py-2 bg-white dark:bg-white/5">
                About Me
              </span>
              <h2 className="font-serif mt-6 text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.15]">
                Good Code Starts With
                <br className="hidden sm:block" /> Clear Thinking.
              </h2>
              <p className="mt-6 text-muted dark:text-white/60 leading-relaxed max-w-lg">
                {"I'm a senior frontend developer with 9+ years of experience building refined, performant websites and digital products, shaped by clarity, structure, and clean code, from first implementation to final polish. I also lean on AI-assisted workflows like Claude Code to move faster, while keeping architecture and quality decisions firmly in my hands."}
              </p>
              <p className="font-script text-3xl mt-6 text-ink/80 dark:text-cream/80">Owaiz Yusufi</p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              <Reveal delay={1} className="bg-white dark:bg-white/5 border border-line dark:border-white/10 rounded-2xl p-5">
                <svg className="w-6 h-6 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 21 12 17.27 5.8 21 7 14.14 2 9.27l7.1-1.01L12 2z" />
                </svg>
                <p className="font-semibold text-sm">9+ Years</p>
                <p className="text-muted text-xs mt-1 leading-relaxed dark:text-white/60">Building for the web since 2017</p>
              </Reveal>
              <Reveal delay={2} className="bg-white dark:bg-white/5 border border-line dark:border-white/10 rounded-2xl p-5">
                <svg className="w-6 h-6 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-semibold text-sm">Full-Stack Capability</p>
                <p className="text-muted text-xs mt-1 leading-relaxed dark:text-white/60">Strong front-end focus, with working experience across the backend</p>
              </Reveal>
              <Reveal delay={3} className="bg-white dark:bg-white/5 border border-line dark:border-white/10 rounded-2xl p-5 sm:col-span-2">
                <svg className="w-6 h-6 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-semibold text-sm">Available</p>
                <p className="text-muted text-xs mt-1 leading-relaxed dark:text-white/60">
                  Currently open for new frontend &amp; full-stack development projects
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section id="skills" className="py-20 md:py-28 bg-white/60 dark:bg-white/[0.03] border-y border-line dark:border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal className="max-w-xl">
            <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-muted dark:text-white/60 font-medium border border-line dark:border-white/10 rounded-full px-4 py-2 bg-white dark:bg-white/5">
              What I Work With
            </span>
            <h2 className="font-serif mt-6 text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.15]">Tools &amp; Technologies I Use</h2>
            <p className="mt-4 text-muted dark:text-white/60 leading-relaxed">
              A working set of languages, tools, and infrastructure I reach for on every project.
            </p>
          </Reveal>

          <SkillsGrid />
        </div>
      </section>

      {/* ============ ACHIEVEMENTS ============ */}
      <section id="achievements" className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-muted dark:text-white/60 font-medium border border-line dark:border-white/10 rounded-full px-4 py-2 bg-white dark:bg-white/5">
              Achievements
            </span>
            <h2 className="font-serif mt-6 text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.15]">Certifications</h2>
            <p className="mt-4 text-muted dark:text-white/60 leading-relaxed">
              A selection of certifications from my academic and early technical training.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((cert, i) => (
              <Reveal key={cert.slug} delay={i % 2 === 0 ? undefined : 1}>
                <a href={`/achievements/${cert.slug}`} target="_blank" rel="noopener" className="group block">
                  <div className="relative rounded-2xl overflow-hidden border border-line dark:border-white/10">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={cert.cardImage}
                        alt={`${cert.name} certification`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a5 5 0 100-10 5 5 0 000 10z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-1 mt-3">
                    <div>
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-muted dark:text-white/50 text-xs mt-0.5">
                        {cert.issuer} &amp; {cert.year}
                      </p>
                    </div>
                    <span
                      aria-label="View certificate"
                      className="w-8 h-8 rounded-full border border-line dark:border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors shrink-0"
                    >
                      <ArrowIcon />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal className="max-w-xl">
            <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-muted dark:text-white/60 font-medium border border-line dark:border-white/10 rounded-full px-4 py-2 bg-white dark:bg-white/5">
              Projects
            </span>
            <h2 className="font-serif mt-6 text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.15]">Selected Work With Clear Direction</h2>
            <p className="mt-4 text-muted dark:text-white/60 leading-relaxed">
              A curated collection of web design and development work, shaped through strategy, clarity, and refined execution.
            </p>
          </Reveal>

          <div className="relative mt-10 grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i % 2 === 0 ? undefined : 1}>
                <a href={`/projects/${project.slug}`} target="_blank" rel="noopener" className="group block">
                  <div className="rounded-2xl overflow-hidden border border-line dark:border-white/10">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={project.image}
                        alt={`${project.name} — project preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-2 mt-3">
                    <p className="font-medium text-sm">{project.name}</p>
                    <span className="w-8 h-8 rounded-full border border-line dark:border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                      <ArrowIcon />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="py-20 md:py-28 bg-white/60 dark:bg-white/[0.03] border-y border-line dark:border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal className="max-w-xl">
            <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-muted dark:text-white/60 font-medium border border-line dark:border-white/10 rounded-full px-4 py-2 bg-white dark:bg-white/5">
              Contact
            </span>
            <h2 className="font-serif mt-6 text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.15]">Let&apos;s Talk About Your Next Project</h2>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <Reveal className="bg-white dark:bg-white/5 border border-line dark:border-white/10 rounded-3xl p-6 sm:p-8">
              <ContactForm />
            </Reveal>

            <Reveal delay={1} className="relative bg-charcoal text-cream rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col">
              <div className="smoke" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="relative">
                <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                  <ArrowIcon />
                </span>
                <p className="font-serif text-2xl mt-8">Open to new opportunities</p>
              </div>

              <div className="relative mt-auto pt-10 space-y-5">
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <svg className="w-4 h-4 text-cream/60 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-xs text-cream/50">Email</p>
                    <p className="text-sm font-medium">owaizyusufi@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <svg className="w-4 h-4 text-cream/60 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                  <div>
                    <p className="text-xs text-cream/50">Location</p>
                    <p className="text-sm font-medium">Uttar Pradesh, Lucknow</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <svg className="w-4 h-4 text-cream/60 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                  </svg>
                  <div>
                    <p className="text-xs text-cream/50">Response time</p>
                    <p className="text-sm font-medium">Within 32 hours</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
