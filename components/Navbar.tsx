"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#etkinlikler", label: "Etkinliklerimiz" },
  { href: "#projeler", label: "Projelerimiz" },
  { href: "#lokasyonlar", label: "Lokasyonlar" },
  { href: "#blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-100 bg-white/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <a href="#top" aria-label="Education for Innovation ana sayfa">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-flame-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#iletisim" className="btn-primary">
            İletişime Geç
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-100 text-ink-900 lg:hidden"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink-700 hover:bg-flame-50 hover:text-flame-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
