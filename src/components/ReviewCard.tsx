import { FaStar } from "react-icons/fa";

interface ReviewProps {
  name: string;
  review: string;
  rating: number;
  image: string;
}

export default function ReviewCard({ name, review, rating, image }: ReviewProps) {
  return (
    <div className="p-4 flex flex-col items-start border border-zinc-900 bg-black/30 text-start w-full sm:w-80 rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.5)]">
      <div className="flex flex-row gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-white font-semibold text-lg">{name}</p>
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${i < rating ? "text-yellow-300" : "text-gray-500"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-white/70 text-md font-normal">{review}</p>
    </div>
  );
}
