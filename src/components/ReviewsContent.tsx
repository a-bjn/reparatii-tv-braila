"use client";

import { useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const reviews = [
  {
    name: "Gabriel",
    rating: 5,
    date: "acum 3 luni",
    text: "Super rapid și de încredere! Am cautat in peste 10 locuri ajutoare si toti m-au refuzat. Aici am fost primit cu caldura si problema s-a rezolvat foarte repede.",
    source: "Google"
  },
  {
    name: "bradea doru gabriel",
    rating: 5,
    date: "acum 3 luni",
    text: "Seriozitate și promptitudine. Am primit ajutor rapid, fără complicații inutile. O experiență pozitivă, exact cum ar trebui să fie peste tot.",
    source: "Google"
  },
  {
    name: "Ovidiu Colceru",
    rating: 5,
    date: "acum 3 luni",
    text: "Seriozitate și amabilitate incredibile",
    source: "Google"
  },
  {
    name: "Andreea Cristina",
    rating: 5,
    date: "acum 9 luni",
    text: "Recomand! Seriozitate și profesionalism!",
    source: "Google"
  },
  {
    name: "Roxana Manea",
    rating: 5,
    date: "acum 2 ani",
    text: "Un service Serios și profesionist. Recomand",
    source: "Google"
  }
];

const avatarColors = [
  "bg-purple-400",
  "bg-orange-400",
  "bg-blue-400",
  "bg-red-400",
  "bg-green-400",
  "bg-pink-400",
  "bg-yellow-400"
];

function getAvatarProps(name: string, index: number) {
  const initial = name.trim().charAt(0).toUpperCase();
  const color = avatarColors[index % avatarColors.length];
  return { initial, color };
}

export default function ReviewsContent() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative flex flex-col justify-around items-center">
      <div className="flex flex-col items-center mb-16" data-aos="fade-up">
        <h2 className="text-white/50 font-thin text-4xl mb-6 text-center">Recenzii Google</h2>
        <p className="text-8xl font-thin text-white/95 mb-2">4.4/5</p>
        <div className="flex flex-row items-center text-center gap-4" data-aos="zoom-in">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-yellow-300 text-3xl" />
          ))}
          <FaStarHalfAlt className="text-yellow-300 text-3xl" />
        </div>
      </div>
      <div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl"
        data-aos="fade-up"
      >
        {reviews.map((review, index) => {
          const { initial, color } = getAvatarProps(review.name, index);
          return (
            <div key={index} className="p-4 flex flex-col items-start border border-zinc-900 bg-black/30 text-start w-full sm:w-80 rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.5)]" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex flex-row gap-4 mb-2 items-center">
                {/* Avatar */}
                <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold text-lg ${color}`}>
                  {initial}
                </div>
                <div className="flex flex-col">
                  <p className="text-white font-semibold text-lg">{review.name}</p>
                  <div className="flex items-center my-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${i < review.rating ? "text-yellow-300" : "text-gray-500"}`}
                      />
                    ))}
                    <span className="ml-2 text-xs text-gray-400">{review.date}</span>
                    <span className="ml-2 text-xs text-blue-500">{review.source}</span>
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-md font-normal">{review.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
