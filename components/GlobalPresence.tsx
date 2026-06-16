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
    <section id="lokasyonlar" className="relative overflow-hidden bg-ink-900 pt-16 text-white sm:pt-20">
      <div className="bg-mesh pointer-events-none absolute inset-0 opacity-40" />
      <Rings className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 text-white/10" />

      <div className="relative">
        <Reveal className="container-page mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-leaf-300">
            <Star size={12} className="text-leaf-400" />
            Küresel Ağ
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Dünyanın dört bir yanında fırsatlar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-200">
            İnovasyon ekosistemlerinin kalbinde yer alan şehirlerde öğrencilerimizi
            küresel deneyimlerle buluşturuyoruz.
          </p>
        </Reveal>

        <Reveal className="container-page mt-9">
          <ul className="mx-auto grid max-w-5xl grid-cols-3 gap-x-6 gap-y-4 text-center sm:grid-cols-4 lg:grid-cols-6">
            {cities.map((city) => (
              <li
                key={city}
                className="flex items-center justify-center gap-1.5 text-base font-medium text-white/90 transition-colors hover:text-leaf-300"
              >
                <Star size={11} className="shrink-0 text-leaf-400" />
                {city}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* City skyline silhouette at the bottom of the section */}
        <div className="relative mt-8 h-[120px] sm:h-[170px]">
          <Skyline className="absolute bottom-0 left-0 h-full w-full text-white" />
        </div>
      </div>
    </section>
  );
}
