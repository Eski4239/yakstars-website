"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui";
import { SkyPoster } from "@/components/art/SkyPoster";
import { heroImages } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1] as const;
const TITLE = "Yakstars Aerobatic Team";
const CROSSFADE_MS = 5200;

export function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setActive((v) => (v + 1) % heroImages.length),
      CROSSFADE_MS,
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-ink">
      {/* Rotating background — SkyPoster placeholders until real show photography
          lands in public/hero/ (see src/data/site.ts `heroImages`). */}
      <div aria-hidden className="absolute inset-0">
        {heroImages.map((img, i) => (
          <SkyPoster
            key={img.filename}
            seed={img.seed}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      </div>

      <div className="container-x relative pb-16 pt-24 md:pb-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="max-w-2xl rounded-lg bg-blue-deep/90 p-8 shadow-2xl shadow-black/40 backdrop-blur-sm md:p-12"
        >
          <h1 className="select-none" aria-label={TITLE}>
            <span aria-hidden className="flex flex-wrap gap-x-[0.3em]">
              {TITLE.split(" ").map((word, i) => (
                <motion.span
                  key={word}
                  initial={reduce ? false : { opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.1, ease: EASE }}
                  className="text-display-md inline-block text-white"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg font-semibold leading-snug text-white md:text-xl">
            The first Spanish–Portuguese Aerobatic Display Team flying Yak-52
            Warbirds.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="light">
              Book the team
            </Button>
            <Button
              href="/display"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-ink"
            >
              Explore the display
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
