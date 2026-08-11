import Reveal from "./Reveal";
import { skillCategories } from "@/lib/skills";

function SkillIcon({ viewBox, paths }) {
  return (
    <svg
      role="img"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7 fill-current text-ink dark:text-cream"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

export default function SkillsGrid() {
  return (
    <>
      {skillCategories.map((cat, ci) => (
        <div key={cat.name} className={`mt-12 ${ci === 0 ? "first:mt-0" : ""}`}>
          <h3 className="reveal font-serif text-xl mb-5">{cat.name}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cat.skills.map((skill) => (
              <Reveal
                key={skill.name}
                className="rounded-2xl p-5 flex flex-col items-center text-center gap-3 group transition-all duration-200 ease-in-out bg-slate-900/5 dark:bg-white/3 border border-white/10 hover:bg-fuchsia-100 hover:border-fuchsia-200 hover:dark:bg-fuchsia-800/25 hover:dark:border-fuchsia-500"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <SkillIcon viewBox={skill.viewBox} paths={skill.paths} />
                </div>
                {skill.percent && (
                  <span className="font-semibold text-xl">{skill.percent}</span>
                )}
                <span className="transition-all duration-200 ease-in-out text-sm font-medium tracking-wider sm:text-base text-fuchsia-700 group-hover:text-slate-800 dark:text-fuchsia-300 group-hover:dark:text-white">
                  {skill.name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
