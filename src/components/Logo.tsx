export function StarMark({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden>
      {/* four-point compass star */}
      <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" fill="var(--color-blue)" />
      <path d="M50 0 L61 39 L100 50 L61 61 L50 100 Z" fill="var(--color-red)" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <StarMark />
      <span className="text-[1.05rem] font-bold tracking-[0.22em] text-ink">
        YAKSTARS
      </span>
    </span>
  );
}
