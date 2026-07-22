"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function TestimonialsSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="testimonials" ref={elementRef}>
      <div className="wrap">
        <div className={`section-head reveal ${isIntersecting ? "in" : ""}`}>
          <div className="eyebrow">Testimonials</div>
          <h2>What collaborators say.</h2>
        </div>

        <div className="testi-grid">
          <div className={`testi-card glass reveal ${isIntersecting ? "in" : ""}`}>
            <div className="testi-avatar">AK</div>
            <p className="quote">
              "Riya has a rare instinct for turning a vague brief into a clear,
              structured flow. Every screen felt intentional."
            </p>
            <div className="testi-name">Aakash K.</div>
            <div className="testi-role">Project Lead, MageComp LLP</div>
          </div>
          <div className={`testi-card glass reveal ${isIntersecting ? "in" : ""}`}>
            <div className="testi-avatar">SP</div>
            <p className="quote">
              "What stood out was the attention to detail — spacing, states,
              micro-interactions — nothing felt like an afterthought."
            </p>
            <div className="testi-name">Sanya P.</div>
            <div className="testi-role">Product Collaborator</div>
          </div>
          <div className={`testi-card glass reveal ${isIntersecting ? "in" : ""}`}>
            <div className="testi-avatar">MV</div>
            <p className="quote">
              "Great communicator and even better designer. She asks the right
              questions before ever opening Figma."
            </p>
            <div className="testi-name">Mihir V.</div>
            <div className="testi-role">Peer Reviewer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
