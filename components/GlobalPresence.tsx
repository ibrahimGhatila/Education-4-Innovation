import type { E4iContent } from "@/lib/cms/e4iContent";
import Reveal from "./Reveal";
import Rings from "./Rings";
import Star from "./Star";
import Skyline from "./Skyline";

type GlobalPresenceProps = {
  content: E4iContent["presence"];
};

export default function GlobalPresence({ content }: GlobalPresenceProps) {
  return (
    <section id="lokasyonlar" className="relative overflow-hidden bg-ink-900 pt-12 text-white sm:pt-16">
      <div className="bg-mesh pointer-events-none absolute inset-0 opacity-40" />
      <Rings className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 text-white/10" />

      <div className="relative">
        <Reveal className="container-page mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-leaf-400">
            <Star size={12} className="text-leaf-400" />
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-200">
            {content.body}
          </p>
        </Reveal>

        <Reveal className="container-page mt-8">
          <ul className="mx-auto grid max-w-5xl grid-cols-3 gap-x-6 gap-y-4 text-center sm:grid-cols-4 lg:grid-cols-6">
            {content.cities.map((city) => (
              <li
                key={city}
                className="flex items-center justify-center gap-1.5 text-base font-medium text-white/90 transition-colors hover:text-leaf-300"
              >
                <Star size={11} className="shrink-0 text-leaf-400" />
                {city}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10">
          <Skyline className="block h-auto w-full text-white" />
        </div>
      </div>
    </section>
  );
}
