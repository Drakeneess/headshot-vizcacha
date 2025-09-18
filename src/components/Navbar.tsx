"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 px-8 flex justify-between items-center fixed top-0 z-50 border-b border-border transition-colors duration-300 ${
        scrolled ? "bg-secondary/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      {/* Navegación izquierda */}
      <nav className="flex gap-6 text-foreground font-sans uppercase tracking-wide text-sm">
        <a href="#music" className="relative hover:text-accent">
          Música
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#about" className="hover:text-accent">Banda</a>
      </nav>

      {/* Logo centrado */}
      <div className="flex items-center gap-3 group">
        <Image
          src="/isotipo.png"
          alt="Headshot Vizcacha Isotipo"
          width={55}
          height={55}
          priority
          className="transition-transform duration-300 group-hover:scale-110 rounded-lg"
        />
        <span className="text-2xl font-display text-accent tracking-wide uppercase">
          Headshot Vizcacha
        </span>
      </div>

      {/* Navegación derecha */}
      <nav className="flex gap-6 text-foreground font-sans uppercase tracking-wide text-sm">
        <a href="#events" className="hover:text-accent">Eventos</a>
        <a href="#contact" className="hover:text-accent">Contacto</a>
      </nav>
    </header>
  );
}
