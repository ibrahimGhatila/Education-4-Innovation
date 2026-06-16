import Reveal from "./Reveal";

const partners = [
  { name: "aba Yurt Dışı Eğitim", url: "https://abaegitim.com/" },
  { name: "aba Psikoloji", url: "https://abapsikoloji.com/" },
  { name: "aba Med Edu & AI", url: "https://abamededu.ai/" },
  { name: "aba Tests Prep", url: "https://abatestsprep.com/" },
  { name: "Design House Istanbul", url: "https://designhouseist.com/" },
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
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 80} from="up">
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-bold text-ink-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-grape-700"
              >
                {partner.name}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
