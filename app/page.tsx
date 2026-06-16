import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Projects from "@/components/Projects";
import GlobalPresence from "@/components/GlobalPresence";
import Partners from "@/components/Partners";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Programs />
        <Projects />
        <GlobalPresence />
        <Partners />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
