import Reveal from "./Reveal";
import Rings from "./Rings";

const posts = [
  { category: "İnovasyon", title: "Yapay zekâ çağında öğrenciler hangi becerilere odaklanmalı?", readTime: "5 dk okuma", bg: "bg-grape-600", image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=900&q=70&auto=format&fit=crop" },
  { category: "Üniversite", title: "Dünyanın önde gelen üniversitelerine kabul süreci nasıl planlanır?", readTime: "7 dk okuma", bg: "bg-berry-500", image: "https://images.unsplash.com/photo-1689686610856-3bcf921eb1f0?w=900&q=70&auto=format&fit=crop" },
  { category: "Kariyer", title: "Yaşam bilimleri: Geleceğin en hızlı büyüyen kariyer alanları", readTime: "4 dk okuma", bg: "bg-orange-500", image: "https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?w=900&q=70&auto=format&fit=crop" },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-ink-50 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Blog</span>
            <h2 className="section-title mt-5">Güncel içgörüler ve rehberler</h2>
          </div>
          <a href="#blog" className="btn-ghost shrink-0">Tüm yazılar</a>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
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
