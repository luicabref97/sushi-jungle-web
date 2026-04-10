"use client";

import { useRef, useEffect } from "react";
import { gsap, GSAP_DEFAULTS } from "@/lib/gsap-config";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

/**
 * Scroll-triggered reveal wrapper with stagger support.
 * FIX: Complete dependency array, proper initial hidden state via CSS.
 * Reference: Terminal Industries reveal-Y with stagger.
 */
export default function ScrollReveal({
  children,
  direction = "up",
  distance = 80,
  duration = GSAP_DEFAULTS.durationReveal,
  delay = 0,
  staggerChildren,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const targets = staggerChildren ? Array.from(el.children) : [el];

    // Set initial hidden state
    gsap.set(targets, {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    });

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: GSAP_DEFAULTS.easeReveal,
        stagger: staggerChildren,
        scrollTrigger: {
          trigger: el,
          start: GSAP_DEFAULTS.triggerStart,
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [direction, distance, duration, delay, staggerChildren]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
