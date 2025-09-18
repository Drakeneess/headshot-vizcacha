import type { Metadata } from "next";
import { Bebas_Neue, Teko } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-teko",
});

export const metadata: Metadata = {
  title: "Headshot Vizcacha",
  description: "Metal desde Bolivia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${bebas.variable} ${teko.variable}`}>
      <body className="bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
