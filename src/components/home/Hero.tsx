"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui";
import { HeroFlightPaths } from "@/components/art/HeroFlightPaths";

const EASE = [0.22, 1, 0.36, 1] as const;
const WORD = "YAKSTARS";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-white">
      <HeroFlightPaths />

      <div className="container-x relative pt-24 pb-16">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-eyebrow text-red"
        >
          Spanish–Portuguese precision aerobatic team
        </motion.p>

        <h1 className="mt-6 select-none" aria-label={WORD}>
          <span aria-hidden className="flex flex-wrap">
            {WORD.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={reduce ? false : { opacity: 0, y: 90, rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1.1, delay: 0.35 + i * 0.055, ease: EASE }}
                className="text-display-xl inline-block"
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
          className="mt-8 text-2xl font-semibold tracking-tight text-ink md:text-3xl"
        >
          Precision.<span className="text-blue"> Passion.</span>
          <span className="text-red"> Performance.</span>
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-slate"
        >
          Six Yak-52 warbirds. Tens of thousands of flight hours. One formation.
          The largest civilian aerobatic display team in Southern Europe.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/contact">Book the team</Button>
          <Button href="/display" variant="outline">
            Explore the display
          </Button>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-transparent via-slate to-transparent"
        />
      </motion.div>
    </section>
  );
}
