"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function CharacterShowcase() {
  const { elementRef, isIntersecting } = useIntersectionObserver(0.2);

  return (
    <section id="characters" ref={elementRef}>
      <div className="wrap">
        <div className={`section-head reveal ${isIntersecting ? "in" : ""}`}>
          <div className="eyebrow">Character &amp; Game UI Design</div>
          <h2>Yoo Family — Collectible Character Cards</h2>
          <p>
            A set of soft, 3D-style mascot cards for a collectible game concept —
            each character gets its own color mood, a rounded glass-morphic card, and
            a consistent &quot;Yoo Family&quot; badge that ties the whole set together.
          </p>
        </div>

        <div className="char-showcase" id="charShowcase">
          <div className={`char-piece reveal ${isIntersecting ? "in" : ""}`}>
            <img
              src="/images/image_v5_21.jpg"
              alt="Yoo Family Collectible Character Cards"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
