export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  name: string;
  url: string;
};

export type StatItem = {
  to: number;
  suffix: string;
  label: string;
  color: string;
};

export type ValueCard = {
  title: string;
  description: string;
  tint: string;
};

export type ProgramItem = {
  name: string;
  tag: string;
  description: string;
  grad: string;
};

export type ProjectItem = {
  name: string;
  tag: string;
  description: string;
  image: string;
  accent: string;
};

export type PartnerItem = {
  name: string;
  url: string;
  logo: string;
};

export type BlogPost = {
  category: string;
  title: string;
  readTime: string;
  bg: string;
  image: string;
};

export type ContactCardItem = {
  label: string;
  value: string;
  href: string;
};

export type E4iContent = {
  nav: {
    links: NavLink[];
    cta_label: string;
    cta_href: string;
  };
  hero: {
    eyebrow: string;
    title_prefix: string;
    title_highlight: string;
    title_suffix: string;
    body: string;
    primary_label: string;
    primary_href: string;
    secondary_label: string;
    secondary_href: string;
    stats: StatItem[];
    image: string;
    image_alt: string;
    image_badge: string;
    quote: string;
    quote_caption: string;
  };
  mission: {
    eyebrow: string;
    title: string;
    body: string;
    values: ValueCard[];
  };
  programs: {
    eyebrow: string;
    title: string;
    body: string;
    items: ProgramItem[];
    cta_title: string;
    cta_body: string;
    cta_label: string;
    cta_href: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    body: string;
    items: ProjectItem[];
  };
  presence: {
    eyebrow: string;
    title: string;
    body: string;
    cities: string[];
  };
  partners: {
    title: string;
    items: PartnerItem[];
  };
  blog: {
    eyebrow: string;
    title: string;
    cta_label: string;
    cta_href: string;
    posts: BlogPost[];
  };
  contact: {
    title: string;
    body: string;
    button_label: string;
    button_href: string;
    cards: ContactCardItem[];
  };
  footer: {
    body: string;
    cta_label: string;
    cta_href: string;
    links_title: string;
    links: NavLink[];
    contact_title: string;
    address: string;
    phone: string;
    phone_href: string;
    email: string;
    email_href: string;
    socials: SocialLink[];
    copyright: string;
    bottom_text: string;
  };
};

export const defaultE4iContent: E4iContent = {
  nav: {
    links: [
      { href: "#hakkimizda", label: "Hakkımızda" },
      { href: "#etkinlikler", label: "Etkinliklerimiz" },
      { href: "#projeler", label: "Projelerimiz" },
      { href: "#lokasyonlar", label: "Lokasyonlar" },
      { href: "#blog", label: "Blog" },
    ],
    cta_label: "İletişime Geç",
    cta_href: "#iletisim",
  },
  hero: {
    eyebrow: "İnovasyon için Eğitim Vakfı",
    title_prefix: "Geleceğin liderlerini",
    title_highlight: "bugünden",
    title_suffix: "yetiştiriyoruz",
    body:
      "E4I; öğrencileri ve aileleri geleceğe yönelik kariyer planlaması, dünyanın önde gelen üniversitelerine kabul ve inovasyon zihniyeti konusunda destekler. Yapay zekâdan yaşam bilimlerine, geleceğin alanlarına hazırlar.",
    primary_label: "Yolculuğa Başla",
    primary_href: "#iletisim",
    secondary_label: "Programları Keşfet",
    secondary_href: "#etkinlikler",
    stats: [
      { to: 12, suffix: "+", label: "Küresel lokasyon", color: "text-orange-500" },
      { to: 5, suffix: "+", label: "Stratejik iş ortağı", color: "text-grape-600" },
      { to: 1000, suffix: "+", label: "Desteklenen öğrenci", color: "text-leaf-600" },
    ],
    image: "https://plus.unsplash.com/premium_photo-1753346511221-8d61539305de?w=1200&q=70&auto=format&fit=crop",
    image_alt: "Birlikte proje geliştiren öğrenciler",
    image_badge: "Vizyon",
    quote: "“İnovasyon bir yetenek değil, geliştirilebilen bir zihniyettir.”",
    quote_caption: "Geleceğin alanlarında küresel fırsatlar.",
  },
  mission: {
    eyebrow: "Hakkımızda",
    title: "Eğitimle inovasyonu buluşturan bir vakıf",
    body:
      "Education for Innovation (E4I), öğrencileri ve aileleri geleceğe yönelik kariyer planlamasında yönlendirir; inovasyon ekosistemlerini anlamalarına ve yarının dünyasına hazırlanmalarına rehberlik eder.",
    values: [
      {
        title: "İnovasyon Zihniyeti",
        description:
          "Öğrencilerin merak, eleştirel düşünme ve problem çözme becerilerini geliştirerek geleceğe hazır bir bakış açısı kazandırıyoruz.",
        tint: "bg-orange-50 border-orange-100",
      },
      {
        title: "Küresel Vizyon",
        description:
          "San Francisco'dan İstanbul'a uzanan ekosistemimizle öğrencileri dünyanın önde gelen üniversiteleri ve fırsatlarıyla buluşturuyoruz.",
        tint: "bg-grape-50 border-grape-100",
      },
      {
        title: "Geleceğin Alanları",
        description:
          "Yapay zekâ, yaşam bilimleri ve girişimcilik gibi yükselen alanlarda öğrencileri kariyerlerine bir adım önde başlatıyoruz.",
        tint: "bg-leaf-50 border-leaf-100",
      },
    ],
  },
  programs: {
    eyebrow: "Etkinliklerimiz",
    title: "Öğrenmeyi deneyime dönüştüren programlar",
    body: "Stajlardan hackathonlara kadar her etkinlik, öğrencilerin geleceğe bir adım önde başlamasını hedefler.",
    items: [
      { name: "Staj", tag: "Kariyer", description: "İnovasyon odaklı şirketler ve girişimlerle buluşturan gerçek dünya staj deneyimleri.", grad: "from-grape-500 via-grape-600 to-berry-700" },
      { name: "Eğitimler", tag: "Gelişim", description: "Geleceğin becerilerine odaklanan atölyeler, sertifika programları ve uzman eğitimleri.", grad: "from-orange-400 via-orange-500 to-berry-500" },
      { name: "Konferans", tag: "İlham", description: "Alanında öncü isimleri ve öğrencileri aynı sahnede buluşturan ilham verici konferanslar.", grad: "from-berry-500 via-berry-600 to-grape-700" },
      { name: "Yarışmalar", tag: "Rekabet", description: "Yaratıcılığı ve rekabeti teşvik eden, ödüllü proje ve fikir yarışmaları.", grad: "from-leaf-500 via-leaf-600 to-grape-600" },
      { name: "Hackathon", tag: "İnovasyon", description: "48 saatte fikirden prototipe; takım çalışması ve hızlı inovasyonun adresi.", grad: "from-ink-700 via-grape-900 to-ink-900" },
    ],
    cta_title: "Hepsini keşfet",
    cta_body: "Tüm etkinliklerimizi ve başvuru takvimini birlikte inceleyelim.",
    cta_label: "İletişime geç",
    cta_href: "#iletisim",
  },
  projects: {
    eyebrow: "Projelerimiz",
    title: "İz bırakan girişimler",
    body: "Her projeyi yakından tanıyın: sosyal sorumluluktan startup desteğine, burslardan sponsorluklara kadar geleceğe yatırım yapıyoruz.",
    items: [
      {
        name: "Projeler",
        tag: "Etki Odaklı",
        description:
          "Öğrenci ve toplum odaklı, somut etki yaratan inovasyon projeleri yürütüyoruz. Fikir aşamasından uygulamaya kadar her adımda mentorluk ve kaynak sağlıyoruz.",
        image: "https://plus.unsplash.com/premium_photo-1663091226871-2878f62a524d?w=1400&q=70&auto=format&fit=crop",
        accent: "text-grape-600",
      },
      {
        name: "Sosyal Sorumluluk",
        tag: "Toplum",
        description:
          "Eğitimde fırsat eşitliğini destekleyen sosyal sorumluluk girişimleriyle, farklı arka planlardan gelen öğrencilerin geleceğe eşit koşullarda hazırlanmasını sağlıyoruz.",
        image: "https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?w=1400&q=70&auto=format&fit=crop",
        accent: "text-leaf-600",
      },
      {
        name: "Startup Projeleri",
        tag: "Girişimcilik",
        description:
          "Fikirden şirkete uzanan yolda genç girişimcilere mentorluk, kuluçka ve yatırımcı ağı desteği sunuyoruz. İnovasyonu sürdürülebilir bir işe dönüştürüyoruz.",
        image: "https://plus.unsplash.com/premium_photo-1661398591460-269d2f8635cb?w=1400&q=70&auto=format&fit=crop",
        accent: "text-orange-600",
      },
      {
        name: "Sponsorluk",
        tag: "İş Birliği",
        description:
          "Etkinlik ve programlarımıza güç katan kurumsal iş birlikleriyle, daha fazla öğrenciye ulaşıyor ve geleceğin yeteneklerine yatırım yapan markalarla buluşuyoruz.",
        image: "https://plus.unsplash.com/premium_photo-1661503423349-63ad7057bc22?w=1400&q=70&auto=format&fit=crop",
        accent: "text-berry-500",
      },
      {
        name: "Burslar",
        tag: "Destek",
        description:
          "Yetenekli öğrencilerin önündeki finansal engelleri kaldıran burs olanaklarıyla, başarının maddi koşullardan bağımsız olmasını hedefliyoruz.",
        image: "https://plus.unsplash.com/premium_photo-1714397507054-b34acc119eb5?w=1400&q=70&auto=format&fit=crop",
        accent: "text-grape-700",
      },
    ],
  },
  presence: {
    eyebrow: "Küresel Ağ",
    title: "Dünyanın dört bir yanında fırsatlar",
    body: "İnovasyon ekosistemlerinin kalbinde yer alan şehirlerde öğrencilerimizi küresel deneyimlerle buluşturuyoruz.",
    cities: ["San Francisco", "Boston", "New York", "Toronto", "Londra", "Dublin", "Amsterdam", "Berlin", "Milano", "Cenevre", "Dubai", "İstanbul"],
  },
  partners: {
    title: "İş Ortaklarımız",
    items: [
      { name: "aba Yurt Dışı Eğitim", url: "https://abaegitim.com/", logo: "/partners/Yurt-d_s__-eg_itim-logo.png" },
      { name: "aba Psikoloji", url: "https://abapsikoloji.com/", logo: "/partners/aba-psikoloji-logo.png" },
      { name: "aba Med Edu & AI", url: "https://abamededu.ai/", logo: "/partners/aba-mededu.svg" },
      { name: "aba Tests Prep", url: "https://abatestsprep.com/", logo: "/partners/aba-tests.svg" },
      { name: "Design House Istanbul", url: "https://designhouseist.com/", logo: "/partners/design-house.svg" },
    ],
  },
  blog: {
    eyebrow: "Blog",
    title: "Güncel içgörüler ve rehberler",
    cta_label: "Tüm yazılar",
    cta_href: "#blog",
    posts: [
      { category: "İnovasyon", title: "Yapay zekâ çağında öğrenciler hangi becerilere odaklanmalı?", readTime: "5 dk okuma", bg: "bg-grape-600", image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=900&q=70&auto=format&fit=crop" },
      { category: "Üniversite", title: "Dünyanın önde gelen üniversitelerine kabul süreci nasıl planlanır?", readTime: "7 dk okuma", bg: "bg-berry-500", image: "https://images.unsplash.com/photo-1689686610856-3bcf921eb1f0?w=900&q=70&auto=format&fit=crop" },
      { category: "Kariyer", title: "Yaşam bilimleri: Geleceğin en hızlı büyüyen kariyer alanları", readTime: "4 dk okuma", bg: "bg-orange-500", image: "https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?w=900&q=70&auto=format&fit=crop" },
    ],
  },
  contact: {
    title: "Geleceğini birlikte şekillendirelim",
    body: "Öğrenci, veli veya kurum olarak bize ulaşın; size en uygun programları ve fırsatları birlikte keşfedelim.",
    button_label: "E-posta gönder",
    button_href: "mailto:info@educationforinnovation.org",
    cards: [
      { label: "Adres", value: "Zorlu Center, Teras Evler TE 210, Beşiktaş / İstanbul", href: "https://g.co/kgs/WmquifY" },
      { label: "Telefon", value: "+90 (539) 859 78 66", href: "tel:+905398597866" },
      { label: "E-posta", value: "info@educationforinnovation.org", href: "mailto:info@educationforinnovation.org" },
      { label: "Instagram", value: "@e4i_vakfi", href: "https://www.instagram.com/e4i_vakfi/" },
    ],
  },
  footer: {
    body: "Öğrencileri ve aileleri geleceğe hazırlayan küresel bir topluluk. İnovasyonu bir zihniyet hâline getiriyoruz.",
    cta_label: "Bize katıl",
    cta_href: "#iletisim",
    links_title: "Keşfet",
    links: [
      { href: "#hakkimizda", label: "Hakkımızda" },
      { href: "#etkinlikler", label: "Etkinliklerimiz" },
      { href: "#projeler", label: "Projelerimiz" },
      { href: "#lokasyonlar", label: "Lokasyonlar" },
      { href: "#blog", label: "Blog" },
      { href: "#iletisim", label: "İletişim" },
    ],
    contact_title: "İletişim",
    address: "Zorlu Center, Teras Evler TE 210, Beşiktaş / İstanbul",
    phone: "+90 (539) 859 78 66",
    phone_href: "tel:+905398597866",
    email: "info@educationforinnovation.org",
    email_href: "mailto:info@educationforinnovation.org",
    socials: [
      { name: "Instagram", url: "https://www.instagram.com/e4i_vakfi/" },
      { name: "Facebook", url: "https://www.facebook.com/E4Ivakif/" },
      { name: "YouTube", url: "https://www.youtube.com/@InovasyonicinEgitimVakf" },
      { name: "X", url: "https://x.com/e4i_vakfi" },
      { name: "LinkedIn", url: "https://www.linkedin.com/company/e4i/" },
    ],
    copyright: "© {year} Education for Innovation. Tüm hakları saklıdır.",
    bottom_text: "İnovasyon için Eğitim Vakfı",
  },
};
