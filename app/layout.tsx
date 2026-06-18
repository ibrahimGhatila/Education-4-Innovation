import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const SITE_URL = "https://www.educationforinnovation.org";
const TITLE = "Education for Innovation | İnovasyon için Eğitim Vakfı";
const DESCRIPTION =
  "Education for Innovation (E4I), öğrencileri ve aileleri geleceğe yönelik kariyer planlaması, dünyanın önde gelen üniversitelerine kabul ve inovasyon zihniyeti konusunda destekleyen bir vakıftır.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Education for Innovation",
  },
  description: DESCRIPTION,
  applicationName: "Education for Innovation",
  keywords: [
    "Education for Innovation",
    "E4I",
    "inovasyon için eğitim vakfı",
    "inovasyon",
    "eğitim vakfı",
    "üniversite kabulü",
    "yurt dışı eğitim",
    "kariyer planlama",
    "burs",
    "hackathon",
    "yapay zeka",
    "yaşam bilimleri",
  ],
  authors: [{ name: "Education for Innovation" }],
  creator: "Education for Innovation",
  publisher: "Education for Innovation",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description:
      "Geleceğin liderlerini bugünden yetiştiriyoruz. İnovasyon zihniyeti, küresel vizyon ve geleceğin alanları.",
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Education for Innovation",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1753346511221-8d61539305de?w=1200&h=630&q=70&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Education for Innovation — geleceğin liderlerini yetiştiriyoruz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Geleceğin liderlerini bugünden yetiştiriyoruz. İnovasyon zihniyeti, küresel vizyon ve geleceğin alanları.",
    site: "@e4i_vakfi",
    images: [
      "https://plus.unsplash.com/premium_photo-1753346511221-8d61539305de?w=1200&h=630&q=70&auto=format&fit=crop",
    ],
  },
  category: "education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Education for Innovation",
  alternateName: ["İnovasyon için Eğitim Vakfı", "E4I"],
  url: SITE_URL,
  logo: `${SITE_URL}/logo-521bc28c-00f8-4a50-a451-4ade87746277.webp`,
  description: DESCRIPTION,
  email: "info@educationforinnovation.org",
  telephone: "+90-539-859-7866",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zorlu Center, Teras Evler TE 210, Beşiktaş",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: [
    "https://www.instagram.com/e4i_vakfi/",
    "https://www.facebook.com/E4Ivakif/",
    "https://www.youtube.com/@InovasyonicinEgitimVakf",
    "https://x.com/e4i_vakfi",
    "https://www.linkedin.com/company/e4i/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={roboto.variable}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
