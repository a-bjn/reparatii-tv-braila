import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-screen bg-[#131212] z-100 overflow-visible">
      <div className="hidden lg:block absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-black/90 via-transparent to-transparent"></div>
      </div>
      <HeroContent />
    </section>
  );
}