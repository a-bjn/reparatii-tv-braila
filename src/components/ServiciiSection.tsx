import ServiciiContent from "./ServiciiContent";

export default function ServiciiSection() {
  return (
    <section className="relative w-full h-min-screen bg-[#131212] px-4 py-20 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent opacity-80 pointer-events-none"></div>
      <ServiciiContent />
    </section>
  );
}
