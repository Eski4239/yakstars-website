"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { SkyPoster } from "@/components/art/SkyPoster";
import type { Maneuver } from "@/data/display";

const AUTOPLAY_MS = 8000;

/**
 * Home-page hook for the display sequence: one placeholder image per
 * manoeuvre (see public/display/{image} filenames in src/data/display.ts),
 * a caption, and prev/next controls. Auto-advances every 8s with a thin
 * progress bar; manual prev/next resets the timer (both are driven by the
 * same `i` dependency, so any change — automatic or manual — restarts the
 * effect). No copy beyond the caption — the full write-up lives on /display.
 */
export function DisplaySlideshow({ sequence }: { sequence: Maneuver[] }) {
  const [i, setI] = useState(0);
  const rawReduce = useReducedMotion();
  // Defer to "not reduced" until mounted — `reduce` resolves synchronously via
  // matchMedia on the client and would otherwise make the progress bar's
  // presence in the very first client paint diverge from the server render.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);
  const reduce = mounted && rawReduce;
  const m = sequence[i];
  const step = (dir: 1 | -1) => setI((v) => (v + dir + sequence.length) % sequence.length);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const id = setTimeout(() => step(1), AUTOPLAY_MS);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, reduce]);

  // Plain CSS transition (not a framer-motion rAF tween) so the bar keeps
  // pace even if the tab is backgrounded, where JS-driven animations throttle.
  useEffect(() => {
    const el = barRef.current;
    if (!el || reduce) return;
    el.style.transition = "none";
    el.style.width = "0%";
    void el.offsetWidth; // force reflow so the next line starts a new transition
    el.style.transition = `width ${AUTOPLAY_MS}ms linear`;
    el.style.width = "100%";
  }, [i, reduce]);

  return (
    <div>
      <div className="relative overflow-hidden rounded-lg">
        <div className="aspect-[4/3] w-full md:aspect-[16/10]" aria-hidden />
        {sequence.map((s, idx) => (
          <SkyPoster
            key={s.order}
            seed={s.order}
            label={s.name}
            className={`absolute inset-0 h-full w-full transition-opacity duration-300 ease-in-out ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous manoeuvre"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/25"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next manoeuvre"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/25"
        >
          →
        </button>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            {String(m.order).padStart(2, "0")} / {String(sequence.length).padStart(2, "0")} ·{" "}
            {m.aircraft} ship{m.aircraft > 1 ? "s" : ""}
          </p>
          <h3 className="mt-1 text-xl font-bold tracking-tight text-white">{m.name}</h3>
        </div>
        {!reduce && (
          <div className="absolute inset-x-0 top-0 h-0.5 bg-white/20">
            <div ref={barRef} className="h-full bg-red" style={{ width: "0%" }} />
          </div>
        )}
      </div>
    </div>
  );
}
