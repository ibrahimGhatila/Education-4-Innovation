import type { E4iContent } from "@/lib/cms/e4iContent";
import Reveal from "./Reveal";
import Rings from "./Rings";

type BlogProps = {
  content: E4iContent["blog"];
};

export default function Blog({ content }: BlogProps) {
  return (
    <section id="blog" className="bg-ink-50 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="section-title mt-5">{content.title}</h2>
          </div>
          <a href={content.cta_href} className="btn-ghost shrink-0">{content.cta_label}</a>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 110} from="up" className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 opacity-25 mix-blend-multiply ${post.bg}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
                  <Rings className="absolute -right-10 -top-10 h-40 w-40 text-white/25 transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                    {post.readTime}
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-grape-700">
                    {post.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
