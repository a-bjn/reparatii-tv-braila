import ContactContent from "./ContactContent";

export default function ContactSection() {
  return (
    <section className="relative w-full h-min-screen bg-zinc-900 px-4 py-20 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/85 to-transparent opacity-80 pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-80 pointer-events-none"></div>
      <h1 className="text-[#FFE14D] text-4xl text-center font-bold drop-shadow-lg mb-20" data-aos="fade-up">
        Contactați-ne
      </h1>
      <ContactContent />
    </section>
  );
}
