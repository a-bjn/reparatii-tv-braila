import ReviewsContent from "./ReviewsContent";

export default function ReviewsSection() {
  return (
    <section className="relative w-full h-min-screen bg-zinc-900 py-20 px-5">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black/100 to-transparent opacity-90 pointer-events-none"></div>
      <ReviewsContent />
    </section>
  );
}
