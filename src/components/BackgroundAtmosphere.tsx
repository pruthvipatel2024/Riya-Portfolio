"use client";

import { useEffect, useRef } from "react";

export default function BackgroundAtmosphere() {
  const glowRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const handleScroll = () => {
      const y = window.scrollY;
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translateY(${y * 0.05}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translateY(${y * 0.07}px)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translateY(${y * 0.09}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="aurora">
        <div ref={orb1Ref} className="orb orb-1"></div>
        <div ref={orb2Ref} className="orb orb-2"></div>
        <div ref={orb3Ref} className="orb orb-3"></div>
      </div>
      <div ref={glowRef} className="cursor-glow" id="cursorGlow"></div>
      <div className="noise"></div>
      <div className="grain-vignette"></div>
    </>
  );
}
