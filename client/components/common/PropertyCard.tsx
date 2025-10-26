type Props = {
  image: string;
  title: string;
  details: string;
};

export default function PropertyCard({ image, title, details }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white/70 dark:bg-muted/40 backdrop-blur-md shadow-lg ring-1 ring-black/5 transition hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-primary">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{details}</p>
        <div className="mt-4">
          <button className="inline-flex items-center rounded-full px-4 py-2 bg-gradient-to-r from-brand-gold to-amber-400 text-primary-foreground/90 shadow hover:brightness-105 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
