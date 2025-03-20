"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const BrandsGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
    <div
      className="bg-black/50 rounded-2xl border border-zinc-900 grid grid-cols-2 py-12 px-6 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:gap-4 sm:gap-0 w-full max-w-6xl lg:p-8 sm:p-2 lg:mb-24 sm:mb-8"
      data-aos="fade-up"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-32 overflow-hidden rounded-2xl shadow-[2px_2px_6px_0px_rgba(255,185,0,0.1)]"
          data-aos="zoom-in"
          data-aos-delay={index * 100}
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
  );
};

export default BrandsGrid;
