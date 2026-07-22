"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ExperienceSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="experience" ref={elementRef}>
      <div className="wrap">
        <div className={`section-head reveal ${isIntersecting ? "in" : ""}`}>
          <div className="eyebrow">Journey</div>
          <h2>Experience &amp; growth.</h2>
        </div>

        <div className={`exp-track reveal ${isIntersecting ? "in" : ""}`}>
          <div className="exp-card glass">
            <div className="exp-dot"></div>
            <div className="exp-date">2024 — Present</div>
            <h4>UI/UX Designer</h4>
            <p>
              Designing digital products, case studies, and design systems with a
              focus on user clarity and polished visual craft.
            </p>
          </div>

          <div className="exp-card glass">
            <div className="exp-dot"></div>
            <div className="exp-date">2023 — 2024</div>
            <h4>UI/UX Intern at MageComp LLP</h4>
            <p>
              Collaborated with product teams to design web and mobile
              interfaces, refine user flows, and prepare production-ready Figma
              files for handoff.
            </p>
          </div>

          <div className="exp-card glass">
            <div className="exp-dot"></div>
            <div className="exp-date">Practice</div>
            <h4>Graphic Design Practice</h4>
            <p>
              Regular exploration in Illustrator and Photoshop to strengthen
              visual composition, typography, and brand-level thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
