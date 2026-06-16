const projects = [
  {
    name: "Projeler",
    description: "Öğrenci ve toplum odaklı, etki yaratan inovasyon projeleri.",
  },
  {
    name: "Sosyal Sorumluluk",
    description: "Eğitimde fırsat eşitliğini destekleyen sosyal sorumluluk girişimleri.",
  },
  {
    name: "Startup Projeleri",
    description: "Fikirden şirkete; genç girişimcilere mentorluk ve kuluçka desteği.",
  },
  {
    name: "Sponsorluk",
    description: "Etkinlik ve programlarımıza güç katan kurumsal iş birlikleri.",
  },
  {
    name: "Burslar",
    description: "Yetenekli öğrencilerin önündeki engelleri kaldıran burs olanakları.",
  },
];

export default function Projects() {
  return (
    <section id="projeler" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Projelerimiz</span>
          <h2 className="section-title mt-5">İz bırakan girişimler</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Sosyal sorumluluktan startup desteğine, burslardan sponsorluklara kadar
            geleceğe yatırım yapan projeler yürütüyoruz.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="group relative bg-white p-8 transition-colors hover:bg-flame-50"
            >
              <span className="text-5xl font-black text-ink-100 transition-colors group-hover:text-flame-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink-900">{project.name}</h3>
              <p className="mt-2 leading-relaxed text-ink-500">{project.description}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center bg-ink-900 p-8 text-white">
            <h3 className="text-xl font-bold">Birlikte üretelim</h3>
            <p className="mt-2 text-ink-200">
              Projelerimize katılmak veya destek olmak ister misiniz?
            </p>
            <a href="#iletisim" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-flame-300 hover:text-flame-200">
              İletişime geç
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
