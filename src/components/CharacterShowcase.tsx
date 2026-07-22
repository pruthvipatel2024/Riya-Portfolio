"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";

export default function CharacterShowcase() {
  const { elementRef, isIntersecting } = useIntersectionObserver(0.3);
  const [piecesIn, setPiecesIn] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    if (isIntersecting) {
      piecesIn.forEach((_, i) => {
        setTimeout(() => {
          setPiecesIn((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * 200);
      });
    }
  }, [isIntersecting]);

  return (
    <section id="characters" ref={elementRef}>
      <div className="wrap">
        <div
          className={`section-head reveal ${isIntersecting ? "in" : ""}`}
          style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
        >
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span></span>3D &amp; Character Design
          </div>
          <h2>Digital Illustration.</h2>
          <p style={{ marginLeft: "auto", marginRight: "auto" }}>
            Playful character artwork and 3D visual concepts designed for brand
            mascots, digital cards, and expressive user interfaces.
          </p>
        </div>

        <div className={`char-hero reveal ${isIntersecting ? "in" : ""}`}>
          <img
            src="/images/image_16.jpg"
            alt="Yoo Family character card set - DoDo, Palo, Sun and KaKa together"
          />
          <div className="char-hero-cap">
            <div className="ch-title">Yoo Family — Character Card Collection</div>
            <div className="ch-sub">3D Mascot &amp; Digital Card System</div>
          </div>
        </div>

        <div className="char-showcase" id="charShowcase">
          <div className={`char-piece ${piecesIn[0] ? "in" : ""}`}>
            <img
              src="/images/image_16.jpg"
              alt="Yoo Family character card set - DoDo, Palo, Sun and KaKa together"
            />
          </div>
          <div className={`char-piece ${piecesIn[1] ? "in" : ""}`}>
            <img
              src="/images/image_16.jpg"
              alt="Yoo Family character card set - DoDo, Palo, Sun and KaKa together"
            />
          </div>
          <div className={`char-piece ${piecesIn[2] ? "in" : ""}`}>
            <img
              src="/images/image_17.jpg"
              alt="Yoo Family character cards displayed on 3D podiums as a product mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
