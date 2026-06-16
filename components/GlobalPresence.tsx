const locations = [
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
    <section id="lokasyonlar" className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-28">
      <div className="bg-mesh pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-leaf-300">
            Küresel Ağ
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Dünyanın dört bir yanında fırsatlar
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-200">
            İnovasyon ekosistemlerinin kalbinde yer alan şehirlerde öğrencilerimizi
            küresel deneyimlerle buluşturuyoruz.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {locations.map((city) => (
            <span
              key={city}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-leaf-400 hover:bg-leaf-500/10 hover:text-white"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
