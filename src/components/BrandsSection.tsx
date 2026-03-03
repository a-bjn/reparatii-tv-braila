import BrandsGrid from "./BrandsGrid";

export default function BrandsSection() {
  return (
    <section className="relative w-full h-min-screen flex items-center justify-center bg-zinc-900 px-4 py-10">
      <div className="absolute left-0 top-0 w-full h-1/2 bg-gradient-to-b from-black/90 to-transparent opacity-85 pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent opacity-90 pointer-events-none"></div>
      <div className="flex flex-col items-center justify-center lg:p-12 lg:w-3/4 sm:w-full sm:p-6">
        <div className="flex flex-col items-center text-center gap-4 mt-12 mb-20" data-aos="fade-up">
          <h1 className="text-[#FFE14D] text-4xl md:text-6xl font-bold drop-shadow-lg">
            Brandurile cu care lucrăm
          </h1>
          <p className="text-white/60 text-xl md:text-3xl font-normal" data-aos="fade-up" data-aos-delay="200">
            Service-ul nostru acoperă o gamă largă de televizoare de orice marcă.
          </p>
        </div>
        <BrandsGrid />
      </div>
    </section>
  );
}
