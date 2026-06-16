type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
  showText?: boolean;
};

/**
 * Faithful SVG recreation of the official E4I mark: a green leaf holding
 * nested purple → maroon → orange circles (the brand "swirl") with white
 * star sparkles, beside the "inovasyon için eğitim vakfı" wordmark.
 *
 * To use the official asset instead, drop it in /public and replace this
 * <svg> with an <img src="/e4i-logo.svg" ... />.
 */
export default function Logo({ className = "", variant = "dark", showText = true }: LogoProps) {
  const wordColor = variant === "light" ? "text-white" : "text-ink-700";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <path
            id="e4i-leaf"
            d="M99 18C108 45 101 72 78 90 57 106 28 106 16 91 4 77 8 49 31 31 52 15 74 10 99 18Z"
          />
          <clipPath id="e4i-clip">
            <use href="#e4i-leaf" />
          </clipPath>
        </defs>

        <use href="#e4i-leaf" fill="#7BD32C" />

        <g clipPath="url(#e4i-clip)">
          {/* nested "swirl" circles, offset toward lower-left */}
          <circle cx="62" cy="54" r="27" fill="#6F2AA4" />
          <circle cx="55" cy="63" r="18" fill="#8A1E3C" />
          <circle cx="50" cy="69" r="9" fill="#FB7F0D" />
          <circle cx="48" cy="71" r="3.4" fill="#FFE2B0" />

          {/* star sparkles, upper-right */}
          <g fill="#FFFFFF">
            <path d="M84 30c.6 3.4 2.7 5.5 6.1 6.1-3.4.6-5.5 2.7-6.1 6.1-.6-3.4-2.7-5.5-6.1-6.1 3.4-.6 5.5-2.7 6.1-6.1Z" />
            <path d="M96 46c.4 2.1 1.6 3.3 3.7 3.7-2.1.4-3.3 1.6-3.7 3.7-.4-2.1-1.6-3.3-3.7-3.7 2.1-.4 3.3-1.6 3.7-3.7Z" />
            <path d="M74 26c.3 1.7 1.3 2.7 3 3-1.7.3-2.7 1.3-3 3-.3-1.7-1.3-2.7-3-3 1.7-.3 2.7-1.3 3-3Z" />
          </g>
        </g>
      </svg>

      {showText && (
        <span className={`text-[15px] font-semibold leading-[1.12] ${wordColor}`}>
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
