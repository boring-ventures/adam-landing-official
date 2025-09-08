import type { Metadata } from "next";
import Header from '../components/Header';
import Hero from '../components/Hero';
import Apartment from '../components/Apartment';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Inicio",
  description: "Descubre tu estadía cómoda y segura en San Martín de los Andes. Adam Rezuc te ofrece un departamento de lujo con gestión directa, transparencia y confianza para tu experiencia en la montaña.",
  openGraph: {
    title: "Adam Rezuc - Departamento de Lujo en San Martín de los Andes",
    description: "Tu estadía cómoda y segura en San Martín de los Andes. Experiencia de lujo con gestión directa y transparencia.",
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
};

export default function Home() {
  return (
    <div className="p-8">
      <Header />
      <Hero />
      <Apartment />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
