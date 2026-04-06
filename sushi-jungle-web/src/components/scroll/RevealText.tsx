"use client";

import { useRef, useEffect } from "react";
import { gsap, GSAP_DEFAULTS } from "@/lib/gsap-config";

interface RevealTextProps {
  /** Text content to animate */
  text: string;
  /** Animation type */
  variant?: "fade-up" | "split-words" | "fade-in";
  /** Delay before animation starts */
  delay?: number;
  /** Duration of the animation */
  duration?: number;
  /** Stagger between elements (for split variants) */
  stagger?: number;
  /** Custom className */
  className?: string;
  /** HTML tag to render */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

/**
 * Text reveal animation triggered by scroll.
 * Reference: Terminal Industries uses staggered text reveals.
 * Reference: GTA VI uses SplitText for bold heading reveals.
 *
 * For split-words: renders each word as a separate <span> in JSX (no innerHTML).
 */
export default function RevealText({
  text,
  variant = "fade-up",
  delay = 0,
  duration = GSAP_DEFAULTS.durationReveal,
  stagger = GSAP_DEFAULTS.stagger,
  className = "",
  as: Tag = "div",
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;

      if (variant === "fade-up") {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: GSAP_DEFAULTS.easeReveal,
            scrollTrigger: {
              trigger: el,
              start: GSAP_DEFAULTS.triggerStart,
              toggleActions: "play none none none",
            },
          }
        );
      } else if (variant === "fade-in") {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration,
            delay,
            ease: GSAP_DEFAULTS.easeReveal,
            scrollTrigger: {
              trigger: el,
              start: GSAP_DEFAULTS.triggerStart,
              toggleActions: "play none none none",
            },
          }
        );
      } else if (variant === "split-words") {
        const spans = el.querySelectorAll<HTMLSpanElement>("[data-word]");
        gsap.fromTo(
          spans,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: duration * 0.8,
            stagger,
            delay,
            ease: GSAP_DEFAULTS.easeReveal,
            scrollTrigger: {
              trigger: el,
              start: GSAP_DEFAULTS.triggerStart,
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [variant, delay, duration, stagger]);

  // For split-words, render each word as a span in JSX (safe, no innerHTML)
  if (variant === "split-words") {
    const words = text.split(" ");
    return (
      // @ts-expect-error - dynamic tag with ref
      <Tag ref={ref} className={className}>
        {words.map((word, i) => (
          <span
            key={i}
            data-word
            className="inline-block opacity-0"
            style={{ transform: "translateY(40px)" }}
          >
            {word}
            {i < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    // @ts-expect-error - dynamic tag with ref
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
}
