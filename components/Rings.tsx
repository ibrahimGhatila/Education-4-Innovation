type RingsProps = {
  className?: string;
  /** number of concentric rings (1-5) */
  count?: number;
};

/**
 * Decorative concentric rings radiating from a point — the soft "orbit"
 * motif used across the brand's ad creatives. Color follows `currentColor`,
 * so set it via a text-* utility on the element.
 */
export default function Rings({ className = "", count = 4 }: RingsProps) {
  const radii = [30, 56, 82, 108, 134].slice(0, count);
  return (
    <svg viewBox="0 0 280 280" fill="none" aria-hidden="true" className={className}>
      {radii.map((r, i) => (
        <circle
          key={r}
          cx="140"
          cy="140"
          r={r}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity={Math.max(0.12, 0.55 - i * 0.1)}
        />
      ))}
    </svg>
  );
}
