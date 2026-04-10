"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ScrollReveal, RevealText } from "@/components/scroll";
import { buttonVariants } from "@/components/ui/button";
import { HAPPY_HOUR } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Offer card icons (emoji fallback)                                  */
/* ------------------------------------------------------------------ */

const OFFER_ICONS = ["\u{1F363}", "\u{1F378}", "\u{1F377}", "\u{1F372}"];

/* ------------------------------------------------------------------ */
/*  Countdown logic                                                    */
/* ------------------------------------------------------------------ */

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function getHappyHourState(): { isActive: boolean; timeLeft: TimeLeft } {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday ... 5 = Friday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const currentSeconds = hours * 3600 + minutes * 60 + seconds;

  const startSeconds = 16 * 3600; // 4:00 PM
  const endSeconds = 19 * 3600; // 7:00 PM

  const isWeekday = day >= 1 && day <= 5;

  // Currently active
  if (isWeekday && currentSeconds >= startSeconds && currentSeconds < endSeconds) {
    const remaining = endSeconds - currentSeconds;
    return {
      isActive: true,
      timeLeft: {
        hours: Math.floor(remaining / 3600),
        minutes: Math.floor((remaining % 3600) / 60),
        seconds: remaining % 60,
      },
    };
  }

  // Calculate next happy hour start
  let daysUntil = 0;

  if (isWeekday && currentSeconds < startSeconds) {
    // Today, before 4 PM
    daysUntil = 0;
  } else if (day === 5 && currentSeconds >= endSeconds) {
    // Friday after 7 PM -> next Monday
    daysUntil = 3;
  } else if (day === 6) {
    // Saturday -> Monday
    daysUntil = 2;
  } else if (day === 0) {
    // Sunday -> Monday
    daysUntil = 1;
  } else if (isWeekday && currentSeconds >= endSeconds) {
    // Weekday after 7 PM -> tomorrow
    daysUntil = 1;
  }

  const totalSecondsUntil = daysUntil * 86400 + (startSeconds - currentSeconds);
  const adjustedSeconds = totalSecondsUntil < 0 ? totalSecondsUntil + 86400 : totalSecondsUntil;

  return {
    isActive: false,
    timeLeft: {
      hours: Math.floor(adjustedSeconds / 3600),
      minutes: Math.floor((adjustedSeconds % 3600) / 60),
      seconds: adjustedSeconds % 60,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Countdown component                                                */
/* ------------------------------------------------------------------ */

function CountdownTimer() {
  const [state, setState] = useState(getHappyHourState);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(getHappyHourState());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  if (state.isActive) {
    return (
      <div className="text-center space-y-4">
        <p className="text-gold font-heading text-2xl md:text-3xl animate-pulse">
          Happy Hour NOW!
        </p>
        <p className="text-muted-foreground text-sm uppercase tracking-widest">
          Ends in
        </p>
        <div className="flex justify-center gap-4">
          {[
            { value: pad(state.timeLeft.hours), label: "Hours" },
            { value: pad(state.timeLeft.minutes), label: "Minutes" },
            { value: pad(state.timeLeft.seconds), label: "Seconds" },
          ].map((unit) => (
            <div key={unit.label} className="card-glass rounded-xl px-5 py-4 min-w-[80px]">
              <p className="font-data text-3xl md:text-4xl text-gold">{unit.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{unit.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-4">
      <p className="text-muted-foreground text-sm uppercase tracking-widest">
        Next Happy Hour in
      </p>
      <div className="flex justify-center gap-4">
        {[
          { value: pad(state.timeLeft.hours), label: "Hours" },
          { value: pad(state.timeLeft.minutes), label: "Minutes" },
          { value: pad(state.timeLeft.seconds), label: "Seconds" },
        ].map((unit) => (
          <div key={unit.label} className="card-glass rounded-xl px-5 py-4 min-w-[80px]">
            <p className="font-data text-3xl md:text-4xl text-gold-warm">{unit.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{unit.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HappyHourPage() {
  return (
    <main className="min-h-screen">
      {/* ---- 1. Hero ---- */}
      <section className="gradient-jungle pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealText
            text="Happy Hour"
            variant="split-words"
            as="h1"
            className="font-heading text-5xl md:text-7xl text-gold-warm leading-tight mb-6"
          />
          <ScrollReveal delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {HAPPY_HOUR.time}, {HAPPY_HOUR.days}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---- 2. Countdown Timer ---- */}
      <section className="py-16 md:py-20 border-y border-border">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <CountdownTimer />
          </ScrollReveal>
        </div>
      </section>

      {/* ---- 3. Offers Grid ---- */}
      <section className="gradient-jungle py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-gold-warm text-center mb-4">
              Today&rsquo;s Deals
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
              Unbeatable specials every weekday from 4 to 7 PM.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.15}>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {HAPPY_HOUR.offers.map((offer, i) => (
                <div
                  key={offer}
                  className="card-glass rounded-2xl p-8 md:p-10 text-center"
                >
                  <span className="text-4xl mb-4 block" role="img" aria-hidden>
                    {OFFER_ICONS[i]}
                  </span>
                  <p className="font-heading text-xl md:text-2xl text-gold-warm leading-snug">
                    {offer}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---- 4. CTA ---- */}
      <section className="gradient-jungle py-24 md:py-32 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl text-gold-warm mb-6">
              Don&rsquo;t miss out
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Grab your favorite rolls and cocktails at the best prices of the day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/order-online"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "px-8 py-3 text-base",
                })}
              >
                Order Online
              </Link>
              <Link
                href="/reservations"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "px-8 py-3 text-base",
                })}
              >
                Reservations
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
