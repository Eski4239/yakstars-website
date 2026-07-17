"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SkyPoster } from "@/components/art/SkyPoster";

export type GalleryItem = {
  seed: number;
  title: string;
  caption: string;
  ratio: "aspect-[4/5]" | "aspect-square" | "aspect-[4/3]" | "aspect-[3/4]";
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => setOpenIdx(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIdx((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [openIdx, close, step]);

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => setOpenIdx(i)}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="group block w-full overflow-hidden rounded-2xl text-left"
            aria-label={`Open “${item.title}”`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <SkyPoster
                seed={item.seed}
                label={item.title}
                className={`w-full ${item.ratio} transition-transform duration-700 ease-out group-hover:scale-[1.05]`}
              />
              <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between bg-gradient-to-t from-black/50 to-transparent p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">{item.title}</span>
                <span aria-hidden className="text-white">↗</span>
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={items[openIdx].title}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-md"
            onClick={close}
          >
            <motion.figure
              initial={reduce ? false : { scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <SkyPoster
                seed={items[openIdx].seed}
                label={items[openIdx].title}
                className="aspect-[4/3] w-full rounded-2xl"
              />
              <figcaption className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <p className="text-lg font-bold text-white">{items[openIdx].title}</p>
                  <p className="mt-1 text-sm text-white/60">{items[openIdx].caption}</p>
                </div>
                <p className="shrink-0 font-mono text-sm tabular-nums text-white/50">
                  {openIdx + 1} / {items.length}
                </p>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/25"
            >
              ✕
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous"
              className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 md:flex"
            >
              ←
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next"
              className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 md:flex"
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
