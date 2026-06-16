const posts = [
  {
    category: "İnovasyon",
    title: "Yapay zekâ çağında öğrenciler hangi becerilere odaklanmalı?",
    readTime: "5 dk okuma",
  },
  {
    category: "Üniversite",
    title: "Dünyanın önde gelen üniversitelerine kabul süreci nasıl planlanır?",
    readTime: "7 dk okuma",
  },
  {
    category: "Kariyer",
    title: "Yaşam bilimleri: Geleceğin en hızlı büyüyen kariyer alanları",
    readTime: "4 dk okuma",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-ink-50 py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Blog</span>
            <h2 className="section-title mt-5">Güncel içgörüler ve rehberler</h2>
          </div>
          <a href="#blog" className="btn-ghost shrink-0">
            Tüm yazılar
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-mesh flex aspect-[16/10] items-center justify-center bg-flame-50">
                <svg width="44" height="44" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="opacity-80">
                  <path d="M26.5 3.2c1.3 6.1-1.7 9.7-5.1 13.1-3.6 3.6-7.7 7.2-7.7 14.1C13.7 39 19.4 45 26.2 45c7 0 12.4-5.3 12.4-12.7 0-4.9-2.4-8.9-4.7-12-.3 2.6-1.7 4.3-3.3 4.3-1.8 0-2.6-1.4-2.6-3.9 0-5.6 1.3-11.4-1.5-17.5Z" fill="#FF7438" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-flame-600">
                  <span>{post.category}</span>
                  <span className="text-ink-300">•</span>
                  <span className="text-ink-400">{post.readTime}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-flame-600">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
