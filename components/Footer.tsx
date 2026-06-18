import Logo from "./Logo";
import Rings from "./Rings";
import Star from "./Star";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/e4i_vakfi/" },
  { name: "Facebook", url: "https://www.facebook.com/E4Ivakif/" },
  { name: "YouTube", url: "https://www.youtube.com/@InovasyonicinEgitimVakf" },
  { name: "X", url: "https://x.com/e4i_vakfi" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/e4i/" },
];

const footerLinks = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#etkinlikler", label: "Etkinliklerimiz" },
  { href: "#projeler", label: "Projelerimiz" },
  { href: "#lokasyonlar", label: "Lokasyonlar" },
  { href: "#blog", label: "Blog" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-grape-700 via-berry-600 to-orange-500 bg-[length:200%_200%] text-white animate-gradient">
      <div className="bg-mesh pointer-events-none absolute inset-0 opacity-20" />
      <Rings className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 text-white/15 animate-spin-slow" />
      <Rings className="pointer-events-none absolute -bottom-28 right-0 h-[28rem] w-[28rem] text-white/10" count={5} />
      <Star className="absolute left-[20%] top-16 text-white/50 animate-twinkle" size={18} />
      <Star className="absolute right-[12%] top-28 text-white/40 animate-twinkle [animation-delay:1.2s]" size={14} />

      <div className="container-page relative py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo chip />
            <p className="mt-6 max-w-sm text-lg font-medium leading-relaxed text-white/90">
              Öğrencileri ve aileleri geleceğe hazırlayan küresel bir topluluk.
              İnovasyonu bir zihniyet hâline getiriyoruz.
            </p>
            <a
              href="#iletisim"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-grape-700 transition-transform hover:-translate-y-0.5"
            >
              Bize katıl
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">Keşfet</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-medium text-white/90 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">İletişim</h3>
            <ul className="mt-5 space-y-3 text-white/90">
              <li>Zorlu Center, Teras Evler TE 210, Beşiktaş / İstanbul</li>
              <li>
                <a href="tel:+905398597866" className="transition-colors hover:text-white">+90 (539) 859 78 66</a>
              </li>
              <li>
                <a href="mailto:info@educationforinnovation.org" className="transition-colors hover:text-white">
                  info@educationforinnovation.org
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-grape-700"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-sm text-white/80 sm:flex-row">
          <p>© {new Date().getFullYear()} Education for Innovation. Tüm hakları saklıdır.</p>
          <p>İnovasyon için Eğitim Vakfı</p>
        </div>
      </div>
    </footer>
  );
}
