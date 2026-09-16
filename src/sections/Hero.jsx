import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import profilePhoto from "/public/profile.jpeg";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
        <div>
        <p className="mb-5  text-sm font-medium uppercase tracking-[0.28em] bg-black pl-2 text-white w-[220px]">
          React.js Developer  
        </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-8xl">
            Building modern
            <span className="block text-zinc-400">web experiences.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            React.js Developer with 3+ years of experience building responsive,
            scalable and performance-focused web applications across e-commerce
            and LMS platforms.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-zinc-900">
              View Projects <ArrowUpRight size={17} />
            </a>
            <a href="/resume.pdf" download className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900">
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a href="https://github.com/amityadav4508" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white"><Github size={21} /></a>
            <a href="https://linkedin.com/in/amit-yadav-213327217" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white"><Linkedin size={21} /></a>
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <div className="float relative h-80 w-80">
            <div className="absolute inset-0 rounded-[3rem] border border-zinc-300 dark:border-zinc-700" />
            <div className="absolute inset-6 flex items-center justify-center rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900">
              <span className="text-8xl font-bold text-zinc-300 dark:text-zinc-700">

                <div className="w-full max-w-[300px]">
                  <img

                  src={`${import.meta.env.BASE_URL}profile.jpeg`}
                    alt="Amit Yadav"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>

              </span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400">
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
