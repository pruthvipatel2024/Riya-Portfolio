"use client";

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
          <div className="portrait-card">
            <div className="portrait-inner">
              <img
                src="/images/riya_hero.jpg"
                alt="Riya Jethva — UI/UX & Visual Designer"
                className="portrait-img"
              />
              <div className="portrait-overlay-gradient"></div>
              <div className="portrait-caption">
                <div>
                  <div className="name">Riya Jethva</div>
                  <div className="role">UI/UX &amp; Visual Designer</div>
                </div>
              </div>
            </div>

            {/* Photoshop floating badge top-right */}
            <div className="floating-badge badge-top-right">
              <div className="ps-icon">Ps</div>
              <span>Photoshop</span>
            </div>

            {/* Illustrator floating badge middle-left */}
            <div className="floating-badge badge-middle-left">
              <div className="ai-icon">Ai</div>
              <span>Illustrator</span>
            </div>

            {/* Figma floating badge bottom-left */}
            <div className="floating-badge badge-bottom-left">
              <svg className="figma-icon" width="18" height="18" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 42.2533 4.2533 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.2533 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.2533 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                <path d="M0 9.5C0 14.7467 4.2533 19 9.5 19H19V0H9.5C4.2533 0 0 4.2533 0 9.5Z" fill="#F24E1E"/>
                <path d="M0 28.5C0 33.7467 4.2533 38 9.5 38H19V19H9.5C4.2533 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
              </svg>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
