import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary border-t border-border py-12 mt-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Logo grande */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/logotipo.png"
            alt="Headshot Vizcacha Logo"
            width={150}
            height={150}
            priority
            className="rounded-lg drop-shadow-[0_0_25px_var(--accent)]"
          />
        </div>

        {/* Navegación */}
        <nav className="flex flex-wrap gap-6 text-sm font-sans text-foreground uppercase tracking-wide justify-center">
          <a href="#music" className="hover:text-accent">Música</a>
          <a href="#about" className="hover:text-accent">Banda</a>
          <a href="#events" className="hover:text-accent">Eventos</a>
          <a href="#contact" className="hover:text-accent">Contacto</a>
        </nav>

        {/* Redes sociales */}
        <div className="flex gap-6 text-foreground font-sans uppercase tracking-wide text-sm">
          <a
            href="https://www.facebook.com/profile.php?id=61577567800149"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            Facebook
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            YouTube
          </a>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            Spotify
          </a>
        </div>
      </div>

      {/* Línea de derechos */}
      <div className="mt-12 text-center text-xs text-foreground/60 font-sans tracking-wide uppercase">
        © {new Date().getFullYear()} Headshot Vizcacha. Todos los derechos reservados.
      </div>
    </footer>
  );
}
