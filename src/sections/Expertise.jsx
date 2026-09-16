import { Gauge, Layers3, MessageCircle, Network, Puzzle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const items = [
  [Puzzle, "Reusable Components", "Build consistent UI components that make feature delivery faster and cleaner."],
  [Gauge, "Performance", "Focus on rendering, loading and API-related optimizations for better UX."],
  [Layers3, "State Management", "Work with Redux and Context API for predictable application state."],
  [Network, "REST API Integration", "Connect frontend experiences with APIs and handle real application workflows."],
  [MessageCircle, "Real-time Features", "Experience with real-time chat UI and WebSocket-based functionality."],
];

export default function Expertise() {
  return (
    <section className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="React Expertise" title="How I approach frontend development." />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([Icon, title, text]) => (
            <div key={title} className="rounded-3xl border border-zinc-200 p-6 dark:border-zinc-800">
              <Icon size={24} />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
