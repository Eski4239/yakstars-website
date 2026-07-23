"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { SkyPoster } from "@/components/art/SkyPoster";
import { scheduleImages } from "@/data/site";

const CROSSFADE_MS = 5200;

/** Rotating photo-placeholder background for the schedule CTA banner. */
export function BannerSlideshow({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setActive((v) => (v + 1) % scheduleImages.length),
      CROSSFADE_MS,
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative overflow-hidden rounded-3xl">
      {/* Rotating background — SkyPoster placeholders until real airshow
          photography lands in public/schedule/ (see src/data/site.ts `scheduleImages`). */}
      <div aria-hidden className="absolute inset-0">
        {scheduleImages.map((img, i) => (
          <SkyPoster
            key={img.filename}
            seed={img.seed}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      </div>
      <div className="relative p-10 text-white md:p-14">{children}</div>
    </div>
  );
}
