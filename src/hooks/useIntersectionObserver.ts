"use client";

import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(threshold = 0.15) {
  const elementRef = useRef<HTMLDivElement | HTMLTableSectionElement | any>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [threshold]);

  return { elementRef, isIntersecting };
}
