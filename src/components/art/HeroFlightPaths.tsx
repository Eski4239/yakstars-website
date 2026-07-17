"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PLANE_PATH } from "@/components/art/Plane";

const LOOP_TRAIL =
  "M-100 620 C 250 560, 420 380, 560 300 C 700 220, 700 80, 560 80 C 430 80, 430 220, 580 300 C 760 396, 1100 420, 1560 320";

const TRAILS = [
  { d: LOOP_TRAIL, color: "var(--color-line)", width: 2.5 },
  {
    d: "M-100 700 C 300 660, 700 620, 1000 480 C 1240 368, 1380 320, 1560 300",
    color: "var(--color-sky)",
    width: 40,
  },
  {
    d: "M-100 260 C 340 300, 900 180, 1560 260",
    color: "var(--color-line)",
    width: 1.5,
  },
] as const;

/**
 * Decorative hero background: faint smoke trails traced across the sky with a
 * small aircraft flying the loop. Purely presentational.
 */
export function HeroFlightPaths() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        {TRAILS.map((t, i) => (
          <motion.path
            key={i}
            d={t.d}
            fill="none"
            stroke={t.color}
            strokeWidth={t.width}
            strokeLinecap="round"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: reduce ? 0 : 3.2,
              delay: reduce ? 0 : 0.4 + i * 0.35,
              ease: "easeOut",
            }}
          />
        ))}

        {!reduce && (
          <motion.g
            style={{
              offsetPath: `path("${LOOP_TRAIL}")`,
              offsetRotate: "auto 90deg",
            }}
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 1, 0] }}
            transition={{
              duration: 26,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 3,
              delay: 1.2,
            }}
          >
            <path
              d={PLANE_PATH}
              fill="var(--color-blue)"
              transform="translate(-13 -13) scale(0.26)"
            />
          </motion.g>
        )}
      </svg>
    </div>
  );
}
