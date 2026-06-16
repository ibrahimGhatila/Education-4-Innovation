import Reveal from "./Reveal";
import Rings from "./Rings";

export default function Contact() {
  return (
    <section id="iletisim" className="py-20 sm:py-28">
      <Reveal className="container-page" from="scale">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-grape-600 via-berry-600 to-orange-600 bg-[length:200%_200%] px-6 py-16 text-white shadow-glow-grape animate-gradient sm:px-12">
          <div className="bg-mesh pointer-events-none absolute inset-0 opacity-30" />
          <Rings className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 text-white/25 animate-spin-slow" />
          <Rings className="pointer-events-none absolute -bottom-16 left-4 h-44 w-44 text-white/15" count={3} />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Geleceğini birlikte şekillendirelim
              </h2>
              <p className="mt-4 max-w-md text-lg text-white/90">
                Öğrenci, veli veya kurum olarak bize ulaşın; size en uygun
                programları ve fırsatları birlikte keşfedelim.
              </p>
              <a
                href="mailto:info@educationforinnovation.org"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-grape-700 transition-transform hover:-translate-y-0.5"
              >
                E-posta gönder
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard label="Adres" value="Zorlu Center, Teras Evler TE 210, Beşiktaş / İstanbul" href="https://g.co/kgs/WmquifY" />
              <ContactCard label="Telefon" value="+90 (539) 859 78 66" href="tel:+905398597866" />
              <ContactCard label="E-posta" value="info@educationforinnovation.org" href="mailto:info@educationforinnovation.org" />
              <ContactCard label="Instagram" value="@e4i_vakfi" href="https://www.instagram.com/e4i_vakfi/" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ContactCard({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm transition-colors hover:bg-white/20"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-white/70">{label}</p>
      <p className="mt-2 font-medium leading-snug text-white">{value}</p>
    </a>
  );
}
