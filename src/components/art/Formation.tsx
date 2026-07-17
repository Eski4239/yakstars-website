"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PLANE_PATH } from "@/components/art/Plane";
import { formations } from "@/data/display";

/**
 * Animated formation diagram. When `formation` changes, ships glide to their
 * new positions (extra ships fade in/out).
 */
export function FormationDiagram({
  formation,
  tone = "ink",
  className = "",
}: {
  formation: keyof typeof formations | string;
  tone?: "ink" | "white" | "blue";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const def = formations[formation] ?? formations.vic;
  const maxShips = 6;
  const color =
    tone === "white" ? "#ffffff" : tone === "blue" ? "var(--color-blue)" : "var(--color-ink)";

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={`${def.name} formation — ${def.ships.length} aircraft`}
    >
      {/* display axis reference lines */}
      <line x1="4" y1="92" x2="96" y2="92" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="2 3" />
      {Array.from({ length: maxShips }).map((_, i) => {
        const ship = def.ships[i];
        const visible = !!ship;
        const target = ship ?? { x: 50, y: 110 };
        return (
          <motion.g
            key={i}
            initial={false}
            animate={{
              x: target.x - 7,
              y: target.y - 7,
              opacity: visible ? 1 : 0,
              scale: visible ? 1 : 0.6,
            }}
            transition={
              reduce
                ? { duration: 0 }
                : { type: "spring", stiffness: 70, damping: 16, mass: 0.9 }
            }
          >
            <path d={PLANE_PATH} fill={color} transform="scale(0.14)" />
          </motion.g>
        );
      })}
    </svg>
  );
}
