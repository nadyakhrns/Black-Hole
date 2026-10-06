import { useScrollReveal } from '@/hooks/useScroll';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import Introduction from '@/sections/Introduction';
import Anatomy from '@/sections/Anatomy';
import Formation from '@/sections/Formation';
import Types from '@/sections/Types';
import Physics from '@/sections/Physics';
import Observation from '@/sections/Observation';
import FirstImage from '@/sections/FirstImage';
import Einstein from '@/sections/Einstein';
import MythFact from '@/sections/MythFact';
import TimelineSection from '@/sections/TimelineSection';
import Facts from '@/sections/Facts';
import Closing from '@/sections/Closing';

function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-space-void overflow-hidden">
      <Navbar />

      <main>
        <Hero />
        <Introduction />
        <Anatomy />
        <Formation />
        <Types />
        <Physics />
        <Observation />
        <FirstImage />
        <Einstein />
        <MythFact />
        <TimelineSection />
        <Facts />
        <Closing />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
