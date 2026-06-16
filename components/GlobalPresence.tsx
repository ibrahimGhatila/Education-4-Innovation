import Reveal from "./Reveal";
import Motif from "./Motif";
import Star from "./Star";

const row1 = ["San Francisco", "Boston", "New York", "Toronto", "Londra", "Dublin"];
const row2 = ["Amsterdam", "Berlin", "Milano", "Cenevre", "Dubai", "İstanbul"];

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="group relative flex overflow-hidden mask-fade-x">
      {[0, 1].map((dup) => (
        <div
          key={dup}
          aria-hidden={dup === 1}
          className={`flex shrink-0 gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused] ${
            reverse ? "[animation-direction:reverse]" : ""
          }`}
        >
          {items.map((city) => (
            <span
              key={city}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 transition-colors hover:border-leaf-400 hover:bg-leaf-500/10 hover:text-white"
            >
              <Star size={12} className="text-leaf-400" />
              {city}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function GlobalPresence() {
  return (
    <section id="lokasyonlar" className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-28">
      <div className="bg-mesh pointer-events-none absolute inset-0 opacity-40" />
      <Motif tone="ghost" className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 opacity-30 animate-spin-slow" />
      <Motif tone="ghost" className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 opacity-20 animate-float-slow" />

      <div className="relative">
        <Reveal className="container-page mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-leaf-300">
            <Star size={12} className="text-leaf-400" />
            Küresel Ağ
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Dünyanın dört bir yanında fırsatlar
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-200">
            İnovasyon ekosistemlerinin kalbinde yer alan şehirlerde öğrencilerimizi
            küresel deneyimlerle buluşturuyoruz.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          <Marquee items={row1} />
          <Marquee items={row2} reverse />
        </div>
      </div>
    </section>
  );
}
