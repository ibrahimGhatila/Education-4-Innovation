import Reveal from "./Reveal";
import Rings from "./Rings";
import Star from "./Star";
import Skyline from "./Skyline";

const cities = [
  "San Francisco",
  "Boston",
  "New York",
  "Toronto",
  "Londra",
  "Dublin",
  "Amsterdam",
  "Berlin",
  "Milano",
  "Cenevre",
  "Dubai",
  "İstanbul",
];

export default function GlobalPresence() {
  return (
    <section id="lokasyonlar" className="relative overflow-hidden bg-ink-900 pt-20 text-white sm:pt-28">
      <div className="bg-mesh pointer-events-none absolute inset-0 opacity-40" />
      <Rings className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 text-white/10" />
      <Rings className="pointer-events-none absolute -bottom-10 right-0 h-96 w-96 text-white/[0.07]" count={5} />

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

        <Reveal className="container-page mt-12">
          <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {cities.map((city) => (
              <li
                key={city}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-base font-medium text-white/90 transition-colors hover:border-leaf-400/60 hover:bg-white/10"
              >
                <Star size={12} className="shrink-0 text-leaf-400" />
                {city}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* City skyline silhouette at the bottom of the section */}
        <div className="relative mt-16 h-[180px] sm:h-[240px]">
          <Skyline className="absolute bottom-0 left-0 h-full w-full text-white" />
        </div>
      </div>
    </section>
  );
}
