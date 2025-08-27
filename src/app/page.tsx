import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Metrics from '../components/Metrics';
import Benefits from '../components/Benefits';
import CTABanner from '../components/CTABanner';
import Process from '../components/Process';
import Characteristics from '../components/Characteristics';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Metrics />
        <Benefits />
        <CTABanner />
        <Process />
        <Characteristics />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
