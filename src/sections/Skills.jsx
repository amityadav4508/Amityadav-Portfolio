import SectionTitle from "../components/SectionTitle";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Tech Stack" title="Tools I work with." />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-zinc-200 p-7 dark:border-zinc-800">
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full bg-zinc-100 px-3 py-2 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
