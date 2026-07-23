"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SkyPoster } from "@/components/art/SkyPoster";
import type { Pilot } from "@/data/team";

const EASE = [0.16, 1, 0.3, 1] as const;
const BADGE =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-mist text-sm font-bold tabular-nums text-ink";

export function PilotCard({
  pilot,
  open,
  onToggle,
}: {
  pilot: Pilot;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onToggle();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onToggle]);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        <div className="relative">
          {/* Image slot: public/team/{slug}-portrait.jpg */}
          <SkyPoster
            seed={pilot.number.length + pilot.name.length}
            className="aspect-[3/4] w-full"
          />
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-label={`Expand ${pilot.name}`}
            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xl font-bold text-white transition-transform hover:scale-110"
          >
            +
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
                {pilot.callsign}
              </p>
              <h3 className="mt-1 text-xl font-bold tracking-tight">{pilot.name}</h3>
            </div>
            <span className={BADGE}>{pilot.number}</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={onToggle}
              className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm"
            />
            <motion.div
              key="panel"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="fixed inset-x-4 top-20 bottom-6 z-40 overflow-y-auto rounded-2xl border border-line bg-white shadow-2xl md:inset-x-10 md:top-24 lg:inset-x-20"
            >
              <button
                type="button"
                onClick={onToggle}
                aria-label={`Collapse ${pilot.name}`}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/90 text-lg font-bold text-white transition-transform hover:scale-110"
              >
                ×
              </button>

              <div className="grid h-full gap-6 p-6 md:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
                <div className="grid content-start gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
                      {pilot.callsign}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                      {pilot.name}
                      {pilot.nickname && (
                        <span className="font-normal text-slate"> “{pilot.nickname}”</span>
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-slate">{pilot.position}</p>
                    <p className="mt-1 text-sm text-faint">{pilot.origin}</p>
                  </div>

                  <div>
                    <h4 className="text-eyebrow text-red">Story</h4>
                    <div className="mt-2 space-y-3 text-sm leading-relaxed text-slate">
                      {pilot.story.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-eyebrow text-red">Experience</h4>
                      <ul className="mt-2 space-y-1.5 text-sm text-slate">
                        {pilot.experience.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-eyebrow text-red">Awards</h4>
                      <ul className="mt-2 space-y-1.5 text-sm text-slate">
                        {pilot.awards.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative hidden overflow-hidden rounded-xl lg:block">
                  <SkyPoster
                    seed={pilot.number.length + pilot.name.length}
                    className="h-full w-full"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
