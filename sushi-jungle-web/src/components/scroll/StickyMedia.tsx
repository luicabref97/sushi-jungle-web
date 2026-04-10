"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap-config";
import Image from "next/image";

interface StickyMediaProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  /** Extra scroll distance multiplier (default: 2 = 200vh of scroll) */
  scrollLength?: number;
  /** Image scales from this value to 1 (default: 1.2) */
  scaleFrom?: number;
  /** Fade the image at the end of scroll */
  fadeOut?: boolean;
  className?: string;
}

/**
 * Sticky section: image stays pinned and scales/fades while content overlays.
 * FIX: Proper pin + timeline + scroll distance.
 * Reference: GTA VI pinned video sections.
 */
export default function StickyMedia({
  src,
  alt,
  children,
  scrollLength = 2,
  scaleFrom = 1.2,
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
          end: () => `+=${window.innerHeight * scrollLength}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Scale from scaleFrom → 1
      tl.fromTo(
        mediaRef.current,
        { scale: scaleFrom },
        { scale: 1, ease: "none", duration: 1 },
        0
      );

      // Fade out at the end
      if (fadeOut) {
        tl.to(
          mediaRef.current,
          { opacity: 0.2, ease: "none", duration: 0.4 },
          0.6
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
      {/* Pinned media */}
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content over pinned media */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
