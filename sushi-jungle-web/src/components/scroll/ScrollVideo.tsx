"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap-config";

interface ScrollVideoProps {
  /** Path to the video file (must be encoded with -g 1 for frame-accurate seeking) */
  src: string;
  /** Optional poster image */
  poster?: string;
  /** Scroll distance multiplier (default: 3 = 300vh) */
  scrollLength?: number;
  /** Content to overlay on the video */
  children?: React.ReactNode;
  /** Additional className */
  className?: string;
}

/**
 * Apple-style scroll-synchronized video playback.
 * Video advances/reverses frame-by-frame as user scrolls.
 * Video MUST be encoded with `-g 1` (all keyframes) for smooth seeking.
 *
 * Reference: Apple.com MacBook/iPhone reveal, GTA VI scroll video.
 */
export default function ScrollVideo({
  src,
  poster,
  scrollLength = 3,
  children,
  className = "",
}: ScrollVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let ctx: gsap.Context;

    const onReady = () => {
      video.currentTime = 0;
      video.pause();

      ctx = gsap.context(() => {
        gsap.to(video, {
          currentTime: video.duration,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${window.innerHeight * scrollLength}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, container);
    };

    if (video.readyState >= 1) {
      onReady();
    } else {
      video.addEventListener("loadedmetadata", onReady, { once: true });
    }

    return () => {
      ctx?.revert();
    };
  }, [src, scrollLength]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden bg-earth-dark ${className}`}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        poster={poster}
        className="absolute inset-0 w-full h-full object-contain"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-transparent to-background/30 pointer-events-none" />

      {/* Overlay content */}
      {children && (
        <div className="absolute inset-0 z-20 flex items-end justify-center pb-16 px-4">
          {children}
        </div>
      )}
    </div>
  );
}
