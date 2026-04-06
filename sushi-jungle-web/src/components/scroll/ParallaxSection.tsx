"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger, GSAP_DEFAULTS } from "@/lib/gsap-config";

interface ParallaxLayer {
  /** Content or image for this layer */
  children: React.ReactNode;
  /** Speed multiplier: 0 = fixed, 0.5 = half speed, 1 = normal, 2 = double */
  speed: number;
  /** Optional additional className */
  className?: string;
}

interface ParallaxSectionProps {
  /** Array of layers with different parallax speeds */
  layers: ParallaxLayer[];
  /** Section height (default: 100vh) */
  height?: string;
  /** Optional className for the container */
  className?: string;
  /** Optional overlay gradient */
  overlay?: boolean;
}

/**
 * Multi-layer parallax section.
 * Each layer moves at a different speed during scroll.
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
        if (!layer) return;
        const speed = layers[i].speed;
        const movement = (speed - 1) * 100;

        gsap.to(layer, {
          y: movement,
          ease: GSAP_DEFAULTS.easeCinematic,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
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
          className={`absolute inset-0 ${layer.className ?? ""}`}
        >
          {layer.children}
        </div>
      ))}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background pointer-events-none" />
      )}
    </div>
  );
}
