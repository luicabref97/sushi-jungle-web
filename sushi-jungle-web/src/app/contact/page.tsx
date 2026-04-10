"use client";

import Link from "next/link";
import { ScrollReveal, RevealText } from "@/components/scroll";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT, HOURS, SOCIAL, HAPPY_HOUR } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Icons (inline SVG to avoid extra deps)                             */
/* ------------------------------------------------------------------ */

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Social links data                                                  */
/* ------------------------------------------------------------------ */

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    url: SOCIAL.instagram.url,
    handle: SOCIAL.instagram.handle,
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    url: SOCIAL.tiktok.url,
    handle: SOCIAL.tiktok.handle,
    Icon: TikTokIcon,
  },
  {
    label: "Facebook",
    url: SOCIAL.facebook.url,
    handle: SOCIAL.facebook.name,
    Icon: FacebookIcon,
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* ---- 1. Hero ---- */}
      <section className="gradient-jungle py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealText
            text="Contact Us"
            variant="split-words"
            as="h1"
            className="font-heading text-5xl md:text-7xl text-gold-warm leading-tight"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl mt-6">
              We&apos;d love to hear from you
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---- 2. Two-column: Contact Info + Hours ---- */}
      <section className="gradient-earth py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left column — Contact Info */}
            <ScrollReveal direction="up" delay={0}>
              <div className="card-glass rounded-2xl p-8 md:p-10 h-full">
                <h2 className="font-heading text-2xl md:text-3xl text-gold-warm mb-2">
                  Get in Touch
                </h2>
                <Separator className="mb-8 w-20 bg-gold-warm/40" />

                <div className="space-y-6">
                  {/* Address */}
                  <a
                    href={CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <MapPinIcon className="size-5 text-gold-warm shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                        Address
                      </p>
                      <p className="text-foreground/90 group-hover:text-gold-warm transition-colors">
                        {CONTACT.address}
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-start gap-4 group"
                  >
                    <PhoneIcon className="size-5 text-gold-warm shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                        Phone
                      </p>
                      <p className="text-foreground/90 group-hover:text-gold-warm transition-colors">
                        {CONTACT.phone}
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <MailIcon className="size-5 text-gold-warm shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                        Email
                      </p>
                      <p className="text-foreground/90 group-hover:text-gold-warm transition-colors">
                        {CONTACT.email}
                      </p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <Separator className="my-8 bg-border/50" />
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map(({ label, url, Icon }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center justify-center size-10 rounded-full border border-border bg-background/50 hover:bg-gold-warm/10 hover:border-gold-warm/40 transition-colors"
                    >
                      <Icon className="size-5 text-foreground/70 hover:text-gold-warm" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right column — Hours */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="card-glass rounded-2xl p-8 md:p-10 h-full">
                <h2 className="font-heading text-2xl md:text-3xl text-gold-warm mb-2">
                  Hours
                </h2>
                <Separator className="mb-8 w-20 bg-gold-warm/40" />

                <div className="space-y-4">
                  {HOURS.map((entry) => (
                    <div
                      key={entry.day}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-foreground/90">{entry.day}</span>
                      <span className="text-muted-foreground font-data text-sm tabular-nums">
                        {entry.hours}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Happy Hour highlight */}
                <Separator className="my-8 bg-border/50" />
                <div className="rounded-xl bg-gold-warm/10 border border-gold-warm/30 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <ClockIcon className="size-5 text-gold-warm" />
                    <p className="font-heading text-lg text-gold-warm">
                      Happy Hour
                    </p>
                  </div>
                  <p className="text-foreground/90 text-sm">
                    {HAPPY_HOUR.days} &middot; {HAPPY_HOUR.time}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {HAPPY_HOUR.offers.map((offer) => (
                      <li
                        key={offer}
                        className="text-sm text-muted-foreground pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-gold-warm/60"
                      >
                        {offer}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---- 3. Map Placeholder ---- */}
      <section className="gradient-jungle py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-gold-warm text-center mb-4">
              Find Us
            </h2>
            <Separator className="mx-auto mb-12 w-24 bg-gold-warm/40" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="card-glass rounded-2xl overflow-hidden">
              <div className="aspect-[16/7] w-full">
                <iframe
                  title="Sushi Jungle location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.6!2d-80.3575!3d25.7929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSushi+Jungle!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <a
                  href={CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-warm hover:text-gold-warm/80 transition-colors font-medium"
                >
                  <MapPinIcon className="size-4" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---- 4. CTA ---- */}
      <section className="gradient-earth py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl text-gold-warm mb-6">
              Ready to visit?
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
