"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
}

/**
 * Horizontal scroll section: content moves left as user scrolls down.
 * FIX: Recalculates on resize, measures after paint.
 * Reference: Apple product pages horizontal showcase.
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

    // Wait a frame so children have rendered and dimensions are accurate
    const rafId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        const track = trackRef.current!;
        const totalWidth = track.scrollWidth - window.innerWidth;

        if (totalWidth <= 0) return;

        gsap.to(track, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${totalWidth}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, containerRef);

      // Store for cleanup
      (containerRef.current as any).__gsapCtx = ctx;
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      (containerRef.current as any)?.__gsapCtx?.revert();
    };
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
