import { FaTv, FaTools, FaKey, FaAward } from "react-icons/fa";


export default function ServiciiSection() {
  return (
    <section className="relative w-full h-min-screen bg-[#131212] px-4 py-18 overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-center gap-4">
        <h1 className="text-[#FFE14D] text-2xl font-bold drop-shadow-lg text-center mb-10">
          Serviciile pe care le oferim
        </h1>
        <div className="w-full bg-zinc-900 rounded-2xl border border-gray-500 p-2 shadow-[4px_4px_12px_0px_rgba(255,185,0,0.1)]">
          <div className="flex flex-row items-center">
          <FaTools className="text-7xl text-[#FFE14D] ml-2 mr-4 border-r border-gray-500 pr-4" />
            <div className="flex flex-col">
              <p className="text-lg text-[#FFE14D] font-bold">Repratii TV/LCD/LED</p>
              <p className="text-sm text-gray-300 font-light">
                Oferim reparatii pentru o gama larga de brand-uri TV.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-zinc-900 rounded-2xl border border-gray-500 p-2 shadow-[2px_4px_12px_0px_rgba(255,185,0,0.1)]">
          <div className="w-full flex flex-row items-center">
            <FaTv className="text-7xl text-[#FFE14D] ml-2 mr-4 border-r border-gray-500 pr-4" />
            <div className="flex flex-col">
              <p className="text-lg text-[#FFE14D] font-bold">Telecomenzi TV</p>
              <p className="text-sm text-gray-300 font-light">
                Vindem telecomenzi originale pentru toate mărcile TV.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-zinc-900 rounded-2xl border border-gray-500 p-2 shadow-[2px_4px_12px_0px_rgba(255,185,0,0.1)]">
          <div className="w-full flex flex-row items-center">
            <FaKey className="text-6xl text-[#FFE14D] ml-1 mr-4 border-r border-gray-500 pr-4" />
            <div className="flex flex-col">
              <p className="text-lg text-[#FFE14D] font-bold">Chei auto</p>
              <p className="text-sm text-gray-300">
                Servicii profesionale pentru chei auto.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-zinc-900 rounded-2xl border border-gray-500 p-2 shadow-[2px_4px_12px_0px_rgba(255,185,0,0.0.1)]">
          <div className="w-full flex flex-row items-center">
            <FaAward className="text-6xl text-[#FFE14D] ml-3 mr-4 border-r border-gray-500 pr-4" />
            <div className="flex flex-col">
              <p className="text-lg text-[#FFE14D] font-bold">Garanție 1 an</p>
              <p className="text-sm text-gray-300 font-light">
                Beneficiati de o garantie pe o perioada de 1 an
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
