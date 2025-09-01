import Header from '../components/Header';
import Hero from '../components/Hero';
import Apartment from '../components/Apartment';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
