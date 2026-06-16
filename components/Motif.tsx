type MotifProps = {
  className?: string;
  /** "brand" = purple/maroon/orange circles; "ghost" = translucent white (for colored cards) */
  tone?: "brand" | "ghost";
  stars?: boolean;
};

/**
 * The E4I motif: overlapping circles (purple, maroon, orange) with star
 * sparkles — the visual language taken straight from the logo. Used as
 * decorative card art and as bold "icons".
 */
export default function Motif({ className = "", tone = "brand", stars = true }: MotifProps) {
  const c =
    tone === "ghost"
      ? { a: "rgba(255,255,255,0.30)", b: "rgba(255,255,255,0.20)", d: "rgba(255,255,255,0.45)", s: "rgba(255,255,255,0.9)" }
      : { a: "#6F2AA4", b: "#8A1E3C", d: "#FB7F0D", s: "#FFFFFF" };

  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      <circle cx="40" cy="46" r="28" fill={c.a} />
      <circle cx="63" cy="56" r="20" fill={c.b} />
      <circle cx="47" cy="71" r="12" fill={c.d} />
      {stars && (
        <g fill={c.s}>
          <path d="M72 22c.4 2.4 1.9 4 4.4 4.4-2.5.4-4 1.9-4.4 4.4-.4-2.5-1.9-4-4.4-4.4 2.5-.4 4-2 4.4-4.4Z" />
          <path d="M84 38c.3 1.7 1.4 2.8 3.1 3.1-1.7.3-2.8 1.4-3.1 3.1-.3-1.7-1.4-2.8-3.1-3.1 1.7-.3 2.8-1.4 3.1-3.1Z" />
          <path d="M61 30c.2 1.3 1.1 2.2 2.4 2.4-1.3.2-2.2 1.1-2.4 2.4-.2-1.3-1.1-2.2-2.4-2.4 1.3-.2 2.2-1.1 2.4-2.4Z" />
        </g>
      )}
    </svg>
  );
}
