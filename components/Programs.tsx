import Reveal from "./Reveal";
import Motif from "./Motif";
import Star from "./Star";

const programs = [
  { name: "Staj", tag: "Kariyer", description: "İnovasyon odaklı şirketler ve girişimlerle buluşturan gerçek dünya staj deneyimleri.", bg: "bg-grape-600" },
  { name: "Eğitimler", tag: "Gelişim", description: "Geleceğin becerilerine odaklanan atölyeler, sertifika programları ve uzman eğitimleri.", bg: "bg-orange-500" },
  { name: "Konferans", tag: "İlham", description: "Alanında öncü isimleri ve öğrencileri aynı sahnede buluşturan ilham verici konferanslar.", bg: "bg-berry-500" },
  { name: "Yarışmalar", tag: "Rekabet", description: "Yaratıcılığı ve rekabeti teşvik eden, ödüllü proje ve fikir yarışmaları.", bg: "bg-leaf-600" },
  { name: "Hackathon", tag: "İnovasyon", description: "48 saatte fikirden prototipe; takım çalışması ve hızlı inovasyonun adresi.", bg: "bg-ink-800" },
];

export default function Programs() {
  return (
    <section id="etkinlikler" className="relative overflow-hidden bg-ink-50 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Etkinliklerimiz</span>
            <h2 className="section-title mt-5">Öğrenmeyi deneyime dönüştüren programlar</h2>
          </div>
          <p className="max-w-md text-ink-500">
            Stajlardan hackathonlara kadar her etkinlik, öğrencilerin geleceğe bir adım
            önde başlamasını hedefler.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal key={program.name} delay={i * 90} from="up" className="h-full">
              <article
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-7 text-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift ${program.bg}`}
              >
                <Motif
                  tone="ghost"
                  stars={false}
                  className="absolute -right-8 -top-8 h-40 w-40 transition-transform duration-700 ease-out group-hover:rotate-45 group-hover:scale-110"
                />
                <Star className="absolute right-6 top-6 text-white/70 transition-transform duration-500 group-hover:scale-150" size={16} />
                <div className="relative">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                    {program.tag}
                  </span>
                  <h3 className="mt-5 text-2xl font-black">{program.name}</h3>
                  <p className="mt-3 leading-relaxed text-white/85">{program.description}</p>
                </div>
                <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                  Daha fazla bilgi
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </article>
            </Reveal>
          ))}

          {/* CTA tile */}
          <Reveal delay={programs.length * 90} from="up" className="h-full">
            <a
              href="#iletisim"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-dashed border-ink-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-grape-400 hover:shadow-lift"
            >
              <Motif className="absolute -bottom-8 -right-8 h-36 w-36 opacity-30 transition-transform duration-700 group-hover:scale-110" />
              <div className="relative">
                <h3 className="text-2xl font-black text-ink-900">Hepsini keşfet</h3>
                <p className="mt-3 leading-relaxed text-ink-500">
                  Tüm etkinliklerimizi ve başvuru takvimini birlikte inceleyelim.
                </p>
              </div>
              <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-grape-700">
                İletişime geç
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
