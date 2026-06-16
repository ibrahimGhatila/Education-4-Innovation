import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.educationforinnovation.org"),
  title: {
    default: "Education for Innovation | İnovasyon için Eğitim Vakfı",
    template: "%s | Education for Innovation",
  },
  description:
    "Education for Innovation (E4I), öğrencileri ve aileleri geleceğe yönelik kariyer planlaması, dünyanın önde gelen üniversitelerine kabul ve inovasyon zihniyeti konusunda destekleyen bir vakıftır.",
  keywords: [
    "Education for Innovation",
    "E4I",
    "inovasyon",
    "eğitim vakfı",
    "üniversite kabulü",
    "kariyer planlama",
    "yapay zeka",
    "yaşam bilimleri",
  ],
  openGraph: {
    title: "Education for Innovation | İnovasyon için Eğitim Vakfı",
    description:
      "Geleceğin liderlerini bugünden yetiştiriyoruz. İnovasyon zihniyeti, küresel vizyon ve geleceğin alanları.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.educationforinnovation.org",
    siteName: "Education for Innovation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={roboto.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
