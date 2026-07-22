"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { MouseEvent } from "react";

export default function SkillsSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver(0.4);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = (y / r.height - 0.5) * -10;
    const ry = (x / r.width - 0.5) * 10;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    card.style.setProperty("--mx", x + "px");
    card.style.setProperty("--my", y + "px");
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <section id="skills" ref={elementRef}>
      <div className="wrap">
        <div className={`section-head reveal ${isIntersecting ? "in" : ""}`}>
          <div className="eyebrow">Toolkit</div>
          <h2>Tools I design with.</h2>
          <p>
            A focused set of tools I use daily to move from idea to interface —
            and interface to visual polish.
          </p>
        </div>

        <div className="skills-grid">
          <div
            className={`skill-card glass reveal ${isIntersecting ? "in" : ""}`}
            data-level="95"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="skill-icon"
              style={{
                background: "linear-gradient(150deg,#8b5cf6,#4f8cff)",
                color: "#fff",
              }}
            >
              Fi
            </div>
            <h3>Figma</h3>
            <p className="skill-desc">
              Wireframing, prototyping, design systems, and dev handoff — my
              primary design workspace.
            </p>
            <div className="skill-level">
              <span>Proficiency</span>
              <span>95%</span>
            </div>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  background: "linear-gradient(90deg,#8b5cf6,#4f8cff)",
                  width: isIntersecting ? "95%" : "0%",
                }}
              ></div>
            </div>
          </div>

          <div
            className={`skill-card glass reveal ${isIntersecting ? "in" : ""}`}
            data-level="80"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="skill-icon"
              style={{
                background: "linear-gradient(150deg,#ec6fbb,#8b5cf6)",
                color: "#fff",
              }}
            >
              Ai
            </div>
            <h3>Adobe Illustrator</h3>
            <p className="skill-desc">
              Vector illustration, icon sets, and brand marks built for
              scalable, crisp visual identity.
            </p>
            <div className="skill-level">
              <span>Proficiency</span>
              <span>80%</span>
            </div>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  background: "linear-gradient(90deg,#ec6fbb,#8b5cf6)",
                  width: isIntersecting ? "80%" : "0%",
                }}
              ></div>
            </div>
          </div>

          <div
            className={`skill-card glass reveal ${isIntersecting ? "in" : ""}`}
            data-level="85"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="skill-icon"
              style={{
                background: "linear-gradient(150deg,#4f8cff,#ec6fbb)",
                color: "#fff",
              }}
            >
              Ps
            </div>
            <h3>Adobe Photoshop</h3>
            <p className="skill-desc">
              Photo compositing, mockup styling, and pixel-level retouching for
              presentation-ready visuals.
            </p>
            <div className="skill-level">
              <span>Proficiency</span>
              <span>85%</span>
            </div>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  background: "linear-gradient(90deg,#4f8cff,#ec6fbb)",
                  width: isIntersecting ? "85%" : "0%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
