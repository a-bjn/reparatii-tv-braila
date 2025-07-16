"use client";

import Lottie from "lottie-react";
import animationData from "../../public/lootie-tv.json";

const Header = () => {
  return (
    <header className="w-full bg-zinc-950/98 border-b border-zinc-800 text-white shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-center gap-4 md:gap-6">
        {/* Lottie animation always on the left */}
        <span className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </span>
        {/* Text content: stacked on mobile, row on md+ */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <span className="text-lg md:text-2xl font-bold text-[#FFE14D]">Reparații TV Brăila</span>
          <span className="hidden md:inline text-gray-400 text-xl font-bold">-</span>
          <span className="text-xs md:text-xl font-medium text-gray-300 md:mt-0 tracking-wide">
            Experiență de 30 de ani în domeniu
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;