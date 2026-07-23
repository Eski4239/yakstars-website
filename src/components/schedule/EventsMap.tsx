"use client";

import { useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { WorldMap, projectLatLon } from "@/components/art/WorldMap";
import { StarMark } from "@/components/art/Star";
import { events, type TeamEvent } from "@/data/events";

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

function daysAgo(iso: string, days: number) {
  const d = new Date(iso);
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
}

export function EventsMap({ today }: { today: string }) {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<"upcoming" | "past">("upcoming");
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<TeamEvent | null>(null);
  const [popup, setPopup] = useState<{ x: number; y: number } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const starRefs = useRef(new Map<string, HTMLButtonElement>());
  const dragState = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);

  const yearAgo = daysAgo(today, 365);
  const visible = useMemo(
    () =>
      events.filter((e) =>
        mode === "upcoming" ? e.endDate >= today : e.endDate < today && e.endDate >= yearAgo,
      ),
    [mode, today, yearAgo],
  );

  const clampPan = (x: number, y: number, z: number) => {
    const bound = ((z - 1) / z) * 260;
    return {
      x: Math.max(-bound, Math.min(bound, x)),
      y: Math.max(-bound * 0.5, Math.min(bound * 0.5, y)),
    };
  };

  const setZoomClamped = (next: number) => {
    const z = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, next));
    setZoom(z);
    setPan((p) => clampPan(p.x, p.y, z));
  };

  const updatePopup = (key: string) => {
    const el = starRefs.current.get(key);
    const container = containerRef.current;
    if (!el || !container) return;
    const elBox = el.getBoundingClientRect();
    const containerBox = container.getBoundingClientRect();
    setPopup({
      x: elBox.left - containerBox.left + elBox.width / 2,
      y: elBox.top - containerBox.top + elBox.height / 2,
    });
  };

  const showEvent = (key: string, e: TeamEvent) => {
    setHovered(e);
    updatePopup(key);
  };

  const clearEvent = () => {
    setHovered(null);
    setPopup(null);
  };

  return (
    <div>
      <div role="group" aria-label="Map view" className="flex gap-2.5">
        {(["upcoming", "past"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              mode === m
                ? "bg-ink text-white"
                : "border border-line text-slate hover:border-ink hover:text-ink"
            }`}
          >
            {m === "upcoming" ? "Upcoming" : "Past year"}
          </button>
        ))}
      </div>

      <div
        ref={containerRef}
        onWheel={(ev) => {
          ev.preventDefault();
          setZoomClamped(zoom - ev.deltaY * 0.0025);
        }}
        onPointerDown={(ev) => {
          if (zoom <= MIN_ZOOM) return;
          dragState.current = { x: ev.clientX, y: ev.clientY, panX: pan.x, panY: pan.y };
        }}
        onPointerMove={(ev) => {
          if (!dragState.current) return;
          const dx = ev.clientX - dragState.current.x;
          const dy = ev.clientY - dragState.current.y;
          const next = clampPan(dragState.current.panX + dx, dragState.current.panY + dy, zoom);
          setPan(next);
        }}
        onPointerUp={() => {
          dragState.current = null;
        }}
        onPointerLeave={() => {
          dragState.current = null;
        }}
        className="relative mt-6 aspect-[16/10] w-full touch-none overflow-hidden rounded-2xl border border-line bg-mist"
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
            transition: reduce ? "none" : "transform 0.15s ease-out",
          }}
        >
          <WorldMap className="absolute inset-0 h-full w-full" />
          {visible.map((e) => {
            const key = `${e.name}-${e.lat}-${e.lon}`;
            const { x, y } = projectLatLon(e.lat, e.lon);
            return (
              <button
                key={key}
                type="button"
                ref={(el) => {
                  if (el) starRefs.current.set(key, el);
                  else starRefs.current.delete(key);
                }}
                onMouseEnter={() => showEvent(key, e)}
                onFocus={() => showEvent(key, e)}
                onMouseLeave={clearEvent}
                onBlur={clearEvent}
                aria-label={`${e.name}, ${e.location}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 text-red transition-transform hover:scale-125"
                style={{ left: `${(x / 1000) * 100}%`, top: `${(y / 500) * 100}%` }}
              >
                <StarMark size={12} />
              </button>
            );
          })}
        </div>

        {/* Zoom controls */}
        <div className="absolute bottom-3 right-3 flex flex-col gap-1.5">
          <button
            type="button"
            onClick={() => setZoomClamped(zoom + 0.6)}
            aria-label="Zoom in"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ink shadow-md transition-colors hover:bg-mist"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => setZoomClamped(zoom - 0.6)}
            aria-label="Zoom out"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ink shadow-md transition-colors hover:bg-mist"
          >
            −
          </button>
        </div>

        {/* Popup + connector overlay */}
        {hovered && popup && (
          <svg className="pointer-events-none absolute inset-0 h-full w-full">
            <line
              x1={popup.x}
              y1={popup.y}
              x2={popup.x}
              y2={Math.max(popup.y - 56, 8)}
              stroke="var(--color-ink)"
              strokeWidth={1.5}
            />
            <foreignObject
              x={Math.max(popup.x - 90, 4)}
              y={Math.max(popup.y - 118, 4)}
              width={180}
              height={64}
            >
              <div className="rounded-lg border border-line bg-white px-3 py-2 text-center shadow-lg">
                <p className="text-xs font-bold tracking-tight text-ink">{hovered.name}</p>
                <p className="mt-0.5 text-[0.7rem] text-slate">
                  {hovered.location} · {hovered.dates}
                </p>
              </div>
            </foreignObject>
          </svg>
        )}
      </div>
    </div>
  );
}
