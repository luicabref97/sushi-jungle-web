"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, registerGSAP } from "@/lib/gsap-config";

/** Context so child components can access Lenis + ready state */
interface ScrollContextValue {
  lenis: Lenis | null;
  isReady: boolean;
}

const ScrollContext = createContext<ScrollContextValue>({
  lenis: null,
  isReady: false,
});

export function useScrollContext() {
  return useContext(ScrollContext);
}

/**
 * Global smooth scroll provider using Lenis + GSAP ScrollTrigger.
 * - Registers GSAP plugins on mount
 * - Creates Lenis instance for buttery smooth scroll
 * - Syncs Lenis with GSAP ScrollTrigger
 * - Provides context so children know when scroll system is ready
 *
 * Reference: Terminal Industries uses Lenis for smooth scroll.
 */
export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Step 1: Register GSAP plugins
    registerGSAP();

    // Step 2: Create Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Step 3: Sync Lenis scroll events → ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Step 4: Drive Lenis RAF from GSAP ticker
    // GSAP ticker gives time in SECONDS — Lenis.raf() expects MILLISECONDS
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Step 5: Signal ready — children can now animate
    setIsReady(true);

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      lenisRef.current = null;
      setIsReady(false);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ lenis: lenisRef.current, isReady }}>
      {children}
    </ScrollContext.Provider>
  );
}
