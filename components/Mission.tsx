const values = [
  {
    title: "İnovasyon Zihniyeti",
    description:
      "Öğrencilerin merak, eleştirel düşünme ve problem çözme becerilerini geliştirerek geleceğe hazır bir bakış açısı kazandırıyoruz.",
    accent: "bg-orange-50 text-orange-600 group-hover:bg-orange-500",
    icon: (
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v.3h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2Z" />
    ),
  },
  {
    title: "Küresel Vizyon",
    description:
      "San Francisco'dan İstanbul'a uzanan ekosistemimizle öğrencileri dünyanın önde gelen üniversiteleri ve fırsatlarıyla buluşturuyoruz.",
    accent: "bg-grape-50 text-grape-600 group-hover:bg-grape-500",
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0c2.5 2.5 4 6 4 10s-1.5 7.5-4 10m0-20C9.5 4.5 8 8 8 12s1.5 7.5 4 10M2 12h20" />
    ),
  },
  {
    title: "Geleceğin Alanları",
    description:
      "Yapay zekâ, yaşam bilimleri ve girişimcilik gibi yükselen alanlarda öğrencileri kariyerlerine bir adım önde başlatıyoruz.",
    accent: "bg-leaf-50 text-leaf-700 group-hover:bg-leaf-500",
    icon: (
      <path d="M13 2 4.5 12.5a1 1 0 0 0 .8 1.6H11l-1 7.9 8.5-10.5a1 1 0 0 0-.8-1.6H12l1-7.9Z" />
    ),
  },
];

export default function Mission() {
  return (
    <section id="hakkimizda" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Hakkımızda</span>
          <h2 className="section-title mt-5">
            Eğitimle inovasyonu buluşturan bir vakıf
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Education for Innovation (E4I), öğrencileri ve aileleri geleceğe yönelik
            kariyer planlamasında yönlendirir; inovasyon ekosistemlerini anlamalarına ve
            yarının dünyasına hazırlanmalarına rehberlik eder.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-3xl border border-ink-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ink-200"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors group-hover:text-white ${value.accent}`}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {value.icon}
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink-900">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-500">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
