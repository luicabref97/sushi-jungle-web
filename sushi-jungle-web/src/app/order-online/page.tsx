"use client";

import { ScrollReveal, RevealText } from "@/components/scroll";
import { ORDER_PLATFORMS } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* ------------------------------------------------------------------ */
/*  Platform Card                                                      */
/* ------------------------------------------------------------------ */

function PlatformCard({
  platform,
}: {
  platform: (typeof ORDER_PLATFORMS)[number];
}) {
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="card-glass border-0 ring-0 h-full transition-shadow duration-300 hover:glow-gold">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-foreground text-xl md:text-2xl">
              {platform.name}
            </CardTitle>
            {/* External link icon */}
            <svg
              className="w-5 h-5 text-muted-foreground shrink-0 group-hover:text-gold-warm transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
              />
            </svg>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Rating & Reviews */}
          {platform.rating && (
            <p className="font-data text-lg text-gold-warm">
              {platform.rating} ★
              {platform.reviews && (
                <span className="text-muted-foreground text-sm ml-2">
                  ({platform.reviews} reviews)
                </span>
              )}
            </p>
          )}

          {/* Promo Badge */}
          {platform.promo && (
            <Badge className="bg-gold-warm/20 text-gold-warm border-gold-warm/30">
              {platform.promo}
            </Badge>
          )}
        </CardContent>
      </Card>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function OrderOnlinePage() {
  return (
    <main className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ---- Hero ---- */}
        <section className="mb-16 text-center">
          <RevealText
            text="Order Online"
            variant="split-words"
            as="h1"
            className="font-heading text-5xl md:text-7xl text-gold-warm mb-4"
          />
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              Your Jungle experience, delivered
            </p>
          </ScrollReveal>
        </section>

        {/* ---- Platform Cards ---- */}
        <ScrollReveal
          direction="up"
          staggerChildren={0.12}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {ORDER_PLATFORMS.map((platform) => (
            <PlatformCard key={platform.name} platform={platform} />
          ))}
        </ScrollReveal>

        {/* ---- Services Info ---- */}
        <ScrollReveal direction="up" className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Dine-in", "Curbside Pickup", "Delivery"].map((service) => (
              <Badge
                key={service}
                variant="outline"
                className="text-sm md:text-base px-4 py-2 border-gold-warm/30 text-gold-warm"
              >
                {service}
              </Badge>
            ))}
          </div>
        </ScrollReveal>

        {/* ---- Extras: Gift Cards & Rewards ---- */}
        <ScrollReveal direction="up">
          <div className="card-glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-gold-warm mb-4">
              Gift Cards &amp; Rewards
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Share the Jungle experience with a gift card, or join our rewards
              program to earn points on every order. Ask your server or order
              direct through Toast Tab for details.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
