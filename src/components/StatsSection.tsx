import CountUp from "./ui/CountUp";
import Reveal from "./ui/Reveal";

const stats = [
  { to: 30, suffix: "+", decimals: 0, label: "ani de experiență în domeniu" },
  { to: 1, suffix: " an", decimals: 0, label: "garanție la reparații" },
  { to: 4.4, suffix: "", decimals: 1, label: "rating mediu pe Google" },
  { to: 8, suffix: "+", decimals: 0, label: "branduri de televizoare" },
];

export default function StatsSection() {
  return (
    <section className="px-5 pb-28 md:px-8 md:pb-40">
      <Reveal
        stagger={0.12}
        y={50}
        className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-3xl border border-line bg-line gap-px lg:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-surface p-8 md:p-12">
            <CountUp
              to={s.to}
              decimals={s.decimals}
              suffix={s.suffix}
              className="font-display text-5xl font-bold tracking-tight text-accent md:text-7xl"
            />
            <p className="mt-4 max-w-[16ch] text-sm leading-snug text-muted md:text-base">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
