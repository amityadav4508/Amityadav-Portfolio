import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-zinc-900 p-8 text-white sm:p-12 dark:bg-white dark:text-zinc-900">
          <p className="text-sm uppercase tracking-[0.2em] opacity-60">Contact</p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
                Let’s build something useful.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 opacity-70">
                Open to React.js Developer opportunities and frontend-focused projects.
              </p>
            </div>

            <a href="mailto:amity4508@gmail.com"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 dark:bg-zinc-900 dark:text-white">
              Get in touch <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-12 grid gap-4 border-t border-white/20 pt-7 sm:grid-cols-2 lg:grid-cols-4">
            <a href="mailto:amity4508@gmail.com" className="flex items-center gap-3 opacity-80 hover:opacity-100">
              <Mail size={18} /> amity4508@gmail.com
            </a>
            <a href="tel:7267801140" className="flex items-center gap-3 opacity-80 hover:opacity-100">
              <Phone size={18} /> 7267801140
            </a>
            <span className="flex items-center gap-3 opacity-80"><MapPin size={18} /> New Delhi, India</span>
            <div className="flex gap-4">
              <a href="https://github.com/amityadav4508" target="_blank" rel="noreferrer"><Github /></a>
              <a href="https://linkedin.com/in/amit-yadav-213327217" target="_blank" rel="noreferrer"><Linkedin /></a>
            </div>
          </div>
        </div>

        <footer className="py-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Amit Yadav. Built with React.js + Tailwind CSS.
        </footer>
      </div>
    </section>
  );
}
