import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Featured Work"
          title="Projects that show how I build."
          text="A selection of production-oriented applications and interfaces from my experience."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className="group rounded-3xl border border-zinc-200 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:hover:shadow-black/20">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-sm text-zinc-500">0{index + 1} / {project.type}</span>
                  <h3 className="mt-2 text-2xl font-bold">{project.name}</h3>
                </div>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" className="rounded-full border border-zinc-200 p-2 dark:border-zinc-700">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <p className="mt-5 min-h-20 leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium dark:bg-zinc-900">
                    {tech}
                  </span>
                ))}
              </div>

              {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium">
                  Visit project <ArrowUpRight size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
