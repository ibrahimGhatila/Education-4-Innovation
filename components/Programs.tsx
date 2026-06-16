const programs = [
  {
    name: "Staj",
    description:
      "Öğrencileri inovasyon odaklı şirketler ve girişimlerle buluşturan gerçek dünya staj deneyimleri.",
    tag: "Kariyer",
  },
  {
    name: "Eğitimler",
    description:
      "Geleceğin becerilerine odaklanan atölyeler, sertifika programları ve uzman liderliğinde eğitimler.",
    tag: "Gelişim",
  },
  {
    name: "Konferans",
    description:
      "Alanında öncü isimleri ve öğrencileri aynı sahnede buluşturan ilham verici konferanslar.",
    tag: "İlham",
  },
  {
    name: "Yarışmalar",
    description:
      "Yaratıcılığı ve rekabeti teşvik eden, ödüllü proje ve fikir yarışmaları.",
    tag: "Rekabet",
  },
  {
    name: "Hackathon",
    description:
      "48 saatte fikirden prototipe; takım çalışması ve hızlı inovasyonun adresi.",
    tag: "İnovasyon",
  },
];

export default function Programs() {
  return (
    <section id="etkinlikler" className="bg-ink-50 py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Etkinliklerimiz</span>
            <h2 className="section-title mt-5">
              Öğrenmeyi deneyime dönüştüren programlar
            </h2>
          </div>
          <p className="max-w-md text-ink-500">
            Stajlardan hackathonlara kadar her etkinlik, öğrencilerin geleceğe
            bir adım önde başlamasını hedefler.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <article
              key={program.name}
              className={`group flex flex-col justify-between rounded-3xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  {program.tag}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-ink-900">{program.name}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{program.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                Daha fazla bilgi
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
