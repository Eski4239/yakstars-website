"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { events, type TeamEvent } from "@/data/events";

export function ScheduleList({ today }: { today: string }) {
  const [pastOpen, setPastOpen] = useState(false);
  const [year, setYear] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const years = useMemo(
    () => [...new Set(events.map((e) => e.year))].sort((a, b) => b - a),
    [],
  );

  const isUpcoming = (e: TeamEvent) => e.endDate >= today;

  const filtered = useMemo(() => {
    const list = year === null ? events : events.filter((e) => e.year === year);
    return [...list].sort((a, b) => {
      const aUp = isUpcoming(a);
      const bUp = isUpcoming(b);
      if (aUp !== bUp) return aUp ? -1 : 1;
      return aUp ? a.endDate.localeCompare(b.endDate) : b.endDate.localeCompare(a.endDate);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, today]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={() => {
            setPastOpen((v) => !v);
            if (pastOpen) setYear(null);
          }}
          aria-expanded={pastOpen}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
            pastOpen ? "bg-ink text-white" : "border border-line text-slate hover:border-ink hover:text-ink"
          }`}
        >
          Past events
          <span
            aria-hidden
            className={`inline-block transition-transform duration-300 ${pastOpen ? "rotate-90" : ""}`}
          >
            →
          </span>
        </button>

        <motion.div
          initial={false}
          animate={{ width: pastOpen ? "auto" : 0, opacity: pastOpen ? 1 : 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-2.5 overflow-hidden"
        >
          {years.map((y) => {
            const active = year === y;
            return (
              <button
                key={y}
                type="button"
                onClick={() => setYear(active ? null : y)}
                aria-pressed={active}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-red text-white"
                    : "border border-line text-slate hover:border-ink hover:text-ink"
                }`}
              >
                {y}
              </button>
            );
          })}
        </motion.div>
      </div>

      <ul className="mt-10 space-y-4">
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
                style={{
                  borderLeftWidth: upcoming ? 4 : 1,
                  borderLeftColor: upcoming ? "var(--color-red)" : "var(--color-line)",
                }}
                className="group grid gap-3 rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue/5 md:grid-cols-[10rem_1fr] md:items-baseline md:gap-10 md:p-8"
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
                  </p>
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>

      {filtered.length === 0 && (
        <p className="mt-12 text-lg text-slate">
          No events under this filter. Booking for the upcoming season is open.
        </p>
      )}
    </div>
  );
}
