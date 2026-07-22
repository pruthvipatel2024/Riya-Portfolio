"use client";

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy reveal in">
          <div className="hero-kicker">
            <span className="hero-dot"></span>
            <span>UI/UX Designer · Available for work</span>
          </div>
          <h1>
            Designing
            <br />
            Experiences That
            <br />
            <em>People Love.</em>
          </h1>
          <p className="sub">
            UI/UX Designer crafting intuitive digital products and memorable
            visual experiences — from first wireframe to polished pixel.
          </p>
          <div className="hero-ctas">
            <a href="#work" className="btn btn-primary">
              View Projects →
            </a>
            <a href="#" className="btn btn-ghost glass">
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
              <div className="portrait-initials">RJ</div>
              <div className="portrait-caption">
                <div>
                  <div className="name">Riya Jethva</div>
                  <div className="role">UI/UX &amp; Visual Designer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="float-chip glass chip-1">
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "6px",
                background: "#001E36",
                border: "1.5px solid #31A8FF",
                color: "#31A8FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: "700",
                fontFamily: "var(--font-display)",
                boxShadow: "0 0 10px rgba(49, 168, 255, 0.4)",
              }}
            >
              Ps
            </div>
            Photoshop
          </div>
          <div className="float-chip glass chip-2">
            <svg
              width="16"
              height="24"
              viewBox="0 0 38 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(0px 0px 6px rgba(162, 89, 255, 0.4))" }}
            >
              <path
                d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z"
                fill="#1ABCFE"
              />
              <path
                d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
                fill="#0ACF83"
              />
              <path
                d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
                fill="#FF7262"
              />
              <path
                d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
                fill="#F24E1E"
              />
              <path
                d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
                fill="#A259FF"
              />
            </svg>
            Figma
          </div>
        </div>
      </div>
    </section>
  );
}
