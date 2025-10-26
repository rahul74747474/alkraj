import PropertyCard from "@/components/common/PropertyCard";

const properties = [
  {
    image:
      "https://i.ibb.co/MD6nD3qk/IMG-20251026-WA0015.jpg",
    title: "Skyline Residences, Sector 62",
    details: "3BHK | ₹85 Lakh | Sector 62, Noida",
  },
  {
    image:
      "https://i.ibb.co/C3RHZnsT/IMG-20251026-WA0021.jpg",
    title: "Golden Oaks Villas",
    details: "Villa | ₹2.1 Cr | Sector 150, Noida",
  },
  {
    image:
      "https://i.ibb.co/spL1yfT4/IMG-20251026-WA0018.jpg",
    title: "Corporate Heights",
    details: "Commercial | ₹1.8 Cr | Noida Expressway",
  },
  {
    image:
      "https://i.ibb.co/278WKwVR/IMG-20251026-WA0017.jpg",
    title: "Riverview Apartments",
    details: "2BHK | ₹65 Lakh | Sector 93, Noida",
  },
  {
    image:
      "https://i.ibb.co/WpsHNQCS/IMG-20251026-WA0020.jpg",
    title: "Emerald Greens",
    details: "3BHK | ₹1.1 Cr | Greater Noida",
  },
  {
    image:
      "https://i.ibb.co/LDf1WG6G/IMG-20251026-WA0019.jpg",
    title: "City Center Heights",
    details: "Commercial | ₹3.2 Cr | Central Noida",
  },
  {
  image: "https://i.ibb.co/67tLZ8Zn/IMG-20251026-WA0022.jpg",
  title: "Palm Residency",
  details: "Residential | ₹1.8 Cr | Sector 150, Noida",
},
{
  image: "https://i.ibb.co/hTg2DCy/IMG-20251026-WA0016.jpg",
  title: "Skyline Corporate Park",
  details: "Commercial | ₹4.5 Cr | Golf Course Extension, Gurgaon",
},
];

export default function FeaturedProperties() {
  return (
    <section className="container py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary">Featured Properties</h2>
          <p className="text-muted-foreground mt-2">Handpicked listings for premium living.</p>
        </div>
        <a href="/" className="hidden md:inline-flex text-sm underline underline-offset-4 hover:opacity-80">View all</a>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => (
          <PropertyCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
