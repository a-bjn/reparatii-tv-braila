"use client"


import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import ReviewCard from "./ReviewCard";

export default function ReviewsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const reviews = [
    {
      name: "Lyle",
      review: "Super rapid si de incredere! Am cautat in peste 10 locuri ajutoare si toti m-au refuzat. Aici am fost primit cu caldura si problema s-a rezolvat foarte repede.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Bradea Doru Gabriel",
      review: "Seriozitate și promptitudine. Am primit ajutor rapid, fără complicații inutile. O experiență pozitivă, exact cum ar trebui să fie peste tot.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Andreea Cristina",
      review: "Recomand! Seriozitate si profesionalism!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Roxana Manea",
      review: "Un service serios si profesinist. Recomand!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    }
  ];

  return (
    <section className="relative w-full h-min-screen bg-zinc-900 py-20 px-5">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent opacity-80 pointer-events-none"></div>
      <div className="relative flex flex-col justify-around items-center">
        <div className="flex flex-col items-center mb-16" data-aos="fade-up">
          <p className="text-white/45 font-thin text-4xl mb-6">Media Recenziilor</p>
          <p className="text-8xl font-thin text-white/95 mb-2">4.3/5</p>
          <div className="flex flex-row items-center text-center gap-4" data-aos="zoom-in">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-300 text-3xl" />
            ))}
            <div className="relative w-7 h-7">
              <FaStar className="text-gray-500 text-3xl absolute" />
              <div className="absolute overflow-hidden w-[45%] h-full">
                <FaStar className="text-yellow-300 text-3xl" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl"
          data-aos="fade-up"
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} data-aos="fade-up" data-aos-delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
