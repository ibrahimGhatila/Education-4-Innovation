"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Rings from "./Rings";
import Star from "./Star";

type Project = {
  name: string;
  tag: string;
  description: string;
  image: string;
  accent: string; // text color for the eyebrow/number
};

const projects: Project[] = [
  {
    name: "Projeler",
    tag: "Etki Odaklı",
    description:
      "Öğrenci ve toplum odaklı, somut etki yaratan inovasyon projeleri yürütüyoruz. Fikir aşamasından uygulamaya kadar her adımda mentorluk ve kaynak sağlıyoruz.",
    image: "https://plus.unsplash.com/premium_photo-1663091226871-2878f62a524d?w=1400&q=70&auto=format&fit=crop",
    accent: "text-grape-600",
  },
  {
    name: "Sosyal Sorumluluk",
    tag: "Toplum",
    description:
      "Eğitimde fırsat eşitliğini destekleyen sosyal sorumluluk girişimleriyle, farklı arka planlardan gelen öğrencilerin geleceğe eşit koşullarda hazırlanmasını sağlıyoruz.",
    image: "https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?w=1400&q=70&auto=format&fit=crop",
    accent: "text-leaf-600",
  },
  {
    name: "Startup Projeleri",
    tag: "Girişimcilik",
    description:
      "Fikirden şirkete uzanan yolda genç girişimcilere mentorluk, kuluçka ve yatırımcı ağı desteği sunuyoruz. İnovasyonu sürdürülebilir bir işe dönüştürüyoruz.",
    image: "https://plus.unsplash.com/premium_photo-1661398591460-269d2f8635cb?w=1400&q=70&auto=format&fit=crop",
    accent: "text-orange-600",
  },
  {
    name: "Sponsorluk",
    tag: "İş Birliği",
    description:
      "Etkinlik ve programlarımıza güç katan kurumsal iş birlikleriyle, daha fazla öğrenciye ulaşıyor ve geleceğin yeteneklerine yatırım yapan markalarla buluşuyoruz.",
    image: "https://plus.unsplash.com/premium_photo-1661503423349-63ad7057bc22?w=1400&q=70&auto=format&fit=crop",
    accent: "text-berry-500",
  },
  {
    name: "Burslar",
    tag: "Destek",
    description:
      "Yetenekli öğrencilerin önündeki finansal engelleri kaldıran burs olanaklarıyla, başarının maddi koşullardan bağımsız olmasını hedefliyoruz.",
    image: "https://plus.unsplash.com/premium_photo-1714397507054-b34acc119eb5?w=1400&q=70&auto=format&fit=crop",
    accent: "text-grape-700",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const total = projects.length;

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <section id="projeler" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Projelerimiz</span>
          <h2 className="section-title mt-5">İz bırakan girişimler</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Her projeyi yakından tanıyın: sosyal sorumluluktan startup desteğine,
            burslardan sponsorluklara kadar geleceğe yatırım yapıyoruz.
          </p>
        </Reveal>

        <Reveal from="scale" className="mt-14">
          <div className="grid items-stretch gap-px overflow-hidden rounded-[1.75rem] border border-ink-100 bg-ink-100 shadow-lift lg:grid-cols-2">
            {/* Text side */}
            <div className="flex flex-col justify-between bg-white p-8 sm:p-10">
              <div key={`t-${index}`} className="animate-fade-up">
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-bold ${project.accent}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-ink-200" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                    {project.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-black text-ink-900 sm:text-4xl">{project.name}</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">{project.description}</p>
              </div>

              {/* Controls */}
              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Önceki proje"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-all hover:-translate-x-0.5 hover:border-grape-400 hover:bg-grape-50 hover:text-grape-700"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M19 12H5m6 6-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Sonraki proje"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-grape-600 to-orange-500 text-white shadow-glow transition-all hover:translate-x-0.5"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {projects.map((p, i) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`${p.name} projesine git`}
                      aria-current={i === index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === index ? "w-7 bg-grape-600" : "w-2 bg-ink-200 hover:bg-ink-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Image side */}
            <div className="relative min-h-[18rem] overflow-hidden bg-ink-900 lg:min-h-[26rem]">
              <Rings className="pointer-events-none absolute -right-16 -top-16 z-10 h-56 w-56 text-white/20" />
              <Star className="absolute right-8 top-8 z-10 text-white/70 animate-twinkle" size={18} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={`i-${index}`}
                src={project.image}
                alt={`${project.name} görseli`}
                className="h-full w-full animate-fade-up object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
