import type { E4iContent } from "@/lib/cms/e4iContent";
import Reveal from "./Reveal";
import Motif from "./Motif";

type MissionProps = {
  content: E4iContent["mission"];
};

export default function Mission({ content }: MissionProps) {
  return (
    <section id="hakkimizda" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="section-title mt-5">
            {content.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            {content.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {content.values.map((value, i) => (
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
