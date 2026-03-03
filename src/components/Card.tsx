import React from "react";

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconSize?: "5xl" | "6xl" | "7xl" | "8xl";
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, description, iconSize = "6xl" }) => {
  const sizeClasses: Record<string, string> = {
    "5xl": "text-4xl md:text-5xl lg:text-6xl",
    "6xl": "text-5xl md:text-6xl lg:text-7xl",
    "7xl": "text-6xl md:text-7xl lg:text-8xl",
    "8xl": "text-7xl md:text-8xl lg:text-9xl",
  };

  return (
    <div className="w-full bg-black/30 rounded-2xl border border-zinc-800 p-3 md:p-5 lg:p-6 shadow-[2px_4px_12px_0px_rgba(255,185,0,0.1)] transition-all">
      <div className="w-full flex flex-row items-center">
        <Icon className={`${sizeClasses[iconSize]} text-[#FCE365] ml-2 md:ml-2 mr-3 md:mr-6 border-r border-zinc-800 pr-3 md:pr-6`} />
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-2">
          <p className="text-base md:text-2xl lg:text-xl text-[#FCE365] font-bold leading-tight">{title}</p>
          <p className="text-xs md:text-lg lg:text-base text-white/80 font-normal lg:font-thin leading-snug">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
