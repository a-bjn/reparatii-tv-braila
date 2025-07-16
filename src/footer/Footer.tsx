const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 border-t border-zinc-800 py-8 px-4 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-bold text-[#FFE14D]">Reparații TV Brăila</span>
          <span className="text-sm mt-1">Telefon: <a href="tel:+40729026656" className="text-[#FFE14D] hover:underline font-semibold">0729 026 656</a></span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold">Locație:</span>
          <span className="text-sm">Str. General Eremia Grigorescu 40, Brăila</span>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <span className="text-sm font-semibold">Program:</span>
          <span className="text-sm">Luni-Vineri: 8:00 - 17:00</span>
          <span className="text-sm">Sâmbătă-Duminică: Închis</span>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-zinc-400">&copy; {new Date().getFullYear()} Reparații TV Brăila. Toate drepturile rezervate.</div>
    </footer>
  );
};

export default Footer; 