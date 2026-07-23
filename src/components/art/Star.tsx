/**
 * Five-pointed star mark in a 100×100 viewBox. Fill follows currentColor.
 */
export function StarMark({
  size = 12,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden>
      <path d={STAR_PATH} fill="currentColor" />
    </svg>
  );
}

export const STAR_PATH =
  "M50 4 L61.8 37.8 L97.6 38.2 L68.8 59.4 L79.4 93.6 L50 73.4 L20.6 93.6 L31.2 59.4 L2.4 38.2 L38.2 37.8 Z";
