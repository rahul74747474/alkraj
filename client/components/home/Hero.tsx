import { Link } from "react-router-dom";

export default function Hero() {
  const bg =
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop";
  return (
    <section className="relative h-[68vh] md:h-[76vh] overflow-hidden rounded-none">
      <img
        src={bg}
        alt="Modern luxury apartments"
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/80" />
      <div className="relative container h-full flex flex-col items-start justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold max-w-2xl leading-tight text-primary animate-slide-up">
          Find Your Dream Home Today
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl animate-fade-in">
          Discover premium apartments, villas, and commercial spaces crafted for modern living.
        </p>
        <div className="mt-8 animate-fade-in delay-150">
          <a
            href="#search"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-amber-400 text-primary-foreground/90 px-6 py-3 font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] ring-1 ring-black/5 hover:brightness-105 transition-all"
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}
