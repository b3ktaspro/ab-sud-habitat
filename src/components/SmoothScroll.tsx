import { useEffect } from "react";
import Lenis from "lenis";

export let lenisInstance: Lenis | null = null;

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      lerp: 0.12,
      infinite: false,
    });

    lenisInstance = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Synchronise Lenis après un retour navigateur
    function handlePopState() {
      requestAnimationFrame(() => {
        lenis.scrollTo(window.scrollY, {
          immediate: true,
        });
      });
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      cancelAnimationFrame(rafId);

      window.removeEventListener("popstate", handlePopState);

      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}
