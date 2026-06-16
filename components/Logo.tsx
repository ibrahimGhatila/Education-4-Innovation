type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

/**
 * E4I brand mark — a stylized flame inspired by the foundation's logo,
 * paired with the "e4i" wordmark. Swap the SVG for the official asset
 * (public/e4i-logo.svg) when available.
 */
export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const wordColor = variant === "light" ? "text-white" : "text-ink-900";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="flameGrad" x1="12" y1="4" x2="36" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFB020" />
            <stop offset="0.5" stopColor="#FF5A1F" />
            <stop offset="1" stopColor="#F03E0A" />
          </linearGradient>
        </defs>
        <path
          d="M26.5 3.2c1.3 6.1-1.7 9.7-5.1 13.1-3.6 3.6-7.7 7.2-7.7 14.1C13.7 39 19.4 45 26.2 45c7 0 12.4-5.3 12.4-12.7 0-4.9-2.4-8.9-4.7-12-.3 2.6-1.7 4.3-3.3 4.3-1.8 0-2.6-1.4-2.6-3.9 0-5.6 1.3-11.4-1.5-17.5Z"
          fill="url(#flameGrad)"
        />
        <path
          d="M24.8 24.5c1 3.4-.6 4.9-1.9 6.5-1.3 1.6-2.4 3-2.4 5.4 0 3 2.2 5.2 5 5.2 2.9 0 5-2.3 5-5.4 0-2.6-1.4-4.6-2.7-6.4-.4 1.2-1 1.9-1.8 1.9-.8 0-1.2-.7-1.2-2 0-1.9.9-3.6 0-5.2Z"
          fill="#FFF4ED"
          fillOpacity="0.9"
        />
      </svg>
      <span className={`text-xl font-black tracking-tight ${wordColor}`}>
        e4i
        <span className="text-flame-500">.</span>
      </span>
    </span>
  );
}
