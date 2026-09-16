import { GraduationCap } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function Education() {
  return (
    <section className="border-t border-zinc-200 px-6 py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Education" title="Academic background." />

        <div className="flex gap-5 rounded-3xl border border-zinc-200 p-7 dark:border-zinc-800">
          <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-900">
            <GraduationCap />
          </div>
          <div>
            <h3 className="text-xl font-semibold">B.Tech in Electronics and Communication Engineering</h3>
            <p className="mt-2 text-zinc-500">Mangalmay Institute of Engineering and Technology</p>
            <p className="mt-1 text-sm text-zinc-500">2018 – 2022 · CGPA 7.2</p>
          </div>
        </div>
      </div>
    </section>
  );
}
