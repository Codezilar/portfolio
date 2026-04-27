"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      root.style.setProperty("--pointer-x", `${x}%`);
      root.style.setProperty("--pointer-y", `${y}%`);
    };

    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    reveals.forEach((element) => observer.observe(element));
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      reveals.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return null;
}
