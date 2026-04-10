"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Ensure GSAP plugins are registered exactly once on the client.
 * Called by LenisProvider at app startup — components don't need to call this.
 */
let isRegistered = false;

export function registerGSAP() {
  if (typeof window === "undefined" || isRegistered) return;
  gsap.registerPlugin(ScrollTrigger);
  isRegistered = true;
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
  durationReveal: 1,
  /** Default stagger between elements */
  stagger: 0.12,
  /** Default scroll trigger start */
  triggerStart: "top 80%",
  /** Default scroll trigger end */
  triggerEnd: "bottom 20%",
} as const;
