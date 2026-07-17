/**
 * Top-view aircraft silhouette (nose up) in a 100×100 viewBox.
 * Fill follows currentColor so it can be tinted via text color classes.
 */
export function PlaneMark({
  size = 24,
  className = "",
  rotate = 0,
  title,
}: {
  size?: number;
  className?: string;
  rotate?: number;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title && <title>{title}</title>}
      <path d={PLANE_PATH} fill="currentColor" />
    </svg>
  );
}

export const PLANE_PATH =
  "M50 3 C46.5 3 44.2 6 43.8 10.5 L43.2 24 L11 38.5 C9.2 39.3 8.5 40.6 8.5 42.5 L8.5 48.5 L43 45 L43.6 62 L31 71.5 L31 77.5 L46.2 74.5 C46.6 79.5 47.5 84 50 84 C52.5 84 53.4 79.5 53.8 74.5 L69 77.5 L69 71.5 L56.4 62 L57 45 L91.5 48.5 L91.5 42.5 C91.5 40.6 90.8 39.3 89 38.5 L56.8 24 L56.2 10.5 C55.8 6 53.5 3 50 3 Z";
