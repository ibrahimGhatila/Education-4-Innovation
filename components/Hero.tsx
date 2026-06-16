import Star from "./Star";
import Motif from "./Motif";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-mesh pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Floating brand motifs */}
      <Motif className="pointer-events-none absolute -left-16 top-24 h-56 w-56 opacity-20 blur-[1px] animate-float-slow" stars={false} />
      <Motif className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 opacity-15 animate-float" stars={false} />
      <Star className="absolute left-[8%] top-36 text-leaf-400/70 animate-twinkle" size={22} />
      <Star className="absolute right-[14%] top-44 text-grape-400/60 animate-twinkle [animation-delay:1s]" size={16} />
      <Star className="absolute left-[22%] bottom-20 text-orange-400/60 animate-twinkle [animation-delay:2s]" size={18} />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <Star size={12} className="text-orange-500" />
            İnovasyon için Eğitim Vakfı
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Geleceğin liderlerini{" "}
            <span className="text-gradient-anim">bugünden</span> yetiştiriyoruz
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            E4I; öğrencileri ve aileleri geleceğe yönelik kariyer planlaması, dünyanın
            önde gelen üniversitelerine kabul ve inovasyon zihniyeti konusunda
            destekler. Yapay zekâdan yaşam bilimlerine, geleceğin alanlarına hazırlar.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#iletisim" className="btn-primary group">
              Yolculuğa Başla
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#etkinlikler" className="btn-ghost">Programları Keşfet</a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {[
              { to: 12, suffix: "+", label: "Küresel lokasyon", color: "text-orange-500" },
              { to: 5, suffix: "+", label: "Stratejik iş ortağı", color: "text-grape-600" },
              { to: 1000, suffix: "+", label: "Desteklenen öğrenci", color: "text-leaf-600" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className={`text-3xl font-black sm:text-4xl ${stat.color}`}>
                  <Counter to={stat.to} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1 text-sm text-ink-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero showcase card */}
        <div className="relative animate-fade-up [animation-delay:140ms]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 rotate-3 rounded-[2rem] bg-gradient-to-br from-leaf-400 via-grape-500 to-orange-500 bg-[length:200%_200%] shadow-glow animate-gradient" />
            <div className="absolute inset-0 -rotate-2 rounded-[2rem] border border-white/60 bg-white/60 backdrop-blur-sm" />
            <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[2rem] bg-ink-900 p-8 text-white shadow-soft">
              <Motif className="absolute -right-10 -top-10 h-48 w-48 opacity-90 animate-spin-slow" />
              <Star className="absolute bottom-24 left-6 text-leaf-300/80 animate-twinkle" size={20} />
              <div className="relative flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-leaf-300">
                  Vizyon
                </span>
              </div>
              <div className="relative">
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
