"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";

export default function PosterShowcase() {
  const { elementRef, isIntersecting } = useIntersectionObserver(0.2);
  const pumaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pumaCard = pumaRef.current;
    if (!pumaCard) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = pumaCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pumaCard.style.setProperty("--sx", `${x}px`);
      pumaCard.style.setProperty("--sy", `${y}px`);
    };

    pumaCard.addEventListener("mousemove", handleMouseMove);
    return () => pumaCard.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="posters" ref={elementRef}>
      <div className="wrap">
        <div className={`section-head reveal ${isIntersecting ? "in" : ""}`}>
          <div className="eyebrow">Poster &amp; Ad Design</div>
          <h2>Campaign concepts, in context.</h2>
          <p>
            Three ad concepts placed the way they&apos;d actually be seen — a magazine cover,
            a bus-stop poster, and a city billboard — each with its own hover moment.
          </p>
        </div>

        <div className="poster-grid">
          <div className={`poster-card poster-shine reveal ${isIntersecting ? "in" : ""}`}>
            <img
              src="/images/image_v5_22.jpg"
              alt="Vogue Greece cover concept editorial magazine design"
            />
            <div className="poster-label">
              <div className="pl-title">Vogue Greece — Cover Concept</div>
              <div className="pl-sub">Editorial magazine cover design</div>
            </div>
          </div>

          <div className={`poster-card poster-kenburns reveal ${isIntersecting ? "in" : ""}`}>
            <img
              src="/images/image_v5_23.jpg"
              alt="Zara street campaign bus stop ad mockup"
            />
            <div className="poster-label">
              <div className="pl-title">Zara — Street Campaign</div>
              <div className="pl-sub">Bus-stop ad mockup</div>
            </div>
          </div>

          <div
            ref={pumaRef}
            className={`poster-card poster-wide poster-spotlight reveal ${isIntersecting ? "in" : ""}`}
          >
            <img
              src="/images/image_v5_24.jpg"
              alt="Puma billboard campaign mockup"
            />
            <div className="poster-label">
              <div className="pl-title">Puma — Billboard Campaign</div>
              <div className="pl-sub">Outdoor billboard mockup</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
