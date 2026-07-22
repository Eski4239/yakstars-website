"use client";

import { useState } from "react";
import { PilotCard } from "@/components/team/PilotCard";
import type { Pilot } from "@/data/team";

export function PilotGrid({ pilots }: { pilots: Pilot[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {pilots.map((p) => (
        <PilotCard
          key={p.slug}
          pilot={p}
          open={openSlug === p.slug}
          onToggle={() => setOpenSlug((v) => (v === p.slug ? null : p.slug))}
        />
      ))}
    </div>
  );
}
