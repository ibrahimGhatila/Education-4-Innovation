import Reveal from "./Reveal";
import Motif from "./Motif";

const values = [
  {
    title: "İnovasyon Zihniyeti",
    description:
      "Öğrencilerin merak, eleştirel düşünme ve problem çözme becerilerini geliştirerek geleceğe hazır bir bakış açısı kazandırıyoruz.",
    tint: "bg-orange-50 border-orange-100",
  },
  {
    title: "Küresel Vizyon",
    description:
      "San Francisco'dan İstanbul'a uzanan ekosistemimizle öğrencileri dünyanın önde gelen üniversiteleri ve fırsatlarıyla buluşturuyoruz.",
    tint: "bg-grape-50 border-grape-100",
  },
  {
    title: "Geleceğin Alanları",
    description:
      "Yapay zekâ, yaşam bilimleri ve girişimcilik gibi yükselen alanlarda öğrencileri kariyerlerine bir adım önde başlatıyoruz.",
    tint: "bg-leaf-50 border-leaf-100",
  },
];

export default function Mission() {
  return (
    <section id="hakkimizda" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Hakkımızda</span>
          <h2 className="section-title mt-5">
            Eğitimle inovasyonu buluşturan bir vakıf
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Education for Innovation (E4I), öğrencileri ve aileleri geleceğe yönelik
            kariyer planlamasında yönlendirir; inovasyon ekosistemlerini anlamalarına ve
            yarının dünyasına hazırlanmalarına rehberlik eder.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 120} from="up">
              <div
                className={`group h-full rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${value.tint}`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-soft">
                  <Motif className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[18deg] group-hover:scale-110" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink-900">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
