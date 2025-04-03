import ContactSection from "./Components/ContactSection/page";
import GallerySection from "./Components/GallerySection/page";
import HeroSection from "./Components/HeroSection/page";
import TransportSection from "./Components/PortSection/page";
import SafetyQuality from "./Components/SafetyQuality/page";
import TouristSection from "./Components/TouristSection/page";




export default function Home() {
  return (
    <main >
      <div>
       <HeroSection></HeroSection>
       <ContactSection></ContactSection>
       <SafetyQuality></SafetyQuality>
       <TransportSection></TransportSection>
       <GallerySection></GallerySection>
       <TouristSection></TouristSection>
      </div>
    </main>
  );
}
