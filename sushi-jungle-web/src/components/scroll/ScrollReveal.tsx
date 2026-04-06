"use client";

import { useRef, useEffect } from "react";
import { gsap, GSAP_DEFAULTS } from "@/lib/gsap-config";

interface ScrollRevealProps {
  children: React.ReactNode;
  /** Direction of the reveal animation */
  direction?: "up" | "down" | "left" | "right";
  /** Distance in pixels */
  distance?: number;
  /** Animation duration */
  duration?: number;
  /** Delay before animation */
  delay?: number;
  /** Stagger children elements */
  staggerChildren?: number;
  /** Custom className */
  className?: string;
}

/**
 * Generic scroll-triggered reveal wrapper.
 * Wraps any content and reveals it when it enters the viewport.
 * Reference: Terminal Industries reveal-Y animations with stagger.
 */
export default function ScrollReveal({
  children,
  direction = "up",
  distance = 60,
  duration = GSAP_DEFAULTS.durationReveal,
  delay = 0,
  staggerChildren,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;
      const targets = staggerChildren
        ? el.children
        : el;

      const fromVars: gsap.TweenVars = { opacity: 0 };
      if (direction === "up") fromVars.y = distance;
      if (direction === "down") fromVars.y = -distance;
      if (direction === "left") fromVars.x = distance;
      if (direction === "right") fromVars.x = -distance;

      const toVars: gsap.TweenVars = {
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
      };

      gsap.fromTo(targets, fromVars, toVars);
    }, ref);

    return () => ctx.revert();
  }, [direction, distance, duration, delay, staggerChildren]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
