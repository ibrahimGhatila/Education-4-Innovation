type LogoProps = {
  className?: string;
  /** Wrap in a white rounded chip — for use on dark/coloured backgrounds */
  chip?: boolean;
};

const LOGO_SRC = "/logo-521bc28c-00f8-4a50-a451-4ade87746277.webp";
const ALT = "İnovasyon için Eğitim Vakfı";

/** Official E4I logo lockup (green leaf mark + wordmark). */
export default function Logo({ className = "h-11 w-auto", chip = false }: LogoProps) {
  if (chip) {
    return (
      <span className="inline-flex items-center rounded-2xl bg-white px-4 py-2.5 shadow-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO_SRC} alt={ALT} className="h-9 w-auto" />
      </span>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={LOGO_SRC} alt={ALT} className={className} />;
}
