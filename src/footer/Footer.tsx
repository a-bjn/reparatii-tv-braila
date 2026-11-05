import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line px-5 pb-10 pt-24 md:px-8 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal y={50} className="mb-20 md:mb-28">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">Televizorul nu merge?</p>
          <a
            href="tel:+40729026656"
            className="group inline-block font-display text-[clamp(2.4rem,10vw,8rem)] font-bold leading-none tracking-tight transition-colors hover:text-accent"
          >
            0729 026 656
            <span className="ml-3 inline-block translate-y-0 text-accent transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </Reveal>

        <div className="grid gap-10 border-t border-line pt-10 text-sm md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-accent">Reparații TV Brăila</p>
            <p className="mt-2 max-w-xs text-muted">
              Service pentru televizoare LCD / LED / Smart TV, telecomenzi și chei auto. Experiență de 30 de ani.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Locație</p>
            <p className="mt-2">Str. General Eremia Grigorescu 40, Brăila</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Program</p>
            <p className="mt-2">Luni – Vineri: 8:00 – 17:00</p>
            <p className="text-muted">Sâmbătă – Duminică: închis</p>
          </div>
        </div>

        <p className="mt-14 text-xs text-muted">
          &copy; {new Date().getFullYear()} Reparații TV Brăila. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
