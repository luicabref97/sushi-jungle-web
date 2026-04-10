"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap-config";

interface ImageSequenceProps {
  /** Array of image URLs in order */
  frames: string[];
  /** Alt text for the sequence */
  alt: string;
  /** Content to overlay on top of the sequence */
  children?: React.ReactNode;
  /** Extra scroll distance multiplier (default: 3 = 300vh) */
  scrollLength?: number;
  /** Optional className */
  className?: string;
}

/**
 * Scroll-driven image sequence: frames change as user scrolls.
 * Like Apple's product reveal but for sushi rolling.
 * Uses GSAP ScrollTrigger with pin + scrub.
 */
export default function ImageSequence({
  frames,
  alt,
  children,
  scrollLength = 3,
  className = "",
}: ImageSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    if (!containerRef.current || frames.length === 0) return;

    const ctx = gsap.context(() => {
      // Animate a proxy object from 0 to frames.length-1
      const obj = { frame: 0 };

      gsap.to(obj, {
        frame: frames.length - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * scrollLength}`,
          scrub: 0.3,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        onUpdate: () => {
          setCurrentFrame(Math.round(obj.frame));
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [frames.length, scrollLength]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden ${className}`}
    >
      {/* Preload all frames */}
      {frames.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-150"
          style={{
            opacity: i === currentFrame ? 1 : 0,
            zIndex: i === currentFrame ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt={`${alt} - step ${i + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority={i <= 1}
          />
        </div>
      ))}

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/90 via-transparent to-background/40 pointer-events-none" />

      {/* Optional overlay content */}
      {children && (
        <div className="absolute inset-0 z-20 flex items-end justify-center pb-16 px-4">
          {children}
        </div>
      )}
    </div>
  );
}
