import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import ContactSection from "@/components/home/ContactSection";
import FloatingCTA from "@/components/common/FloatingCTA";

export default function Index() {
  return (
    <div className="pb-8">
      <Hero />
      <SearchBar />
      <Counters />
      <FeaturedProperties />
      <ContactSection />
      <FloatingCTA />
    </div>
  );
}

function Counters() {
  const items = [
    { label: "Projects Completed", value: 120 },
    { label: "Happy Clients", value: 350 },
    { label: "Properties Sold", value: 220 },
  ];
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((i) => (
          <div
            key={i.label}
            className="rounded-2xl bg-white/70 dark:bg-muted/40 backdrop-blur-md ring-1 ring-black/5 p-6 text-center shadow-sm"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-primary">
              {i.value}+
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
