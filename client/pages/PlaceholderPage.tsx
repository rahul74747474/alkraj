export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold text-primary">{title}</h1>
        <p className="mt-3 text-muted-foreground">
          This page is a placeholder. Tell Fusion what you want here and we'll build it out.
        </p>
      </div>
    </section>
  );
}
