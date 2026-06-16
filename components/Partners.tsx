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
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-400">
          İş Ortaklarımız
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-bold text-ink-300 transition-colors hover:text-flame-600"
            >
              {partner.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
