"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { events, type TeamEvent } from "@/data/events";

type Filter = "all" | "upcoming" | number;

export function ScheduleList({ today }: { today: string }) {
  const [filter, setFilter] = useState<Filter>("all");
  const reduce = useReducedMotion();

  const years = useMemo(
    () => [...new Set(events.map((e) => e.year))].sort((a, b) => b - a),
    [],
  );

  const isUpcoming = (e: TeamEvent) => e.endDate >= today;

  const filtered = events.filter((e) => {
    if (filter === "all") return true;
    if (filter === "upcoming") return isUpcoming(e);
    return e.year === filter;
  });

  const chips: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "upcoming", label: "Upcoming" },
    ...years.map((y) => ({ key: y as Filter, label: String(y) })),
  ];

  return (
    <div>
      <div role="group" aria-label="Filter events" className="flex flex-wrap gap-2.5">
        {chips.map((c) => {
          const active = filter === c.key;
          return (
            <button
              key={String(c.key)}
              type="button"
              onClick={() => setFilter(c.key)}
              aria-pressed={active}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "bg-ink text-white"
                  : "border border-line text-slate hover:border-ink hover:text-ink"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-12">
        <AnimatePresence initial={false}>
          {filtered.map((e) => {
            const upcoming = isUpcoming(e);
            return (
              <motion.li
                key={`${e.name}-${e.year}-${e.dates}`}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group grid gap-3 border-b border-line py-8 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-10"
              >
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-red">
                  {e.dates}
                </p>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-blue md:text-3xl">
                    {e.name}
                  </h3>
                  <p className="mt-1.5 text-slate">
                    {e.location} · {e.country}
                    {e.note ? ` — ${e.note}` : ""}
                  </p>
                </div>
                <span
                  className={`justify-self-start rounded-full px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest md:justify-self-end ${
                    upcoming ? "bg-blue text-white" : "bg-mist text-slate"
                  }`}
                >
                  {upcoming ? "Upcoming" : "Flown"}
                </span>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>

      {filtered.length === 0 && (
        <p className="mt-12 text-lg text-slate">
          No events under this filter — booking for the upcoming season is open.
        </p>
      )}
    </div>
  );
}
