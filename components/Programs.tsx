import type { E4iContent } from "@/lib/cms/e4iContent";
import Reveal from "./Reveal";
import Rings from "./Rings";
import Star from "./Star";

type ProgramsProps = {
  content: E4iContent["programs"];
};

export default function Programs({ content }: ProgramsProps) {
  return (
    <section id="etkinlikler" className="relative overflow-hidden bg-ink-50 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="section-title mt-5">{content.title}</h2>
          </div>
          <p className="max-w-md text-ink-500">
            {content.body}
          </p>
        </Reveal>

        <Reveal className="mt-12 overflow-hidden rounded-[1.75rem] shadow-lift">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {content.items.map((program) => (
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

            <a
              href={content.cta_href}
              className="group relative flex min-h-[15rem] flex-col justify-between overflow-hidden bg-gradient-to-br from-grape-700 via-berry-600 to-orange-500 bg-[length:200%_200%] p-8 text-white ring-1 ring-inset ring-white/10 transition-all duration-500 hover:bg-right"
            >
              <Rings className="absolute -bottom-16 -right-12 h-56 w-56 text-white/25 transition-transform duration-700 group-hover:scale-110" />
              <Star className="absolute left-8 top-10 text-white/70 animate-twinkle" size={18} />
              <div className="relative">
                <h3 className="text-2xl font-black">{content.cta_title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-white/90">
                  {content.cta_body}
                </p>
              </div>
              <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                {content.cta_label}
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
