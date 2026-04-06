"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap-config";

interface HorizontalScrollProps {
  children: React.ReactNode;
  /** Optional className for the outer container */
  className?: string;
  /** Optional className for the inner scrolling track */
  trackClassName?: string;
}

/**
 * Horizontal scroll section within vertical page scroll.
 * Content moves horizontally as the user scrolls vertically.
 * Reference: Apple product pages use this for feature showcases.
 */
export default function HorizontalScroll({
  children,
  className = "",
  trackClassName = "",
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const totalWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className={`flex gap-8 will-change-transform ${trackClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
