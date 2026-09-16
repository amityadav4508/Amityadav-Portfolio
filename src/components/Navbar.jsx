import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={() => go("home")} className="text-xl font-bold tracking-tight">
          Amit<span className="text-zinc-400">.</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}
              className="text-sm text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white">
              {label}
            </button>
          ))}
          <button onClick={() => setDark(!dark)} className="rounded-full border border-zinc-200 p-2 dark:border-zinc-700">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={() => setDark(!dark)} className="rounded-full border border-zinc-200 p-2 dark:border-zinc-700">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([label, id]) => (
              <button key={id} onClick={() => go(id)} className="text-left text-sm text-zinc-600 dark:text-zinc-400">
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
