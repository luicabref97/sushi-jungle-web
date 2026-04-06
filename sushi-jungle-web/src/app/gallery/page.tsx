"use client";

import Image from "next/image";
import { ScrollReveal, RevealText } from "@/components/scroll";
import { IMAGES, SOCIAL } from "@/lib/constants";

const galleryItems = [
  {
    src: IMAGES.interior,
    alt: "Sushi Jungle restaurant interior with jungle-inspired decor",
    className: "row-span-2", // tall
  },
  {
    src: IMAGES.rollPlatter,
    alt: "Beautifully arranged sushi roll platter",
    className: "", // wide
  },
  {
    src: IMAGES.cocktails,
    alt: "Signature cocktails with tropical garnishes",
    className: "", // square
  },
  {
    src: IMAGES.neonSign,
    alt: "Feed Me Sushi neon sign glowing in the dark",
    className: "row-span-2", // tall
  },
  {
    src: IMAGES.logo,
    alt: "Sushi Jungle illuminated logo",
    className: "", // square
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="py-28 px-4 text-center">
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

      {/* ── Photo Grid ── */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal staggerChildren={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
              {galleryItems.map((item) => (
                <div
                  key={item.alt}
                  className={`
                    group relative rounded-xl overflow-hidden
                    card-glass border
                    transition-all duration-500 ease-out
                    hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]
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
                  {/* Hover gold glow overlay */}
                  <div className="absolute inset-0 bg-gold-warm/0 group-hover:bg-gold-warm/5 transition-colors duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Instagram CTA ── */}
      <section className="pb-28 px-4">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground text-lg mb-4">
              Follow us{" "}
              <a
                href={SOCIAL.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-warm hover:text-gold-warm/80 font-semibold transition-colors duration-300 underline underline-offset-4"
              >
                @sushijungle
              </a>{" "}
              for more
            </p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
