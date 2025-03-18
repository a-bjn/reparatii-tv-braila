import React from "react";

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconSize?: "5xl" | "6xl" | "7xl" | "8xl";
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, description, iconSize = "6xl" }) => {
  const sizeClasses: Record<string, string> = {
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
  };

  return (
    <div className="w-full bg-black/40 rounded-2xl border border-zinc-800 p-2 shadow-[2px_4px_12px_0px_rgba(255,185,0,0.1)]">
      <div className="w-full flex flex-row items-center">
        <Icon className={`${sizeClasses[iconSize]} text-[#FCE365] ml-3 mr-4 border-r border-zinc-800 pr-4`} />
        <div className="flex flex-col">
          <p className="text-lg text-[#FCE365] font-black">{title}</p>
          <p className="text-sm text-zinc-400 font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
