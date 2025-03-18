import { FaTv, FaTools, FaKey, FaAward } from "react-icons/fa";
import Card from "./Card";

export default function ServiciiSection() {
  const services: { icon: React.ElementType; title: string; description: string; iconSize: "5xl" | "6xl" | "7xl" | "8xl" }[] = [
    {
      icon: FaTools,
      title: "Reparații TV/LCD/LED",
      description: "Oferim reparații pentru o gamă largă de brand-uri TV.",
      iconSize: "6xl",
    },
    {
      icon: FaTv,
      title: "Telecomenzi TV",
      description: "Vindem telecomenzi originale pentru toate mărcile TV.",
      iconSize: "6xl",
    },
    {
      icon: FaKey,
      title: "Chei Auto",
      description: "Servicii profesionale pentru orice marca de chei auto.",
      iconSize: "6xl",
    },
    {
      icon: FaAward,
      title: "Garanție 1 An",
      description: "Beneficiați de o garanție pe o perioadă de 1 an.",
      iconSize: "6xl",
    },
  ];

  return (
    <section className="relative w-full h-min-screen bg-[#131212] px-4 py-20 overflow-hidden">
     <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent opacity-80 pointer-events-none"></div>
      <div className="relative w-full h-full flex flex-col items-center gap-8">
        <h1 className="text-[#FFE14D] text-2xl font-bold drop-shadow-lg text-center mt-12 mb-10">
          Serviciile pe care le oferim
        </h1>
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            iconSize={service.iconSize}
          />
        ))}
      </div>
    </section>
  );
}
