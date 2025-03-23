import React from "react";

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconSize?: "5xl" | "6xl" | "7xl" | "8xl";
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, description, iconSize = "6xl" }) => {
  const sizeClasses: Record<string, string> = {
    "5xl": "text-5xl lg:text-6xl",
    "6xl": "text-6xl lg:text-8xl",
    "7xl": "text-7xl lg:text-8xl",
    "8xl": "text-8xl lg:text-9xl",
  };

  return (
    <div className="w-full bg-black/30 rounded-2xl border border-zinc-800 p-2 md:p-6 shadow-[2px_4px_12px_0px_rgba(255,185,0,0.1)]">
      <div className="w-full flex flex-row items-center">
        <Icon className={`${sizeClasses[iconSize]} text-[#FCE365] ml-3 md:ml-0 mr-4 md:mr-8 border-r border-zinc-800 pr-4`} />
        <div className="flex flex-col md:gap-4">
          <p className="text-lg md:text-4xl text-[#FCE365] font-bold">{title}</p>
          <p className="text-sm md:text-4xl text-white/80 font-bold md:font-thin">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
