import Logo from "./Logo";

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
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm leading-relaxed text-ink-500">
              İnovasyon için Eğitim Vakfı — öğrencileri ve aileleri geleceğe
              hazırlayan küresel bir topluluk.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
              Keşfet
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ink-500 transition-colors hover:text-grape-700">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
              İletişim
            </h3>
            <ul className="mt-4 space-y-3 text-ink-500">
              <li>Zorlu Center, Teras Evler TE 210, Beşiktaş / İstanbul</li>
              <li>
                <a href="tel:+905398597866" className="transition-colors hover:text-grape-700">
                  +90 (539) 859 78 66
                </a>
              </li>
              <li>
                <a href="mailto:info@educationforinnovation.org" className="transition-colors hover:text-grape-700">
                  info@educationforinnovation.org
                </a>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink-100 px-3.5 py-1.5 text-xs font-medium text-ink-500 transition-colors hover:border-grape-300 hover:text-grape-700"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-8 text-sm text-ink-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Education for Innovation. Tüm hakları saklıdır.</p>
          <p>İnovasyon için Eğitim Vakfı</p>
        </div>
      </div>
    </footer>
  );
}
