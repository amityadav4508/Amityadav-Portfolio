
import { useState } from "react";

export default function DateTimeConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const formatParts = (date, timeZone) =>
    Object.fromEntries(
      new Intl.DateTimeFormat("en-US", {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
      })
        .formatToParts(date)
        .filter((p) => p.type !== "literal")
        .map((p) => [p.type, p.value])
    );

  const convertDateTime = (value) => {
    setInput(value);
    setOutput("");
    setError("");
    setCopied(false);

    if (!value.trim()) return;

    const normalizedValue = value.trim().replace(
      /\s*(AM|PM)\s*(?:PST|PDT)?$/i,
      " $1 PST"
    );

    const match = normalizedValue.match(
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})\s*(AM|PM)\s*PST$/i
    );

    if (!match) {
      setError("Enter format: 09/25/2026 08:30 AM");
      return;
    }

    const [, m, d, y, h, min, ampm] = match;
    const month = Number(m);
    const day = Number(d);
    const year = Number(y);
    let hour = Number(h);
    const minute = Number(min);

    if (
      month < 1 || month > 12 ||
      day < 1 || day > 31 ||
      hour < 1 || hour > 12 ||
      minute < 0 || minute > 59
    ) {
      setError("Invalid date or time.");
      return;
    }

    hour = hour % 12;
    if (ampm.toUpperCase() === "PM") hour += 12;

    const check = new Date(Date.UTC(year, month - 1, day));

    if (
      check.getUTCFullYear() !== year ||
      check.getUTCMonth() !== month - 1 ||
      check.getUTCDate() !== day
    ) {
      setError("Invalid calendar date.");
      return;
    }

    const desiredWallTime = Date.UTC(
      year, month - 1, day, hour, minute
    );

    let utc = desiredWallTime;

    // Resolve Pacific timezone offset.
    for (let i = 0; i < 4; i++) {
      const p = formatParts(
        new Date(utc),
        "America/Los_Angeles"
      );

      const represented = Date.UTC(
        Number(p.year),
        Number(p.month) - 1,
        Number(p.day),
        Number(p.hour),
        Number(p.minute),
        Number(p.second)
      );

      utc += desiredWallTime - represented;
    }

    const result = formatParts(
      new Date(utc),
      "America/Chicago"
    );

    setOutput(
      `${result.month}/${result.day}/${result.year} ` +
      `${result.hour}:${result.minute}`
    );
  };

  const getCentralAbbreviation = () => {
    if (!output) return "CT";

    const match = output.match(
      /^(\d{2})\/(\d{2})\/(\d{4})/
    );

    if (!match) return "CT";

    const [, month, day, year] = match;
    const date = new Date(
      Date.UTC(Number(year), Number(month) - 1, Number(day), 12)
    );

    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      timeZoneName: "short",
    }).formatToParts(date);

    return (
      parts.find((p) => p.type === "timeZoneName")?.value || "CT"
    );
  };

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(
        `${output} ${getCentralAbbreviation()}`
      );
      setCopied(true);
    } catch {
      setError("Unable to copy. Please copy the result manually.");
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
    setCopied(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080c18] px-4 py-12 text-white sm:px-6 sm:py-20">
      <div className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl">
        {/* Header */}
      

        {/* Converter card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-9">
          <div className="mb-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.08] p-4">
              <p className="mb-2 text-xs font-semibold text-slate-400">
                FROM
              </p>
              <p className="text-xl font-bold">Pacific</p>
              <p className="mt-1 text-xs text-slate-400">PST / PDT</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-blue-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>

            <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.08] p-4">
              <p className="mb-2 text-xs font-semibold text-slate-400">
                TO
              </p>
              <p className="text-xl font-bold">Central</p>
              <p className="mt-1 text-xs text-slate-400">CST / CDT</p>
            </div>
          </div>

          {/* Input */}
          <label
            htmlFor="pst-input"
            className="mb-3 block text-sm font-semibold text-slate-200"
          >
            Enter Pacific date & time
          </label>

          <div className="flex items-center rounded-2xl border border-white/10 bg-[#0b1020] transition-all focus-within:border-blue-400/60 focus-within:ring-4 focus-within:ring-blue-500/10">
            <input
              id="pst-input"
              type="text"
              value={input}
              onChange={(e) => convertDateTime(e.target.value)}
              placeholder="09/25/2026 08:30 AM"
              autoComplete="off"
              spellCheck="false"
              className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-slate-600 sm:px-5 sm:text-base"
            />

            <span className="mr-3 shrink-0 rounded-lg bg-blue-500/15 px-3 py-2 text-sm font-bold text-blue-400">
              PST
            </span>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Format: MM/DD/YYYY HH:MM AM/PM
          </p>

          {error && (
            <div
              role="alert"
              className="mt-5 rounded-xl border border-red-500/20 bg-red-500/[0.08] p-4 text-sm text-red-300"
            >
              {error}
            </div>
          )}

          <div className="my-6 flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M12 4v16m-6-6 6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Output */}
          <label
            htmlFor="central-output"
            className="mb-3 block text-sm font-semibold text-slate-200"
          >
            Converted Central date & time
          </label>

          <div className="flex items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05]">
            <input
              id="central-output"
              type="text"
              value={output}
              readOnly
              placeholder="Converted time appears here"
              className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-emerald-300 outline-none placeholder:text-slate-600 sm:px-5 sm:text-base"
            />

            <span className="mr-3 shrink-0 rounded-lg bg-emerald-500/15 px-3 py-2 text-xs font-bold text-emerald-400">
              {output ? getCentralAbbreviation() : "CST"}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={copyOutput}
              disabled={!output}
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:from-blue-500 hover:to-indigo-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {copied ? "✓ Copied!" : "Copy Converted Time"}
            </button>

            <button
              type="button"
              onClick={clearAll}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
          <span>✓ Live conversion</span>
          <span>✓ Automatic timezone label</span>
          <span>✓ One-click copy</span>
        </div>

        <p className="mt-5 text-center text-[11px] tracking-wide text-slate-600">
          PACIFIC TIME → CENTRAL TIME
        </p>
      </div>
    </div>
  );
}
