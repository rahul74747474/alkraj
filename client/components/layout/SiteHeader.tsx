import { cn } from "@/lib/utils";

export default function SiteHeader({ className }: { className?: string }) {
  return (
    <header className={cn("w-full bg-transparent", className)}>
      <div className="container py-6 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary animate-fade-in">
          Alkraj Developers Pvt. Ltd.
        </h1>
        <p className="mt-2 text-sm md:text-base text-muted-foreground animate-fade-in delay-100">
          Your Trusted Partner in Real Estate
        </p>
      </div>
    </header>
  );
}
