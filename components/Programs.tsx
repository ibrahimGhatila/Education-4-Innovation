import Reveal from "./Reveal";
import Rings from "./Rings";
import Star from "./Star";

const programs = [
  { name: "Staj", tag: "Kariyer", description: "İnovasyon odaklı şirketler ve girişimlerle buluşturan gerçek dünya staj deneyimleri.", grad: "from-grape-500 via-grape-600 to-berry-700" },
  { name: "Eğitimler", tag: "Gelişim", description: "Geleceğin becerilerine odaklanan atölyeler, sertifika programları ve uzman eğitimleri.", grad: "from-orange-400 via-orange-500 to-berry-500" },
  { name: "Konferans", tag: "İlham", description: "Alanında öncü isimleri ve öğrencileri aynı sahnede buluşturan ilham verici konferanslar.", grad: "from-berry-500 via-berry-600 to-grape-700" },
  { name: "Yarışmalar", tag: "Rekabet", description: "Yaratıcılığı ve rekabeti teşvik eden, ödüllü proje ve fikir yarışmaları.", grad: "from-leaf-500 via-leaf-600 to-grape-600" },
  { name: "Hackathon", tag: "İnovasyon", description: "48 saatte fikirden prototipe; takım çalışması ve hızlı inovasyonun adresi.", grad: "from-ink-700 via-grape-900 to-ink-900" },
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

        {/* Seamless tile grid — only the outer corners are rounded */}
        <Reveal className="mt-12 overflow-hidden rounded-[1.75rem] shadow-lift">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.name}
                className={`group relative flex min-h-[15rem] flex-col justify-between overflow-hidden p-8 text-white ring-1 ring-inset ring-white/10 transition-[filter] duration-300 hover:brightness-110 bg-gradient-to-br ${program.grad}`}
              >
                <Rings className="absolute -right-14 -top-14 h-52 w-52 text-white/25 transition-transform duration-700 ease-out group-hover:scale-110" />
                <Star className="absolute right-7 top-7 text-white/80 transition-transform duration-500 group-hover:scale-150" size={16} />
                <Star className="absolute right-16 top-16 text-white/50 transition-transform duration-500 group-hover:scale-125" size={10} />
                <div className="relative">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                    {program.tag}
                  </span>
                  <h3 className="mt-5 text-2xl font-black">{program.name}</h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-white/85">{program.description}</p>
                </div>
                <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                  Daha fazla bilgi
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </article>
            ))}

            {/* CTA tile — signature brand gradient, completes the 2×3 block */}
            <a
              href="#iletisim"
              className="group relative flex min-h-[15rem] flex-col justify-between overflow-hidden bg-gradient-to-br from-grape-700 via-berry-600 to-orange-500 bg-[length:200%_200%] p-8 text-white ring-1 ring-inset ring-white/10 transition-all duration-500 hover:bg-right"
            >
              <Rings className="absolute -bottom-16 -right-12 h-56 w-56 text-white/25 transition-transform duration-700 group-hover:scale-110" />
              <Star className="absolute left-8 top-10 text-white/70 animate-twinkle" size={18} />
              <div className="relative">
                <h3 className="text-2xl font-black">Hepsini keşfet</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-white/90">
                  Tüm etkinliklerimizi ve başvuru takvimini birlikte inceleyelim.
                </p>
              </div>
              <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                İletişime geç
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
