import { PLANE_PATH } from "@/components/art/Plane";

type Variant = {
  bg: string;
  trail: string;
  plane: string;
  accent?: string;
};

const VARIANTS: Variant[] = [
  { bg: "#0b3c8d", trail: "rgba(255,255,255,0.35)", plane: "#ffffff", accent: "#f2a900" },
  { bg: "#eef3fb", trail: "rgba(11,60,141,0.25)", plane: "#0b3c8d" },
  { bg: "#0b0c10", trail: "rgba(255,255,255,0.28)", plane: "#ffffff", accent: "#c8102e" },
  { bg: "#f5f5f7", trail: "rgba(11,12,16,0.18)", plane: "#0b0c10", accent: "#c8102e" },
  { bg: "#082b66", trail: "rgba(255,255,255,0.3)", plane: "#f2a900" },
  { bg: "#c8102e", trail: "rgba(255,255,255,0.35)", plane: "#ffffff" },
];

const COMPOSITIONS = [
  // vic climbing right
  { planes: [{ x: 50, y: 34, r: 18, s: 1 }, { x: 38, y: 48, r: 18, s: 1 }, { x: 60, y: 52, r: 18, s: 1 }], trail: "M-10 90 C 25 80, 45 60, 75 30 S 105 5, 115 0" },
  // crossing pair
  { planes: [{ x: 32, y: 40, r: 45, s: 1.1 }, { x: 66, y: 44, r: -45, s: 1.1 }], trail: "M-10 20 C 30 40, 70 40, 110 20 M-10 70 C 30 50, 70 50, 110 70" },
  // loop
  { planes: [{ x: 62, y: 26, r: 105, s: 1 }], trail: "M10 90 C 30 60, 30 25, 55 20 C 82 15, 85 50, 60 55 C 40 59, 35 40, 50 28" },
  // echelon of four
  { planes: [{ x: 26, y: 30, r: 12, s: 0.9 }, { x: 41, y: 40, r: 12, s: 0.9 }, { x: 56, y: 50, r: 12, s: 0.9 }, { x: 71, y: 60, r: 12, s: 0.9 }], trail: "M-10 95 L 110 15" },
  // solo vertical
  { planes: [{ x: 50, y: 36, r: 0, s: 1.25 }], trail: "M50 105 L50 48" },
  // diamond
  { planes: [{ x: 50, y: 28, r: 0, s: 0.9 }, { x: 39, y: 44, r: 0, s: 0.9 }, { x: 61, y: 44, r: 0, s: 0.9 }, { x: 50, y: 60, r: 0, s: 0.9 }], trail: "M20 95 C 35 85, 65 85, 80 95" },
];

/**
 * Flat, branded SVG artwork used where photography will eventually live.
 * Deterministic per `seed`, so grids stay stable across renders.
 */
export function SkyPoster({
  seed,
  className = "",
  label,
}: {
  seed: number;
  className?: string;
  label?: string;
}) {
  const v = VARIANTS[seed % VARIANTS.length];
  const c = COMPOSITIONS[seed % COMPOSITIONS.length];

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <rect width="100" height="100" fill={v.bg} />
      {v.accent && <circle cx="82" cy="18" r="7" fill={v.accent} opacity="0.9" />}
      <path
        d={c.trail}
        fill="none"
        stroke={v.trail}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="0.2 3.4"
      />
      {c.planes.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${p.r}) scale(${0.16 * p.s}) translate(-50 -50)`}>
          <path d={PLANE_PATH} fill={v.plane} />
        </g>
      ))}
    </svg>
  );
}
