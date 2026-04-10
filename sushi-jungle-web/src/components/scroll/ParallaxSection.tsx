"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";

interface ParallaxLayer {
  children: React.ReactNode;
  /** Speed: 0 = fixed, 0.5 = half scroll speed, 1 = normal, 1.5 = faster */
  speed: number;
  className?: string;
}

interface ParallaxSectionProps {
  layers: ParallaxLayer[];
  height?: string;
  className?: string;
  overlay?: boolean;
}

/**
 * Multi-layer parallax section with dramatic depth.
 * FIX: Movement now scales with viewport height for visible parallax effect.
 * Reference: Jesko Jets hero with multiple depth planes.
 */
export default function ParallaxSection({
  layers,
  height = "100vh",
  className = "",
  overlay = false,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      layerRefs.current.forEach((layer, i) => {
        if (!layer || !layers[i]) return;
        const speed = layers[i].speed;

        // Movement = viewport-relative for dramatic effect
        // speed 0.3 → moves -70vh (slow, background feel)
        // speed 0.6 → moves -40vh
        // speed 1.0 → moves 0 (normal)
        // speed 1.5 → moves +50vh (foreground rush)
        const yPercent = (speed - 1) * 100;

        gsap.fromTo(
          layer,
          { yPercent: -yPercent * 0.5 },
          {
            yPercent: yPercent * 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [layers]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {layers.map((layer, i) => (
        <div
          key={i}
          ref={(el) => { layerRefs.current[i] = el; }}
          className={`absolute inset-0 will-change-transform ${layer.className ?? ""}`}
        >
          {layer.children}
        </div>
      ))}
      {overlay && (
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-background/70 via-background/30 to-background/80 pointer-events-none" />
      )}
    </div>
  );
}
