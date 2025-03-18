import Image from "next/image";

export default function BrandsSection() {
  const items = [
    { src: "/sony.png", alt: "Sony" },
    { src: "/samsung.jpg", alt: "Samsung" },
    { src: "/lg.jpg", alt: "LG" },
    { src: "/panasonic.jpg", alt: "Panasonic" },
    { src: "/toshiba.png", alt: "Toshiba" },
    { src: "/philips.jpg", alt: "Philips" },
    { src: "/hisense.jpg", alt: "Hisense" },
    { src: "/vortex.jpg", alt: "Vortex" },
  ];

  return (
    <section className="relative w-full h-min-screen flex items-center justify-center bg-zinc-900 px-4 py-10">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/90 to-transparent opacity-80 pointer-events-none"></div>

      <div className="flex flex-col items-center justify-center lg:p-12 lg:w-3/4 sm:w-full sm:p-6">
        <h1 className="text-[#FCE365] text-2xl font-bold drop-shadow-lg text-center mb-10">
          Brand-urile cu care lucram
        </h1>
        <div className="bg-black/55 rounded-2xl border border-zinc-700 grid grid-cols-2 p-6 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-4 sm:gap-0 w-full max-w-6xl lg:p-8 sm:p-2 lg:mb-24 sm:mb-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-32 overflow-hidden rounded-2xl shadow-[2px_2px_6px_0px_rgba(255,185,0,0.1)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                className="object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
