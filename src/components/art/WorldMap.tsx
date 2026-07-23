/**
 * Flat, hand-simplified continent silhouette (not real coastline data) in a
 * 1000×500 equirectangular-style viewBox, so `lat/lon` project onto it with
 * simple linear math via `projectLatLon`. Branded placeholder art, in the
 * same spirit as SkyPoster/Plane — not a geographically precise map.
 */
export function WorldMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1000 500" className={className} aria-hidden>
      <rect width="1000" height="500" fill="var(--color-mist)" />
      {/* North America */}
      <path
        d="M60 90 L200 60 L260 100 L240 150 L280 190 L230 240 L150 260 L90 220 L70 160 Z"
        fill="var(--color-silver)"
        opacity="0.55"
      />
      {/* South America */}
      <path
        d="M230 280 L280 270 L300 330 L270 420 L230 440 L210 360 Z"
        fill="var(--color-silver)"
        opacity="0.55"
      />
      {/* Europe */}
      <path
        d="M460 70 L540 60 L560 100 L520 130 L530 160 L480 170 L455 130 Z"
        fill="var(--color-silver)"
        opacity="0.55"
      />
      {/* Africa */}
      <path
        d="M470 175 L560 170 L590 240 L560 340 L510 360 L470 300 L460 220 Z"
        fill="var(--color-silver)"
        opacity="0.55"
      />
      {/* Asia */}
      <path
        d="M570 60 L760 50 L820 110 L780 170 L700 190 L620 160 L580 110 Z"
        fill="var(--color-silver)"
        opacity="0.55"
      />
      {/* Australia */}
      <path
        d="M760 320 L860 310 L880 350 L840 380 L770 370 Z"
        fill="var(--color-silver)"
        opacity="0.55"
      />
    </svg>
  );
}

/** Projects real lat/lon onto the 1000×500 viewBox above. */
export function projectLatLon(lat: number, lon: number) {
  return {
    x: ((lon + 180) / 360) * 1000,
    y: ((90 - lat) / 180) * 500,
  };
}
