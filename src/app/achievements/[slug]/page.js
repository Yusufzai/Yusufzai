import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { achievements, getAchievement } from "@/lib/achievements";

export function generateStaticParams() {
  return achievements.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cert = getAchievement(slug);
  if (!cert) return {};
  return {
    title: cert.name,
    description: `${cert.name}, issued by ${cert.issuer} (${cert.year}).`,
  };
}

export default async function AchievementPage({ params }) {
  const { slug } = await params;
  const cert = getAchievement(slug);
  if (!cert) notFound();

  return (
    <main className="pt-32 pb-24 md:pt-40">
      <div className="max-w-[820px] mx-auto px-6 md:px-10">
        <Reveal>
          <Link
            href="/#achievements"
            className="inline-flex items-center gap-2 text-sm text-muted dark:text-white/60 hover:text-ink dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to achievements
          </Link>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="font-serif mt-6 text-4xl sm:text-5xl leading-[1.1]">{cert.name}</h1>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-3 text-muted dark:text-white/60 text-base md:text-lg">
            Issued by <span className="font-medium text-ink dark:text-cream">{cert.issuer}</span> — {cert.year}
          </p>
        </Reveal>

        {/* certificate image */}
        <Reveal delay={2} className="mt-8 rounded-3xl border border-line dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-4 sm:p-6">
          <Image
            src={cert.image}
            alt={`${cert.name} certificate`}
            width={cert.imageWidth}
            height={cert.imageHeight}
            sizes="(max-width: 820px) 100vw, 820px"
            className="max-w-full h-auto rounded-xl mx-auto block"
            style={{ maxHeight: "80vh", width: "auto" }}
          />
        </Reveal>

        {/* download */}
        {/* <Reveal delay={3} className="mt-8">
          <a
            href={cert.pdf}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-dark hover:scale-[1.03] transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
            Download Certificate (PDF)
          </a>
        </Reveal> */}
      </div>
    </main>
  );
}
