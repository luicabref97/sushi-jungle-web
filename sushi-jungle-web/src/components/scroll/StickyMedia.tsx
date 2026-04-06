"use client";

import { useRef, useEffect } from "react";
import { gsap, GSAP_DEFAULTS } from "@/lib/gsap-config";
import Image from "next/image";

interface StickyMediaProps {
  /** Image source URL */
  src: string;
  /** Alt text for the image */
  alt: string;
  /** Content that scrolls over the sticky media */
  children: React.ReactNode;
  /** How much extra scroll distance (multiplier of viewport height) */
  scrollLength?: number;
  /** Scale effect: image scales from this to 1 during scroll */
  scaleFrom?: number;
  /** Opacity effect on the media */
  fadeOut?: boolean;
  /** Optional className for the container */
  className?: string;
}

/**
 * Sticky media section where an image stays pinned while content scrolls over it.
 * The image can scale and fade during scroll.
 * Reference: GTA VI uses pinned video sections with scroll-synced playback.
 * Reference: Jesko Jets uses sticky imagery with content reveals.
 */
export default function StickyMedia({
  src,
  alt,
  children,
  scrollLength = 3,
  scaleFrom = 1.15,
  fadeOut = true,
  className = "",
}: StickyMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !mediaRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollLength * 100}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Scale down from scaleFrom to 1
      tl.fromTo(
        mediaRef.current,
        { scale: scaleFrom },
        { scale: 1, ease: GSAP_DEFAULTS.easeCinematic },
        0
      );

      // Optionally fade out the media at the end
      if (fadeOut) {
        tl.to(
          mediaRef.current,
          { opacity: 0.3, ease: GSAP_DEFAULTS.easeCinematic },
          0.7
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [scrollLength, scaleFrom, fadeOut]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden ${className}`}
    >
      {/* Sticky media background */}
      <div
        ref={mediaRef}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Scrollable content over the media */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
