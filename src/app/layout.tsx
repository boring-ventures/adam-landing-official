import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TemplateLanding - Landing Page Template Profesional",
  description: "Una landing page template completa y profesional con todas las secciones necesarias para convertir visitantes en clientes. Incluye Header, Hero, Social Proof, Metrics, Benefits, CTA, Process, Characteristics, Pricing y Footer.",
  keywords: "landing page, template, marketing, conversión, diseño web, Next.js, React",
  authors: [{ name: "TemplateLanding Team" }],
  openGraph: {
    title: "TemplateLanding - Landing Page Template Profesional",
    description: "Una landing page template completa y profesional con todas las secciones necesarias para convertir visitantes en clientes.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
