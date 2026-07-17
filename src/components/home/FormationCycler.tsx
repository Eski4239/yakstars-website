"use client";

import { useEffect, useState } from "react";
import { FormationDiagram } from "@/components/art/Formation";
import { formations } from "@/data/display";

const CYCLE: (keyof typeof formations)[] = ["vic", "diamond", "arrow", "trail"];

/** Slowly cycles through the team's formations. */
export function FormationCycler({ className = "" }: { className?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % CYCLE.length), 3200);
    return () => clearInterval(id);
  }, []);

  const key = CYCLE[i];

  return (
    <div className={className}>
      <FormationDiagram formation={key} tone="white" className="h-full w-full text-white" />
      <p
        aria-live="polite"
        className="mt-2 text-center font-mono text-xs uppercase tracking-[0.3em] text-white/60"
      >
        {formations[key].name} formation
      </p>
    </div>
  );
}
