"use client";

import { useEffect } from "react";
import { Phone, Calendar, Pin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const contactItems = [
  { Icon: Phone, title: "Telefon", text: "+40 0729 026 656" },
  { Icon: Calendar, title: "Program", text: "Luni-Vineri 8:00-17:00" },
  { Icon: Pin, title: "Locație", text: "Str. General Eremia Grigorescu 40 Lângă Oficiul Poștal" }
];

export default function ContactDetails() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleGetDirections = () => {
    const latitude = 45.27880168755801;
    const longitude = 27.961041100876532;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, "_blank");
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="relative w-1/5 items-center flex flex-col space-y-20" data-aos="fade-right">
          <div className="absolute w-[3%] bg-[#FFE14D] h-[80%] z-10" />
          {contactItems.map(({ Icon }, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 z-100">
              <div className="bg-zinc-900 p-3 rounded-full border border-[#FFE14D] flex items-center justify-center">
                <Icon className="text-zinc-200 w-8 h-8" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-20 w-full h-full ml-4" data-aos="fade-left" data-aos-delay="1000">
          {contactItems.map(({ title, text }, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 z-100">
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-white/95">{title}</p>
                <p className="font-semibold text-lg text-white/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleGetDirections}
        className="relative mt-12 w-full py-2 bg-[#FFE14D] text-black text-lg font-bold rounded-full hover:bg-yellow-500 transition duration-300"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Rută către service
      </button>
    </>
  );
}
