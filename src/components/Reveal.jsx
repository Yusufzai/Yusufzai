"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps children in the same scroll-triggered fade/slide-up animation used
 * across the original static site. `delay` (1-6) maps to the
 * `.reveal-delay-N` classes defined in globals.css.
 */
export default function Reveal({ children, delay, className = "", as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
