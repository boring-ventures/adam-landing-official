import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Apartment from '../components/Apartment';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="p-8">
      <Header />
      <Hero />
      <Apartment />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
