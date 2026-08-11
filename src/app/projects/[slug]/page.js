import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import LikeButton from "@/components/LikeButton";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="pt-32 pb-24 md:pt-40">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        <Reveal as="div">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted dark:text-white/60 hover:text-ink dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="font-serif mt-6 text-4xl sm:text-5xl leading-[1.1]">{project.name}</h1>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-3 text-muted dark:text-white/60 text-base md:text-lg max-w-2xl">{project.tagline}</p>
        </Reveal>

        {/* header media: image by default — swap for a <video> if needed */}
        <Reveal delay={2} className="mt-8 rounded-2xl overflow-hidden border border-line dark:border-white/10">
          <Image
            src={project.image}
            alt={`${project.name} — project header image`}
            width={project.imageWidth}
            height={project.imageHeight}
            sizes="100vw"
            className="w-full h-auto"
          />
        </Reveal>

        {/* actions */}
        <Reveal delay={3} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={project.viewUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-dark hover:scale-[1.03] transition-all"
          >
            View Project
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line dark:border-white/15 text-sm font-medium hover:bg-black/[0.03] dark:hover:bg-white/5 transition-colors"
            >
              GitHub Link
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.5 0 12.29c0 5.42 3.44 10.02 8.2 11.65.6.11.82-.27.82-.6v-2.1c-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.34-1.83-1.34-1.83-1.1-.77.08-.75.08-.75 1.21.09 1.85 1.28 1.85 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.67-.31-5.47-1.38-5.47-6.13 0-1.36.47-2.46 1.24-3.33-.12-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.27a11.2 11.2 0 016 0c2.29-1.6 3.3-1.27 3.3-1.27.66 1.71.24 2.97.12 3.28.77.87 1.24 1.97 1.24 3.33 0 4.76-2.81 5.82-5.48 6.12.43.38.81 1.13.81 2.29v3.39c0 .33.22.72.83.6C20.57 22.3 24 17.71 24 12.29 24 5.5 18.63 0 12 0z" />
              </svg>
            </a>
          )}

          <LikeButton slug={project.slug} type="project" baseCount={project.baseLikes} />
        </Reveal>

        {/* skills */}
        <Reveal delay={3} className="mt-10 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center text-xs font-medium px-3.5 py-1.5 rounded-full border border-line dark:border-white/15 text-muted dark:text-white/70"
            >
              {skill}
            </span>
          ))}
        </Reveal>

        {/* description */}
        <Reveal delay={4} className="mt-10">
          <h2 className="font-serif text-2xl">Project Description</h2>
          <div className="mt-4 space-y-4 text-muted dark:text-white/60 leading-relaxed max-w-2xl">
            {project.description.map((para, i) =>
              typeof para === "string" ? (
                <p key={i}>{para}</p>
              ) : (
                <p key={i} dangerouslySetInnerHTML={{ __html: para.html }} />
              )
            )}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
