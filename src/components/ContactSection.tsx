import ContactContent from "./ContactContent";

export default function ContactSection() {
  return (
    <section className="relative w-full h-min-screen bg-zinc-900 px-4 py-20 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/85 to-transparent opacity-80 pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-black/85 to-transparent opacity-90 pointer-events-none"></div>
      
      <ContactContent />
    </section>
  );
}
