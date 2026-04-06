import { RESTAURANT, RATINGS } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section — will be cinematic parallax */}
      <section className="relative h-screen flex items-center justify-center gradient-jungle">
        <div className="text-center space-y-6 px-4">
          <h1 className="font-heading text-6xl md:text-8xl text-gold-warm tracking-tight">
            {RESTAURANT.name}
          </h1>
          <p className="font-sans text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {RESTAURANT.description}
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <a
              href="/menu"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:glow-gold transition-all duration-300"
            >
              View Menu
            </a>
            <a
              href="/order-online"
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all duration-300"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>

      {/* Ratings Trust Bar */}
      <section className="py-12 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-12">
          {Object.values(RATINGS).map((r) => (
            <div key={r.label} className="text-center">
              <p className="font-data text-3xl text-gold">{r.rating}</p>
              <p className="text-sm text-muted-foreground">
                {r.label} ({r.reviews} reviews)
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder sections — will be built in Phase 4 */}
      <section className="py-24 text-center text-muted-foreground">
        <p className="font-heading text-2xl">Menu Preview Coming Soon</p>
      </section>
      <section className="py-24 text-center text-muted-foreground gradient-earth">
        <p className="font-heading text-2xl">Testimonials Coming Soon</p>
      </section>
      <section className="py-24 text-center text-muted-foreground">
        <p className="font-heading text-2xl">Happy Hour &amp; Location Coming Soon</p>
      </section>
    </main>
  );
}
