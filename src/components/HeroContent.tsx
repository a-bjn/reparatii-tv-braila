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
    <div className="w-full h-full flex items-center overflow-visible max-w-7xl mx-auto relative">
      <div className="w-2/3 lg:w-4/5 flex flex-col sm:justify-between md:justify-evenly h-full text-start p-6 md:p-2 mt-4 md:mt-0 z-20">
        <div className="flex flex-col gap-6 md:gap-8 mb-12 lg:mb-0">
          <h1
            className="text-[#FCE365] text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg leading-tight"
            data-aos="fade-down"
          >
            Reparații TV Brăila
          </h1>
          <p
            className="text-zinc-300 font-semibold md:font-thin text-lg md:text-3xl lg:text-4xl max-w-lg drop-shadow-md"
            data-aos="fade-up"
          >
            Oferim servicii rapide și de încredere pentru televizoare LCD/LED/Smart TV.
          </p>
        </div>
        <a
          href="tel:+40729026656"
          className="w-full md:w-1/2 lg:1/2 bg-[#FFE14D] text-black text-center text-xl lg:text-2xl font-bold py-2 lg:py-4 rounded-full mt-auto lg:mt-0"
          data-aos="zoom-in"
        >
          Sună Acum
        </a>
      </div>
      <div className="w-1/3 relative h-full z-20" data-aos="zoom-in">
        <div
          className="absolute top-0 w-full h-full 
            before:content-[''] 
            before:absolute before:w-full before:h-[115%] before:top-[-10%]
            before:bg-gradient-to-l before:from-yellow-400 
            before:via-amber-600 before:to-green-900 
            before:blur-3xl before:opacity-30

            md:before:h-full md:before:top-0 md:before:w-full 
            md:before:right-0 md:before:left-auto 
            md:before:rounded-bl-full md:before:transform md:before:translate-x-[-5%]"
        />

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