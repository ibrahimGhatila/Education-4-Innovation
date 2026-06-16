type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
  showText?: boolean;
};

/**
 * Faithful SVG recreation of the official E4I logo: a green leaf holding
 * overlapping purple / maroon / orange circles with white star sparkles,
 * beside the "inovasyon için eğitim vakfı" wordmark.
 */
export default function Logo({ className = "", variant = "dark", showText = true }: LogoProps) {
  const wordColor = variant === "light" ? "text-white/90" : "text-ink-700";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          {/* Leaf container — teardrop with the point curling to the top-right */}
          <path
            id="e4i-leaf"
            d="M86 10C90 36 84 55 65 72 47 88 22 90 11 80 1 71 4 49 22 32 39 16 60 8 86 10Z"
          />
          <clipPath id="e4i-clip">
            <use href="#e4i-leaf" />
          </clipPath>
        </defs>

        <use href="#e4i-leaf" fill="#7BD32C" />

        <g clipPath="url(#e4i-clip)">
          <circle cx="40" cy="50" r="24" fill="#6F2AA4" />
          <circle cx="60" cy="60" r="16" fill="#8A1E3C" />
          <circle cx="44" cy="72" r="9" fill="#FB7F0D" />
          <g fill="#FFFFFF">
            <path d="M64 24c.5 3 2.4 4.9 5.4 5.4-3 .5-4.9 2.4-5.4 5.4-.5-3-2.4-4.9-5.4-5.4 3-.5 4.9-2.4 5.4-5.4Z" />
            <path d="M76 38c.3 1.9 1.5 3.1 3.4 3.4-1.9.3-3.1 1.5-3.4 3.4-.3-1.9-1.5-3.1-3.4-3.4 1.9-.3 3.1-1.5 3.4-3.4Z" />
            <path d="M54 20c.2 1.5 1.3 2.6 2.8 2.8-1.5.2-2.6 1.3-2.8 2.8-.2-1.5-1.3-2.6-2.8-2.8 1.5-.2 2.6-1.3 2.8-2.8Z" />
          </g>
        </g>
      </svg>

      {showText && (
        <span className={`text-[13px] font-semibold leading-[1.15] ${wordColor}`}>
          inovasyon
          <br />
          için eğitim
          <br />
          vakfı
        </span>
      )}
    </span>
  );
}
