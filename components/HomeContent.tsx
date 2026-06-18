"use client";

import { useEffect, useState } from "react";
import { defaultE4iContent, type E4iContent } from "@/lib/cms/e4iContent";
import { fetchE4iContent } from "@/lib/cms/fetchE4iContent";
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

export default function HomeContent() {
  const [content, setContent] = useState<E4iContent>(defaultE4iContent);

  useEffect(() => {
    let cancelled = false;

    fetchE4iContent()
      .then((nextContent) => {
        if (!cancelled) setContent(nextContent);
      })
      .catch(() => {
        if (!cancelled) setContent(defaultE4iContent);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Navbar content={content.nav} />
      <main>
        <Hero content={content.hero} />
        <Mission content={content.mission} />
        <Programs content={content.programs} />
        <Projects content={content.projects} />
        <GlobalPresence content={content.presence} />
        <Partners content={content.partners} />
        <Blog content={content.blog} />
        <Contact content={content.contact} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
