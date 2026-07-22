"use client";

import InteractiveHeroVisual from "@/components/InteractiveHeroVisual";

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy reveal in">
          <div className="hero-kicker">
            <span className="hero-dot" style={{ background: "#ec4899", boxShadow: "0 0 10px #ec4899" }}></span>
            <span style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "12px", fontWeight: 600, color: "var(--ink-dim)" }}>
              UI/UX DESIGNER · AVAILABLE FOR WORK
            </span>
          </div>
          <h1 className="hero-title-fx">
            Designing
            <br />
            Experiences That
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              People Love.
            </span>
          </h1>
          <p className="sub sub-fx">
            UI/UX Designer crafting intuitive digital products and memorable
            visual experiences — from first wireframe to polished pixel.
          </p>
          <div className="hero-ctas">
            <a href="#work" className="btn btn-primary btn-shine">
              View Projects →
            </a>
            <a href="#contact" className="btn btn-ghost glass btn-shine">
              Download Resume
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-card glass">
              <div className="num">5+</div>
              <div className="lbl">Design Projects</div>
            </div>
            <div className="stat-card glass">
              <div className="num">UI/UX</div>
              <div className="lbl">Designer</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <InteractiveHeroVisual />
        </div>
      </div>
    </section>
  );
}
