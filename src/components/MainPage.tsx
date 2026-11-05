import HeroSection from "./HeroSection";
import MarqueeStrip from "./MarqueeStrip";
import ServiciiSection from "./ServiciiSection";
import StatsSection from "./StatsSection";
import BrandsSection from "./BrandsSection";
import ReviewsSection from "./ReviewsSection";
import ContactSection from "./ContactSection";

export default function MainPage() {
  return (
    <main>
      <HeroSection />
      <MarqueeStrip />
      <ServiciiSection />
      <StatsSection />
      <BrandsSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}
