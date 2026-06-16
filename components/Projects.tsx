import Reveal from "./Reveal";
import Motif from "./Motif";

const projects = [
  { name: "Projeler", description: "Öğrenci ve toplum odaklı, etki yaratan inovasyon projeleri.", ring: "group-hover:bg-grape-500" },
  { name: "Sosyal Sorumluluk", description: "Eğitimde fırsat eşitliğini destekleyen sosyal sorumluluk girişimleri.", ring: "group-hover:bg-leaf-600" },
  { name: "Startup Projeleri", description: "Fikirden şirkete; genç girişimcilere mentorluk ve kuluçka desteği.", ring: "group-hover:bg-orange-500" },
  { name: "Sponsorluk", description: "Etkinlik ve programlarımıza güç katan kurumsal iş birlikleri.", ring: "group-hover:bg-berry-500" },
  { name: "Burslar", description: "Yetenekli öğrencilerin önündeki engelleri kaldıran burs olanakları.", ring: "group-hover:bg-grape-600" },
];

export default function Projects() {
  return (
    <section id="projeler" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Projelerimiz</span>
          <h2 className="section-title mt-5">İz bırakan girişimler</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Sosyal sorumluluktan startup desteğine, burslardan sponsorluklara kadar
            geleceğe yatırım yapan projeler yürütüyoruz.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 90} from="scale" className="h-full">
              <div className="group h-full rounded-3xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink-200 hover:shadow-lift">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-50 transition-colors duration-300 ${project.ring}`}>
                    <Motif className="h-9 w-9 transition-all duration-500 group-hover:rotate-12 group-hover:[filter:brightness(0)_invert(1)]" />
                  </div>
                  <span className="text-4xl font-black text-ink-100 transition-colors group-hover:text-ink-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink-900">{project.name}</h3>
                <p className="mt-2 leading-relaxed text-ink-500">{project.description}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={projects.length * 90} from="scale" className="h-full">
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 p-8 text-white">
              <Motif tone="ghost" className="absolute -right-6 -top-6 h-40 w-40 animate-spin-slow" />
              <h3 className="relative text-xl font-bold">Birlikte üretelim</h3>
              <p className="relative mt-2 text-ink-200">
                Projelerimize katılmak veya destek olmak ister misiniz?
              </p>
              <a href="#iletisim" className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-leaf-300 hover:text-leaf-200">
                İletişime geç
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
