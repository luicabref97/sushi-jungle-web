"use client";

import Link from "next/link";
import { StickyMedia, RevealText, ScrollReveal } from "@/components/scroll";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { IMAGES, RESTAURANT, SOCIAL, RATINGS } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ORIGIN_PARAGRAPHS = [
  "It all started with a motorcycle, a dream, and a couple of perfect rolls. Before the restaurant existed, before the green neon sign lighting the entrance in Doral, before the 3,000+ five-star reviews, Marcelo Villamizar was already building Sushi Jungle \u2014 one home delivery at a time.",
  "That promise soon found its home. Together with Valeria Roa, an entrepreneur with vision and passion for life, Marcelo transformed his dream into a real restaurant. In 2023, Sushi Jungle opened its doors in the heart of Doral, Miami.",
];

const FOUNDERS = [
  {
    name: RESTAURANT.founders.marcelo.name,
    role: RESTAURANT.founders.marcelo.role,
    description:
      "The human heart of the restaurant. Mentioned in 33+ Google reviews for his personal touch.",
  },
  {
    name: RESTAURANT.founders.valeria.name,
    role: RESTAURANT.founders.valeria.role,
    description: "Entrepreneur | Joie De Vivre | Go-getter",
  },
];

const BRAND_VALUES = [
  {
    title: "Genuine Passion",
    description:
      "Every dish carries the fire that started on a motorcycle with a dream.",
  },
  {
    title: "Human Connection",
    description:
      "We remember your name, your favorite roll, and how you like your sake.",
  },
  {
    title: "Cultural Fusion",
    description:
      "Japanese precision meets Peruvian intensity in every bite.",
  },
  {
    title: "Complete Experience",
    description:
      "From the playlist to the plating, every detail is intentional.",
  },
  {
    title: "Accessibility",
    description:
      "World-class Nikkei cuisine without the pretension or the price tag.",
  },
];

const STATS = [
  { label: "Founded", value: String(RESTAURANT.founded) },
  { label: "Google Rating", value: String(RATINGS.google.rating) },
  { label: "Reviews", value: RATINGS.google.reviews },
  { label: "Instagram Followers", value: SOCIAL.instagram.followers },
  { label: "Signature Rolls", value: "30+" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* ---- 1. Hero ---- */}
      <StickyMedia
        src={IMAGES.interior}
        alt="Sushi Jungle restaurant interior"
        scrollLength={2}
      >
        <div className="text-center px-4 max-w-4xl">
          <RevealText
            text="Not just sushi. A Jungle experience."
            variant="split-words"
            as="h1"
            className="font-heading text-5xl md:text-7xl text-gold-warm leading-tight"
          />
        </div>
      </StickyMedia>

      {/* ---- 2. Origin Story ---- */}
      <section className="gradient-jungle py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 space-y-16">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-gold-warm mb-4">
              Our Origin
            </h2>
            <Separator className="mb-8 w-24 bg-gold-warm/40" />
          </ScrollReveal>

          {ORIGIN_PARAGRAPHS.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ---- 3. Founders ---- */}
      <section className="gradient-earth py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-gold-warm text-center mb-4">
              The Founders
            </h2>
            <Separator className="mx-auto mb-16 w-24 bg-gold-warm/40" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {FOUNDERS.map((founder, i) => (
              <ScrollReveal key={founder.name} direction="up" delay={i * 0.2}>
                <div className="card-glass rounded-2xl p-8 md:p-10 h-full">
                  <p className="font-heading text-2xl text-gold-warm mb-1">
                    {founder.name}
                  </p>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6">
                    {founder.role}
                  </p>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 4. Philosophy ---- */}
      <section className="gradient-jungle py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-gold-warm mb-4">
              Our Philosophy
            </h2>
            <Separator className="mx-auto mb-10 w-24 bg-gold-warm/40" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
              &ldquo;Japanese precision and delicacy meets Peruvian intensity
              and creativity. Every roll is a work of art designed to
              surprise.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---- 5. Brand Values ---- */}
      <section className="gradient-earth py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-gold-warm text-center mb-4">
              What We Stand For
            </h2>
            <Separator className="mx-auto mb-16 w-24 bg-gold-warm/40" />
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.12}>
            {BRAND_VALUES.map((value) => (
              <div
                key={value.title}
                className="card-glass rounded-2xl p-6 md:p-8 mb-5"
              >
                <h3 className="font-heading text-xl text-gold-warm mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ---- 6. Stats Bar ---- */}
      <section className="py-16 md:py-20 border-y border-border">
        <ScrollReveal staggerChildren={0.08}>
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-data text-3xl md:text-4xl text-gold-warm">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ---- 7. CTA ---- */}
      <section className="gradient-jungle py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl text-gold-warm mb-6">
              Ready for the Jungle experience?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Reserve your table or order your favorite rolls from anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservations"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "px-8 py-3 text-base",
                })}
              >
                Reservations
              </Link>
              <Link
                href="/order-online"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "px-8 py-3 text-base",
                })}
              >
                Order Online
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
