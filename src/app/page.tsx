"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20; // rango -10..10
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setOffset({ x, y });
  };

  return (
    <>
      <Navbar />
      <main
        className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Fondo banner */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/banner.png"
            alt="Headshot Vizcacha Banner"
            fill
            priority
            className="object-cover opacity-70"
          />
        </div>

        {/* Logo con parallax */}
        <div
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
          className="transition-transform duration-100 ease-out hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="Headshot Vizcacha Logo"
            width={240}
            height={240}
            priority
            className="drop-shadow-[0_0_25px_var(--accent)] rounded-2xl"
          />

        </div>

        <h1 className="text-6xl md:text-8xl font-display text-accent tracking-wide uppercase">
          Headshot Vizcacha
        </h1>

        <p className="mt-4 text-lg font-sans text-foreground tracking-wide">
          Metal desde Bolivia <br/> Intensidad y emoción sin filtros.
        </p>


        {/* Botones */}
        <div className="flex gap-6 mt-10">
          <a
            href="https://www.facebook.com/profile.php?id=61577567800149"
            target="_blank"
            className="px-6 py-2 rounded-full font-semibold transition
                      bg-[var(--accent)] hover:bg-[var(--gold)] text-background"
          >
            Facebook
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            className="px-6 py-2 rounded-full bg-secondary hover:bg-border text-foreground font-semibold transition"
          >
            YouTube
          </a>
          <a
            href="https://spotify.com"
            target="_blank"
            className="px-6 py-2 rounded-full bg-secondary hover:bg-border text-foreground font-semibold transition"
          >
            Spotify
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
