import type { E4iContent } from "@/lib/cms/e4iContent";
import Reveal from "./Reveal";

type PartnersProps = {
  content: E4iContent["partners"];
};

export default function Partners({ content }: PartnersProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-400">
            {content.title}
          </p>
        </Reveal>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {content.items.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 80} from="up">
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                title={partner.name}
                className="block transition-transform duration-300 hover:-translate-y-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain sm:h-[72px]"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
