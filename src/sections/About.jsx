import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About Me"
          title="Turning requirements into scalable interfaces."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800">
            <p className="text-2xl font-semibold leading-9">
              React.js Developer focused on clean UI, reusable components and
              practical frontend performance.
            </p>
          </div>

          <div className="space-y-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <p>I have 3+ years of experience working on production web applications across e-commerce and LMS platforms.</p>
            <p>My experience includes REST API integration, Redux and Context API, reusable UI components, authentication and real-time features.</p>
            <p>I also work with GitHub-based CI/CD workflows and cloud deployment environments including AWS.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
