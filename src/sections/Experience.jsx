import { Briefcase } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Experience" title="Professional journey." />

        <div className="space-y-6">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="grid gap-5 rounded-3xl border border-zinc-200 p-7 md:grid-cols-[220px_1fr] dark:border-zinc-800">
              <div>
                <p className="text-sm font-medium text-zinc-500">{item.dates}</p>
                <p className="mt-2 text-sm text-zinc-500">{item.location}</p>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Briefcase size={18} className="text-zinc-400" />
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                </div>
                <p className="mt-1 font-medium text-zinc-500">{item.company}</p>

                <ul className="mt-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
