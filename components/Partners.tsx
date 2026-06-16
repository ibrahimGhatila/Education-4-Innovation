import Reveal from "./Reveal";

const partners = [
  { name: "aba Yurt Dışı Eğitim", url: "https://abaegitim.com/", logo: "/partners/aba-egitim.svg" },
  { name: "aba Psikoloji", url: "https://abapsikoloji.com/", logo: "/partners/aba-psikoloji.svg" },
  { name: "aba Med Edu & AI", url: "https://abamededu.ai/", logo: "/partners/aba-mededu.svg" },
  { name: "aba Tests Prep", url: "https://abatestsprep.com/", logo: "/partners/aba-tests.svg" },
  { name: "Design House Istanbul", url: "https://designhouseist.com/", logo: "/partners/design-house.svg" },
];

export default function Partners() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-400">
            İş Ortaklarımız
          </p>
        </Reveal>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 80} from="up">
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                title={partner.name}
                className="block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto opacity-70 grayscale transition duration-300 hover:-translate-y-0.5 hover:opacity-100 hover:grayscale-0 sm:h-14"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
