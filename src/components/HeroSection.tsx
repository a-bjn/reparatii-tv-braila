"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full h-[55vh] bg-[#131212] z-100 overflow-visible">
      <div className="w-full h-full flex items-center justify-between overflow-visible">
        <div className="w-2/3 flex flex-col h-full text-start justify-between p-4 pr-12 mt-4 justify-between" data-aos="fade-right">
          <div className="flex flex-col gap-6 mb-12">
            <h1 className="text-[#FCE365] text-4xl font-bold drop-shadow-lg" data-aos="fade-down">
              Reparatii TV Braila
            </h1>
            <p className="text-zinc-300 font-thin text-lg max-w-lg drop-shadow-md" data-aos="fade-up">
              Oferim servicii rapide și de incredere pentru televizoare LCD/LED/Smart TV
            </p>
          </div>
          <a
            href="tel:+40712345678"
            className="w-full bg-[#FFE14D] text-black text-center font-bold py-2 rounded-full mt-auto"
            data-aos="zoom-in"
          >
            Sună Acum
          </a>
        </div>
        <div className="w-1/3 relative h-full overflow-visible" data-aos="fade-left">
          <div className="absolute w-[150%] h-full left-[-50%] before:content-[''] before:absolute before:w-full before:h-[150%] before:left-0 before:top-[-30%] before:[clip-path:circle(100%_at_100%_50%)] before:bg-gradient-to-r before:from-green-800 before:via-amber-500 before:to-yellow-900 before:blur-3xl before:opacity-20"></div>
          <div className="absolute w-[120%] h-full left-[-20%] [clip-path:circle(92%_at_180%_50%)] overflow-visible">
            <Image
              src="/hero.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
              data-aos="fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
