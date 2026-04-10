"use client";

import { useRef, useEffect } from "react";
import { gsap, GSAP_DEFAULTS } from "@/lib/gsap-config";

interface RevealTextProps {
  text: string;
  variant?: "fade-up" | "split-words" | "fade-in";
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

/**
 * Text reveal animation triggered by scroll.
 * FIX: Proper initial states, complete deps, CSS fallback.
 * Reference: Terminal Industries staggered reveals, GTA VI SplitText.
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

    const el = ref.current;

    const ctx = gsap.context(() => {
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
        if (spans.length === 0) return;

        gsap.fromTo(
          spans,
          { y: 50, opacity: 0, rotateX: -15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: duration * 0.8,
            stagger,
            delay,
            ease: "power3.out",
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
  }, [variant, delay, duration, stagger, text]);

  if (variant === "split-words") {
    const words = text.split(" ");
    return (
      <Tag ref={ref as React.Ref<never>} className={`perspective-[1000px] ${className}`}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            data-word
            className="inline-block will-change-transform"
            style={{ opacity: 0, transform: "translateY(50px) rotateX(-15deg)" }}
          >
            {word}
            {i < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={className}
      style={{ opacity: 0, transform: variant === "fade-up" ? "translateY(60px)" : undefined }}
    >
      {text}
    </Tag>
  );
}
