import type { Metadata } from "next";
import "./globals.css";
import "./mobile-optimization.css";

export const metadata: Metadata = {
  title: {
    default: "Adam Rezuc - Departamento de Lujo en San Martín de los Andes",
    template: "%s | Adam Rezuc"
  },
  description: "Descubre tu estadía cómoda y segura en San Martín de los Andes. Adam Rezuc te ofrece un departamento de lujo con gestión directa, transparencia y confianza para tu experiencia en la montaña.",
  keywords: [
    "San Martín de los Andes",
    "departamento de lujo",
    "alojamiento",
    "Adam Rezuc",
    "estadía",
    "turismo",
    "Patagonia",
    "montaña",
    "alquiler temporal",
    "vacaciones"
  ],
  authors: [{ name: "Adam Rezuc" }],
  creator: "Adam Rezuc",
  publisher: "Adam Rezuc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adamrezuc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://adamrezuc.com',
    title: 'Adam Rezuc - Departamento de Lujo en San Martín de los Andes',
    description: 'Tu estadía cómoda y segura en San Martín de los Andes. Experiencia de lujo con gestión directa y transparencia.',
    siteName: 'Adam Rezuc',
    images: [
      {
        url: '/hero-apartment.jpg',
        width: 1200,
        height: 600,
        alt: 'Departamento de lujo en San Martín de los Andes - Adam Rezuc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Rezuc - Departamento de Lujo en San Martín de los Andes',
    description: 'Tu estadía cómoda y segura en San Martín de los Andes. Experiencia de lujo con gestión directa.',
    images: ['/hero-apartment.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-google-search-console',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta name="facebook-domain-verification" content="t1j9l3co12kk5pedla1m5fax8gncpz" />
      </head>
      <body className="bg-white text-gray-800 overflow-x-hidden">
        <div className="overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
