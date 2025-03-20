"use client";

import { useEffect } from "react";
import { FaTv, FaTools, FaKey, FaAward } from "react-icons/fa";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

const services: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  iconSize: "5xl" | "6xl" | "7xl" | "8xl"; 
}[] = [
  {
    icon: FaTools,
    title: "Reparații TV/LCD/LED",
    description: "Oferim reparații pentru o gamă largă de brand-uri TV.",
    iconSize: "6xl",
  },
  {
    icon: FaTv,
    title: "Telecomenzi TV",
    description: "Vindem telecomenzi originale pentru toate mărcile TV.",
    iconSize: "6xl",
  },
  {
    icon: FaKey,
    title: "Chei Auto",
    description: "Servicii profesionale pentru orice marca de chei auto.",
    iconSize: "6xl",
  },
  {
    icon: FaAward,
    title: "Garanție 1 An",
    description: "Beneficiați de o garanție pe o perioadă de 1 an.",
    iconSize: "6xl",
  },
];

export default function ServiciiContent() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center gap-8">
      <h1 className="text-[#FFE14D] text-4xl font-bold drop-shadow-lg text-center mt-12 mb-10" data-aos="fade-down">
        Serviciile pe care le oferim
      </h1>
      {services.map((service, index) => (
        <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
          <Card
            icon={service.icon}
            title={service.title}
            description={service.description}
            iconSize={service.iconSize}
          />
        </div>
      ))}
    </div>
  );
}
