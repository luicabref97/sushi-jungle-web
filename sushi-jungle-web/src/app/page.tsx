"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ParallaxSection,
  RevealText,
  StickyMedia,
  ScrollReveal,
  HorizontalScroll,
} from "@/components/scroll";
import {
  RESTAURANT,
  RATINGS,
  IMAGES,
  TESTIMONIALS,
  HAPPY_HOUR,
  CONTACT,
  HOURS,
} from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Signature Rolls Data                                               */
/* ------------------------------------------------------------------ */
const SIGNATURE_ROLLS = [
  { name: "Fortune Roll", price: 23, description: "Crispy shrimp, avocado, topped with seared salmon & truffle drizzle" },
  { name: "Safari Roll", price: 23, description: "Spicy tuna, tempura crunch, mango, eel sauce & jungle spice" },
  { name: "Jaguar Roll", price: 18, description: "Shrimp tempura, cream cheese, avocado & signature Jaguar sauce" },
  { name: "Tropical Roll", price: 20, description: "Fresh salmon, passion fruit, avocado & coconut flakes" },
] as const;

/* ------------------------------------------------------------------ */
/*  Homepage                                                           */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ============================================================ */}
      {/*  1. HERO — Full-screen parallax                              */}
      {/* ============================================================ */}
      <ParallaxSection
        height="100vh"
        overlay
        layers={[
          {
            speed: 0.5,
            className: "z-0",
            children: (
              <Image
                src={IMAGES.interior}
                alt="Sushi Jungle restaurant interior"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            ),
          },
          {
            speed: 1,
            className: "z-10 flex items-center justify-center",
            children: (
              <div className="text-center space-y-6 px-4 max-w-4xl mx-auto">
                <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-gold-warm tracking-tight">
                  {RESTAURANT.name}
                </h1>
                <p className="font-sans text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  {RESTAURANT.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link
                    href="/menu"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:glow-gold transition-all duration-300 text-center"
                  >
                    View Menu
                  </Link>
                  <Link
                    href="/order-online"
                    className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all duration-300 text-center"
                  >
                    Order Online
                  </Link>
                </div>
              </div>
            ),
          },
        ]}
      />

      {/* ============================================================ */}
      {/*  2. RATINGS TRUST BAR                                        */}
      {/* ============================================================ */}
      <section className="py-16 border-y border-border/50 bg-background">
        <ScrollReveal staggerChildren={0.15} className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {Object.values(RATINGS).map((r) => (
              <div key={r.label} className="space-y-1">
                <p className="font-data text-4xl md:text-5xl text-gold font-bold">
                  {r.rating}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {r.label}
                </p>
                <p className="text-xs text-muted-foreground/70">
                  {r.reviews} reviews
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================================ */}
      {/*  3. MENU PREVIEW — Signature Rolls                           */}
      {/* ============================================================ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
                Our Signatures
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-gold-warm">
                Jungle Favorites
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.12}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SIGNATURE_ROLLS.map((roll) => (
                <div
                  key={roll.name}
                  className="card-glass rounded-xl p-6 space-y-3 hover:glow-gold transition-all duration-500 group"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-heading text-xl text-gold-warm group-hover:text-gold transition-colors">
                      {roll.name}
                    </h3>
                    <span className="font-data text-lg text-gold">${roll.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {roll.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-warm transition-colors font-medium group"
              >
                Explore Full Menu
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. ABOUT TEASER — Sticky Media with RevealText              */}
      {/* ============================================================ */}
      <StickyMedia
        src={IMAGES.neonSign}
        alt="Sushi Jungle neon sign — Feed Me Sushi"
        scrollLength={2}
        scaleFrom={1.1}
      >
        <div className="max-w-3xl mx-auto text-center px-6 space-y-8">
          <RevealText
            text={RESTAURANT.tagline}
            variant="split-words"
            as="h2"
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-gold-warm leading-tight"
          />
          <ScrollReveal delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Japanese precision meets Peruvian soul. Every plate tells a story
              of two cultures, one unforgettable flavor.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gold/30 rounded-lg text-gold hover:bg-gold/10 transition-all duration-300 font-medium"
            >
              Our Story
              <span>&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </StickyMedia>

      {/* ============================================================ */}
      {/*  5. TESTIMONIALS — Horizontal Scroll                         */}
      {/* ============================================================ */}
      <section className="py-24">
        <ScrollReveal>
          <div className="text-center mb-16 px-4">
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
              What People Say
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-gold-warm">
              Jungle Reviews
            </h2>
          </div>
        </ScrollReveal>

        <HorizontalScroll className="min-h-[60vh]" trackClassName="items-center pl-8 pr-[20vw]">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="card-glass rounded-2xl p-8 md:p-10 flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] space-y-6"
            >
              <svg
                className="w-8 h-8 text-gold/40"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-heading text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.source}</p>
                </div>
              </div>
            </div>
          ))}
        </HorizontalScroll>
      </section>

      {/* ============================================================ */}
      {/*  6. HAPPY HOUR BANNER                                        */}
      {/* ============================================================ */}
      <section className="py-24 px-4 gradient-earth">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
                {HAPPY_HOUR.days} &middot; {HAPPY_HOUR.time}
              </p>
              <h2 className="font-heading text-4xl md:text-6xl text-gradient-gold">
                Happy Hour
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HAPPY_HOUR.offers.map((offer) => (
                <div
                  key={offer}
                  className="card-glass rounded-xl p-6 text-center space-y-2 hover:glow-gold transition-all duration-500"
                >
                  <p className="text-gold font-heading text-lg">{offer}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/happy-hour"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:glow-gold transition-all duration-300"
              >
                See Happy Hour Details
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. LOCATION & HOURS                                         */}
      {/* ============================================================ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
                Find Us
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-gold-warm">
                Visit the Jungle
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <ScrollReveal direction="left">
              <div className="space-y-8">
                {/* Address */}
                <div className="space-y-2">
                  <h3 className="font-heading text-xl text-gold-warm">Address</h3>
                  <p className="text-muted-foreground">{CONTACT.address}</p>
                  <a
                    href={CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gold text-sm hover:text-gold-warm transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <h3 className="font-heading text-xl text-gold-warm">Phone</h3>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </div>

                {/* Hours */}
                <div className="space-y-3">
                  <h3 className="font-heading text-xl text-gold-warm">Hours</h3>
                  <div className="space-y-2">
                    {HOURS.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between text-sm border-b border-border/30 pb-2"
                      >
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="font-data text-foreground">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map Placeholder */}
            <ScrollReveal direction="right">
              <div className="card-glass rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px] flex items-center justify-center">
                <a
                  href={CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center space-y-4 p-8"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <p className="font-heading text-lg text-gold-warm">
                    View on Google Maps
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {CONTACT.neighborhood} &middot; Doral, FL
                  </p>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
