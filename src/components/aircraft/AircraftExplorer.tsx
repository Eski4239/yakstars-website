"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { aircraft } from "@/data/aircraft";

/**
 * Stylised technical side view of the Yak-52 with interactive hotspots.
 * Click / focus a marker to read about that part of the aircraft.
 */
export function AircraftExplorer() {
  const [active, setActive] = useState<string>(aircraft.hotspots[0].id);
  const reduce = useReducedMotion();
  const current = aircraft.hotspots.find((h) => h.id === active)!;

  return (
    <div>
      <div className="relative">
        <svg
          viewBox="0 0 800 320"
          className="w-full text-ink"
          role="img"
          aria-label="Technical side view of the Yakovlev Yak-52"
        >
          <g stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* propeller */}
            <line x1="58" y1="78" x2="58" y2="216" />
            <ellipse cx="66" cy="147" rx="8" ry="14" fill="white" />
            {/* radial cowl */}
            <path d="M74 112 Q70 147 74 182 L128 190 Q136 147 128 104 Z" />
            {/* fuselage */}
            <path d="M128 104 Q260 84 400 96 L640 122 Q680 127 690 134" />
            <path d="M128 190 Q300 208 430 202 L640 172" />
            {/* canopy */}
            <path d="M196 98 Q216 64 260 60 L342 62 Q380 66 396 96" />
            <line x1="268" y1="61" x2="268" y2="94" strokeWidth="1.5" />
            {/* fin & rudder */}
            <path d="M640 122 Q636 80 660 54 L700 48 Q716 88 690 134" />
            <path d="M690 134 L710 138 Q720 150 710 162 L648 170" />
            {/* wing root (low wing, side profile) */}
            <path d="M220 196 Q236 226 300 230 L420 218 Q440 210 430 200" />
            {/* main gear */}
            <line x1="292" y1="230" x2="292" y2="262" />
            <circle cx="292" cy="276" r="15" />
            {/* nose gear */}
            <line x1="120" y1="190" x2="118" y2="252" />
            <circle cx="118" cy="264" r="12" />
            {/* exhaust hint */}
            <path d="M132 176 L150 180" strokeWidth="1.5" />
          </g>

          {/* dimension line */}
          <g stroke="var(--color-faint)" strokeWidth="1" fill="none">
            <line x1="58" y1="304" x2="716" y2="304" strokeDasharray="4 5" />
            <line x1="58" y1="296" x2="58" y2="312" />
            <line x1="716" y1="296" x2="716" y2="312" />
          </g>
          <text
            x="387"
            y="298"
            textAnchor="middle"
            className="fill-slate font-mono"
            fontSize="13"
          >
            7.7 m
          </text>
        </svg>

        {/* hotspot markers */}
        {aircraft.hotspots.map((h) => {
          const isActive = h.id === active;
          return (
            <button
              key={h.id}
              type="button"
              onClick={() => setActive(h.id)}
              aria-pressed={isActive}
              aria-label={h.title}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              <span className="relative flex h-9 w-9 items-center justify-center">
                {!reduce && isActive && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red/30" />
                )}
                <span
                  className={`relative flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? "border-red bg-red"
                      : "border-slate bg-white hover:border-red"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-white" : "bg-slate"}`}
                  />
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* detail card */}
      <div className="mt-6 min-h-[7.5rem]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-mist p-7"
          >
            <h3 className="text-xl font-bold tracking-tight">{current.title}</h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-slate">{current.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
