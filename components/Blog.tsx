import Reveal from "./Reveal";
import Rings from "./Rings";
import Star from "./Star";

const posts = [
  { category: "İnovasyon", title: "Yapay zekâ çağında öğrenciler hangi becerilere odaklanmalı?", readTime: "5 dk okuma", bg: "bg-grape-600" },
  { category: "Üniversite", title: "Dünyanın önde gelen üniversitelerine kabul süreci nasıl planlanır?", readTime: "7 dk okuma", bg: "bg-berry-500" },
  { category: "Kariyer", title: "Yaşam bilimleri: Geleceğin en hızlı büyüyen kariyer alanları", readTime: "4 dk okuma", bg: "bg-orange-500" },
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
                <div className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden ${post.bg}`}>
                  <Rings className="absolute -right-10 -top-10 h-40 w-40 text-white/25 transition-transform duration-700 group-hover:scale-110" />
                  <Star className="text-white/90 transition-transform duration-500 group-hover:scale-125" size={40} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-grape-700">
                    <span>{post.category}</span>
                    <span className="text-ink-300">•</span>
                    <span className="text-ink-400">{post.readTime}</span>
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
