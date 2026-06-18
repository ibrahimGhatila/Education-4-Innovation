"use client";

import { useState } from "react";
import type { E4iContent } from "@/lib/cms/e4iContent";
import Reveal from "./Reveal";
import Rings from "./Rings";
import Star from "./Star";

type ProjectsProps = {
  content: E4iContent["projects"];
};

export default function Projects({ content }: ProjectsProps) {
  const [index, setIndex] = useState(0);
  const projects = content.items;
  const project = projects[index] ?? projects[0];
  const total = projects.length;

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  if (!project) return null;

  return (
    <section id="projeler" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="section-title mt-5">{content.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            {content.body}
          </p>
        </Reveal>

        <Reveal from="scale" className="mt-14">
          <div className="grid items-stretch gap-px overflow-hidden rounded-[1.75rem] border border-ink-100 bg-ink-100 shadow-lift lg:grid-cols-2">
            <div className="flex flex-col justify-between bg-white p-8 sm:p-10">
              <div key={`t-${index}`} className="animate-fade-up">
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-bold ${project.accent}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-ink-200" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                    {project.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-black text-ink-900 sm:text-4xl">{project.name}</h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">{project.description}</p>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Önceki proje"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-all hover:-translate-x-0.5 hover:border-grape-400 hover:bg-grape-50 hover:text-grape-700"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M19 12H5m6 6-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Sonraki proje"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-grape-600 to-orange-500 text-white shadow-glow transition-all hover:translate-x-0.5"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {projects.map((p, i) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`${p.name} projesine git`}
                      aria-current={i === index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === index ? "w-7 bg-grape-600" : "w-2 bg-ink-200 hover:bg-ink-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[18rem] overflow-hidden bg-ink-900 lg:min-h-[26rem]">
              <Rings className="pointer-events-none absolute -right-16 -top-16 z-10 h-56 w-56 text-white/20" />
              <Star className="absolute right-8 top-8 z-10 text-white/70 animate-twinkle" size={18} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={`i-${index}`}
                src={project.image}
                alt={`${project.name} görseli`}
                className="h-full w-full animate-fade-up object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
