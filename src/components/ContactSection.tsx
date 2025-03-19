"use client"


import { useEffect } from "react";
import { Phone, Calendar, Pin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const contactItems = [
  { Icon: Phone, title: "Telefon", text: "+40 0729 026 656" },
  { Icon: Calendar, title: "Program", text: "Luni-Vineri 8:00-17:00" },
  { Icon: Pin, title: "Locatie", text: "Str. General Eremia Grigorescu 40 Langa Oficiul Postal" }
];

export default function ContactSection () {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleGetDirections = () => {
    const latitude = 45.27880168755801;
    const longitude = 27.961041100876532;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, "_blank");
  };

  return (
    <section className="relative w-full h-min-screen bg-black/92 px-4 py-20 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/80 to-transparent opacity-90 pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-full h-1/5 bg-gradient-to-t from-black/90 to-transparent opacity-80 pointer-events-none"></div>
      <h1 className="text-[#FFE14D] text-4xl text-center font-bold drop-shadow-lg mb-20" data-aos="fade-up">
        Contactați-ne
      </h1>

      <div className="flex flex-row">
        <div className="relative w-1/5 items-center flex flex-col space-y-20">
          <div className="absolute w-[3%] bg-[#FFE14D] h-[80%] z-10" />
          {contactItems.map(({ Icon }, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 z-100">
              <div className="bg-zinc-900 p-3 rounded-full border border-[#FFE14D] flex items-center justify-center">
                <Icon className="text-zinc-200 w-8 h-8" />
              </div>
              {/* <div className="flex flex-col">
                <p className="text-2xl font-bold text-white/95">{title}</p>
                <p className="font-semibold text-md text-white/60">{text}</p>
              </div> */}
            </div>
          ))}
        </div>
        {/* <button
          onClick={handleGetDirections}
          className="relative mt-8 w-full py-2 bg-[#FFE14D] text-black text-lg font-bold rounded-full hover:bg-yellow-500 transition duration-300"
        >
          Rută către service
        </button> */}
        <div className="flex flex-col space-y-20 w-full h-full ml-4">
          {contactItems.map(({title, text }, index) => (
            <div key={index} className="flex flex-row items-center space-x-4 z-100">
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-white/95">{title}</p>
                <p className="font-semibold text-md text-white/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
