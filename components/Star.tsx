type StarProps = {
  className?: string;
  size?: number;
};

/** Four-point sparkle/star motif — a recurring element of the E4I brand. */
export default function Star({ className = "", size = 16 }: StarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0c.7 6.3 4.9 10.6 12 12-7.1 1.4-11.3 5.7-12 12-.7-6.3-4.9-10.6-12-12 7.1-1.4 11.3-5.7 12-12Z" />
    </svg>
  );
}
