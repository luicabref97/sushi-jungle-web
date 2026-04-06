"use client";

import { ScrollReveal, RevealText } from "@/components/scroll";
import { RESERVATION_PLATFORMS, CONTACT } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const PLATFORM_DETAILS = [
  {
    name: "OpenTable",
    url: "https://www.opentable.com/r/sushi-jungle-doral",
    rating: 4.8,
    breakdown: [
      { label: "Food", value: 4.8 },
      { label: "Service", value: 4.9 },
      { label: "Ambience", value: 4.9 },
      { label: "Value", value: 4.4 },
    ],
  },
  {
    name: "Toast Tab",
    url: "https://book.toasttab.com/restaurants/sushi-jungle-8373-northwest-12th-street",
    rating: null,
    breakdown: null,
  },
] as const;

const DINING_DETAILS = [
  { label: "Noise Level", value: "Moderate" },
  { label: "Price Range", value: "$30 and under" },
  { label: "Dining Style", value: "Casual Dining" },
  { label: "Inclusive", value: "LGBTQ+ Friendly" },
] as const;

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ReservationsPage() {
  return (
    <main className="min-h-screen">
      {/* ---- 1. Hero ---- */}
      <section className="gradient-jungle py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <RevealText
            text="Reserve Your Table"
            variant="split-words"
            as="h1"
            className="font-heading text-5xl md:text-6xl text-gold-warm mb-4"
          />
          <RevealText
            text="At the Jungle"
            variant="fade-up"
            as="p"
            delay={0.3}
            className="text-xl text-muted-foreground"
          />
        </div>
      </section>

      {/* ---- 2. Reservation Platform Cards ---- */}
      <section className="gradient-earth py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-gold-warm mb-8 text-center">
              Book Your Experience
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {PLATFORM_DETAILS.map((platform) => (
              <ScrollReveal key={platform.name} delay={0.1}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="card-glass border-gold-warm/20 hover:border-gold-warm/50 transition-colors duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-gold-warm text-xl flex items-center justify-between">
                        {platform.name}
                        <span className="text-sm text-muted-foreground group-hover:text-gold-warm transition-colors">
                          Book now &rarr;
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {platform.rating && (
                        <div className="mb-4">
                          <div className="flex items-baseline gap-2 mb-3">
                            <span className="font-data text-3xl text-gold-warm">
                              {platform.rating}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              / 5.0 overall
                            </span>
                          </div>
                          {platform.breakdown && (
                            <div className="grid grid-cols-2 gap-2">
                              {platform.breakdown.map((item) => (
                                <div
                                  key={item.label}
                                  className="flex items-center justify-between"
                                >
                                  <span className="text-sm text-muted-foreground">
                                    {item.label}
                                  </span>
                                  <span className="font-data text-sm text-gold-warm">
                                    {item.value}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                      {!platform.rating && (
                        <p className="text-muted-foreground text-sm">
                          Direct reservation — no third-party fees
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 3. Dining Details ---- */}
      <section className="gradient-jungle py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-gold-warm mb-8 text-center">
              Dining Details
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <Card className="card-glass border-gold-warm/20">
              <CardContent className="pt-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  {DINING_DETAILS.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-center justify-between py-2"
                    >
                      <span className="text-muted-foreground text-sm">
                        {detail.label}
                      </span>
                      <span className="text-gold-warm font-medium text-sm">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <Separator className="border-gold-warm/10" />

      {/* ---- 4. Tips Section ---- */}
      <section className="gradient-earth py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Card className="card-glass border-gold-warm/20">
              <CardContent className="py-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span className="text-gold-warm font-heading text-xl block mb-2">
                    Tip
                  </span>
                  We recommend making reservations during busy nights (Friday
                  &amp; Saturday) to ensure seating.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ---- 5. Contact Fallback ---- */}
      <section className="gradient-jungle py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground">
              Prefer to call?{" "}
              <a
                href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}
                className="text-gold-warm hover:underline font-medium"
              >
                {CONTACT.phone}
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
