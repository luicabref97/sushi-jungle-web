"use client";

import Image from "next/image";
import { ScrollReveal, RevealText } from "@/components/scroll";
import { IMAGES, GALLERY_IMAGES, SOCIAL } from "@/lib/constants";

const galleryItems = [
  // Row 1 — mix of real photos
  {
    src: IMAGES.interior,
    alt: "Sushi Jungle restaurant interior with jungle-inspired decor",
    className: "row-span-2", // tall
  },
  {
    src: GALLERY_IMAGES[1].src,
    alt: GALLERY_IMAGES[1].alt,
    className: "",
  },
  {
    src: GALLERY_IMAGES[3].src,
    alt: GALLERY_IMAGES[3].alt,
    className: "",
  },
  // Row 2
  {
    src: IMAGES.neonSign,
    alt: "Feed Me Sushi neon sign glowing in the dark",
    className: "row-span-2", // tall
  },
  {
    src: GALLERY_IMAGES[4].src,
    alt: GALLERY_IMAGES[4].alt,
    className: "",
  },
  {
    src: IMAGES.rollPlatter,
    alt: "Beautifully arranged sushi roll platter",
    className: "",
  },
  // Row 3
  {
    src: GALLERY_IMAGES[5].src,
    alt: GALLERY_IMAGES[5].alt,
    className: "row-span-2", // tall
  },
  {
    src: IMAGES.cocktails,
    alt: "Signature cocktails with tropical garnishes",
    className: "",
  },
  {
    src: GALLERY_IMAGES[6].src,
    alt: GALLERY_IMAGES[6].alt,
    className: "",
  },
  // Row 4
  {
    src: GALLERY_IMAGES[7].src,
    alt: GALLERY_IMAGES[7].alt,
    className: "",
  },
  {
    src: GALLERY_IMAGES[8].src,
    alt: GALLERY_IMAGES[8].alt,
    className: "",
  },
  {
    src: GALLERY_IMAGES[9].src,
    alt: GALLERY_IMAGES[9].alt,
    className: "",
  },
  // Hero photo from UberEats
  {
    src: IMAGES.heroUberEats,
    alt: "Sushi Jungle restaurant — Japanese-Peruvian fusion experience",
    className: "col-span-2 sm:col-span-1 lg:col-span-2",
  },
  {
    src: IMAGES.logo,
    alt: "Sushi Jungle illuminated logo",
    className: "",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-28 px-4 text-center gradient-jungle">
        <div className="max-w-4xl mx-auto">
          <RevealText
            text="Gallery"
            variant="split-words"
            as="h1"
            className="font-heading text-6xl md:text-7xl text-gold-warm mb-6"
          />
          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              A visual journey through the Jungle
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal staggerChildren={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[260px]">
              {galleryItems.map((item, i) => (
                <div
                  key={i}
                  className={`
                    group relative rounded-xl overflow-hidden
                    card-glass border
                    transition-all duration-500 ease-out
                    hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
                    hover:scale-[1.02]
                    ${item.className}
                  `}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay with caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-sm text-cream font-medium">{item.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 px-4 gradient-earth">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="font-heading text-3xl text-gold-warm">
              See more on Instagram
            </p>
            <p className="text-muted-foreground text-lg">
              Follow{" "}
              <a
                href={SOCIAL.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-warm hover:text-gold font-semibold transition-colors underline underline-offset-4"
              >
                @sushijungle
              </a>{" "}
              for daily updates, behind-the-scenes, and more
            </p>
            <p className="font-data text-2xl text-gold">
              {SOCIAL.instagram.followers} followers
            </p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
