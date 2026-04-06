"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Default GSAP animation settings for the Tropical Jungle theme.
 * Based on references: Jesko Jets, Terminal Industries, GTA VI.
 */
export const GSAP_DEFAULTS = {
  /** Smooth easing for reveals (Terminal Industries style) */
  easeReveal: "power2.out",
  /** Snappy easing for interactions */
  easeSnap: "power3.out",
  /** Cinematic easing for parallax (GTA VI style) */
  easeCinematic: "none",
  /** Default reveal duration */
  durationReveal: 1.2,
  /** Default stagger between elements */
  stagger: 0.15,
  /** Default scroll trigger start */
  triggerStart: "top 85%",
  /** Default scroll trigger end */
  triggerEnd: "bottom 15%",
} as const;
