import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in, .stagger");
    if (faders.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    faders.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
