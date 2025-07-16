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

export default function ContactContent() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleGetDirections = () => {
    const latitude = 45.27880168755801;
    const longitude = 27.961041100876532;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, "_blank");
  };

  return (
    <div className="relative flex flex-col w-full h-min items-center max-w-5xl mx-auto md:scale-75" >
      <div className="flex flex-row">
        <div className="relative w-1/5 items-center flex flex-col space-y-20 max-w-7xl mx-auto" data-aos="fade-right">
          <div className="absolute w-[3%] bg-[#FFE14D] h-[80%] z-10" />
          {contactItems.map(({ Icon }, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 z-100">
              <div className="bg-zinc-900 p-3 md:p-6 rounded-full border border-[#FFE14D] flex items-center justify-center">
                <Icon className="text-zinc-200 w-8 h-8 md:w-16 md:h-16" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-20 md:space-y-24 w-full h-full ml-4" data-aos="fade-left" data-aos-delay="1000">
          {contactItems.map(({ title, text }, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 z-100">
              <div className="flex flex-col md:space-y-4">
                <p className="text-2xl md:text-5xl font-bold text-white/95">{title}</p>
                <p className="text-lg md:text-3xl font-normal text-white/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleGetDirections}
        className="relative mt-18 w-full md:w-2/3 py-2 md:py-4 bg-[#FFE14D] text-black text-lg md:text-2xl font-bold rounded-full hover:bg-yellow-500 transition duration-300"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Rută către service
      </button>
    </div>
  );
}
