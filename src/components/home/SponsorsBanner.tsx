"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { sponsors } from "@/data/sponsors";

/**
 * Auto-scrolling sponsor logo marquee. Tiles are text placeholders until real
 * logo files land in public/sponsors/ (see src/data/sponsors.ts `logo` field).
 * Duplicated once so the loop is seamless; pauses under reduced motion.
 */
export function SponsorsBanner() {
  const rawReduce = useReducedMotion();
  // Defer to "not reduced" until mounted — `reduce` resolves synchronously via
  // matchMedia on the client and would otherwise make the very first client
  // paint's className diverge from the server-rendered one.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);
  const reduce = mounted && rawReduce;
  const row = [...sponsors, ...sponsors];

  return (
    <section aria-label="Our sponsors" className="border-y border-line bg-mist py-12 md:py-16">
      <div className="overflow-hidden">
        <div
          className={`flex w-max items-center gap-12 ${reduce ? "" : "animate-marquee"}`}
        >
          {row.map((s, i) => (
            <div
              key={`${s.slug}-${i}`}
              className="flex h-16 w-40 shrink-0 items-center justify-center rounded-lg border border-line bg-white px-6 text-center"
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-faint">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
