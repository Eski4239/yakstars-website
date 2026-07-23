"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FormationDiagram } from "@/components/art/Formation";
import { SkyPoster } from "@/components/art/SkyPoster";
import { display } from "@/data/display";

/**
 * The full display sequence: pick a manoeuvre on one side, watch the
 * formation reposition on the other.
 */
export function SequenceExplorer() {
  const [activeIdx, setActiveIdx] = useState(0);
  const reduce = useReducedMotion();
  const active = display.sequence[activeIdx];
  const formationKey = active.formation ?? "vic";

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      {/* Diagram panel */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-3xl bg-blue-deep text-white">
          <div className="relative aspect-[4/3]">
            {/* Photo slot: public/display/{active.image} — see src/data/display.ts */}
            <SkyPoster seed={active.order} label={active.name} className="absolute inset-0 h-full w-full" />
          </div>

          <div className="p-8 md:p-10">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-sm tabular-nums text-white/50">
                {String(active.order).padStart(2, "0")} / {String(display.sequence.length).padStart(2, "0")}
              </p>
              <div className="flex items-center gap-3">
                <FormationDiagram formation={formationKey} tone="white" className="h-10 w-10" />
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
                  {active.aircraft} aircraft
                </p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.order}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                aria-live="polite"
              >
                <h3 className="mt-4 text-2xl font-bold tracking-tight">{active.name}</h3>
                <p className="mt-4 min-h-[4.5rem] leading-relaxed text-white/70">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Sequence list */}
      <ol className="space-y-1">
        {display.sequence.map((m, i) => {
          const isActive = i === activeIdx;
          return (
            <li key={m.order}>
              <button
                type="button"
                onClick={() => setActiveIdx(i)}
                aria-pressed={isActive}
                className={`group flex w-full items-center gap-5 rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                  isActive ? "bg-mist" : "hover:bg-mist/60"
                }`}
              >
                <span
                  className={`font-mono text-sm tabular-nums transition-colors ${
                    isActive ? "text-red" : "text-faint"
                  }`}
                >
                  {String(m.order).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span
                    className={`block text-lg font-semibold tracking-tight transition-colors ${
                      isActive ? "text-ink" : "text-slate group-hover:text-ink"
                    }`}
                  >
                    {m.name}
                  </span>
                </span>
                <span
                  className={`hidden shrink-0 rounded-full px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest sm:block ${
                    isActive ? "bg-blue text-white" : "bg-mist text-slate"
                  }`}
                >
                  {m.aircraft} ship{m.aircraft > 1 ? "s" : ""}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
