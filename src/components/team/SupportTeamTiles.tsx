"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SkyPoster } from "@/components/art/SkyPoster";
import type { SupportMember } from "@/data/team";

const EASE = [0.16, 1, 0.3, 1] as const;

function Tile({
  member,
  open,
  onToggle,
}: {
  member: SupportMember;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.4, ease: EASE }}
      className="overflow-hidden rounded-2xl border border-line bg-white"
    >
      <div className="relative">
        {/* Image slot: public/team/support/{name}-portrait.jpg */}
        <SkyPoster seed={member.name.length} className="aspect-[3/4] w-full" />
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-label={open ? `Collapse ${member.name}` : `Expand ${member.name}`}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xl font-bold text-white transition-transform hover:scale-110"
        >
          {open ? "×" : "+"}
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold tracking-tight">
          {member.name}
          {member.nickname && <span className="font-normal text-slate"> “{member.nickname}”</span>}
        </h3>
        <p className="mt-1 text-sm text-red">{member.role}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="mt-5 border-t border-line pt-5">
                <p className="text-sm leading-relaxed text-slate">{member.bio}</p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {member.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full bg-mist px-4 py-2 text-[0.8rem] font-medium text-slate"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function SupportTeamTiles({ members }: { members: SupportMember[] }) {
  const [openName, setOpenName] = useState<string | null>(null);

  return (
    <div className="grid items-start gap-5 sm:grid-cols-3">
      {members.map((m) => (
        <Tile
          key={m.name}
          member={m}
          open={openName === m.name}
          onToggle={() => setOpenName((v) => (v === m.name ? null : m.name))}
        />
      ))}
    </div>
  );
}
