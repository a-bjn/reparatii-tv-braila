"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroContent() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full h-full flex items-center overflow-visible">
      <div className="w-2/3 flex flex-col justify-between h-full text-start p-6 mt-4">
        <div className="flex flex-col gap-6 mb-12">
          <h1 className="text-[#FCE365] text-4xl font-bold drop-shadow-lg" data-aos="fade-down">
            Reparații TV Brăila
          </h1>
          <p className="text-zinc-300 font-semibold text-lg max-w-lg drop-shadow-md" data-aos="fade-up">
            Oferim servicii rapide și de încredere pentru televizoare LCD/LED/Smart TV.
          </p>
        </div>
        <a
          href="tel:+40729026656"
          className="w-full bg-[#FFE14D] text-black text-center text-xl font-bold py-2 rounded-full mt-auto"
          data-aos="zoom-in"
        >
          Sună Acum
        </a>
      </div>
      <div className="w-1/3 relative h-full" data-aos="zoom-in">
        <div
          className="absolute w-full h-full before:content-['']
          before:absolute before:w-[100%] before:h-[115%] before:top-[-10%] 
          before:bg-gradient-to-r before:from-yellow-400 
          before:via-amber-600 before:to-green-900 before:blur-3xl before:opacity-30"
        ></div>
        <div className="absolute w-full h-full">
          <Image
            src="/hero.jpg"
            alt="Background"
            fill
            className="object-cover rounded-bl-full"
            priority
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r rounded-bl-full from-black/80 via-black/10 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
