import { Cloud, GitBranch, Github, Rocket, ShieldCheck } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const items = [
  [GitBranch, "Git & GitHub", "Version control, branching and collaborative workflows."],
  [Github, "GitHub Actions", "Automated build, test and deployment workflows."],
  [Rocket, "CI/CD", "Streamlined releases through automated delivery pipelines."],
  [Cloud, "AWS", "Application deployment and cloud-based delivery experience."],
  [ShieldCheck, "Production Mindset", "Build, test, deploy, troubleshoot and maintain frontend applications."],
];

export default function DevOps() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Frontend DevOps" title="From code to production." />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(([Icon, title, text]) => (
            <div key={title} className="rounded-3xl bg-zinc-100 p-6 dark:bg-zinc-900">
              <Icon size={22} />
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
