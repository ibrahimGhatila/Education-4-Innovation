export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-mesh pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <span className="eyebrow">İnovasyon için Eğitim Vakfı</span>
          <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Geleceğin liderlerini <span className="text-gradient">bugünden</span> yetiştiriyoruz
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            E4I; öğrencileri ve aileleri geleceğe yönelik kariyer planlaması, dünyanın
            önde gelen üniversitelerine kabul ve inovasyon zihniyeti konusunda
            destekler. Yapay zekâdan yaşam bilimlerine, geleceğin alanlarına hazırlar.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#iletisim" className="btn-primary">
              Yolculuğa Başla
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#etkinlikler" className="btn-ghost">
              Programları Keşfet
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {[
              { value: "12+", label: "Küresel lokasyon" },
              { value: "5+", label: "Stratejik iş ortağı" },
              { value: "1000+", label: "Desteklenen öğrenci" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-black text-ink-900">{stat.value}</dt>
                <dd className="mt-1 text-sm text-ink-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-br from-flame-400 via-flame-500 to-flame-700 shadow-glow" />
            <div className="absolute inset-0 -rotate-2 rounded-3xl border border-white/60 bg-white/70 backdrop-blur-sm" />
            <div className="absolute inset-0 flex flex-col justify-between rounded-3xl bg-ink-900 p-8 text-white shadow-soft">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-flame-300">
                  Vizyon
                </span>
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="animate-float">
                  <path d="M26.5 3.2c1.3 6.1-1.7 9.7-5.1 13.1-3.6 3.6-7.7 7.2-7.7 14.1C13.7 39 19.4 45 26.2 45c7 0 12.4-5.3 12.4-12.7 0-4.9-2.4-8.9-4.7-12-.3 2.6-1.7 4.3-3.3 4.3-1.8 0-2.6-1.4-2.6-3.9 0-5.6 1.3-11.4-1.5-17.5Z" fill="#FF7438" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold leading-snug">
                  “İnovasyon bir yetenek değil, geliştirilebilen bir zihniyettir.”
                </p>
                <p className="mt-4 text-sm text-ink-200">
                  Geleceğin alanlarında küresel fırsatlar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
