export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">{text}</p>}
    </div>
  );
}
