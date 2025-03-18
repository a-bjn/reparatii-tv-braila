import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[#131212] z-100 overflow-visible">
      <div className="w-full h-full flex items-center overflow-visible">
        <div className="w-2/3 flex flex-col h-full text-start p-4 pr-10 py-10">
          <div className="flex flex-col gap-4 mb-12">
            <h1 className="text-[#FCE365] text-2xl font-bold drop-shadow-lg">
              Reparatii TV Braila
            </h1>
            <p className="text-zinc-400 font-thin text-sm max-w-lg drop-shadow-md">
              Oferim servicii rapide și de incredere pentru televizoare LCD/LED/Smart TV
            </p>
          </div>
          <a
            href="tel:+40712345678"
            className="w-full bg-[#FCE365] text-black text-center font-bold py-2 rounded-full mt-auto"
          >
            Sună Acum
          </a>
        </div>
        <div className="w-1/3 relative h-full overflow-visible">
          <div className="absolute w-[150%] h-full left-[-50%] before:content-[''] before:absolute before:w-full before:h-[150%] before:left-0 before:top-[-30%] before:[clip-path:circle(100%_at_100%_50%)] before:bg-gradient-to-r before:from-green-800 before:via-amber-500 before:to-yellow-900 before:blur-3xl before:opacity-20"></div>
          <div className="absolute w-[140%] h-full left-[-40%] [clip-path:circle(80%_at_130%_50%)] overflow-visible">
            <Image
              src="/hero.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
