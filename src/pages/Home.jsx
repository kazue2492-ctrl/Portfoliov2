import Navbar from "../components/Navbar";
import HeroCinema from "../components/HeroCinema";
import PortfolioHero from "../components/PortfolioHero";
import VisualsSection from "../components/VisualsSection";
import PlusCursor from "../components/PlusCursor";
import WandererGallery from "../components/WandererGallery";
import LogoLoop from "../components/LogoLoop";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <HeroCinema />
      <PortfolioHero />
      <VisualsSection />
      <PlusCursor />
      <WandererGallery />
      <LogoLoop />
      <ContactSection />
    </div>
  );
}
