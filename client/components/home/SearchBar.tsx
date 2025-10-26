import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

export default function SearchBar() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Apartment");
  const [price, setPrice] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ location, type, price });
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section id="search" className="-mt-12 md:-mt-16">
      <div className="container">
        <form
          onSubmit={onSubmit}
          className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-white/70 dark:bg-background/80 backdrop-blur-md shadow-xl ring-1 ring-white/40 dark:ring-black/40 animate-fade-in"
        >
          <div className="flex flex-col">
            <label className="text-xs font-medium text-muted-foreground mb-2">
              Search by Location
            </label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Sector 62, Noida"
              className="h-11 rounded-lg px-3 bg-white/80 dark:bg-muted/40 border border-white/60 dark:border-border focus:outline-none focus:ring-2 focus:ring-brand-gold/60 transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-medium text-muted-foreground mb-2">
              Property Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="h-11 rounded-lg px-3 bg-white/80 dark:bg-muted/40 border border-white/60 dark:border-border focus:outline-none focus:ring-2 focus:ring-brand-gold/60 transition"
            >
              <option>Apartment</option>
              <option>Villa</option>
              <option>Commercial</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-medium text-muted-foreground mb-2">
              Max Price (₹)
            </label>
            <input
              type="number"
              min={0}
              inputMode="numeric"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g., 8500000"
              className="h-11 rounded-lg px-3 bg-white/80 dark:bg-muted/40 border border-white/60 dark:border-border focus:outline-none focus:ring-2 focus:ring-brand-gold/60 transition"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-primary text-primary-foreground hover:brightness-110 transition shadow-md"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
