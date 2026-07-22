"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function FeaturedWork() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="work" ref={elementRef}>
      <div className="wrap">
        <div className={`section-head reveal ${isIntersecting ? "in" : ""}`}>
          <div className="eyebrow">Featured Work</div>
          <h2>Case studies, not just screens.</h2>
          <p>
            Two products, two different problems — each solved with
            research-backed structure and a distinct visual voice.
          </p>
        </div>

        <div className="projects-list">
          {/* Project 1: Online Appointment Booking System */}

          {/* Project 2: StyleMyHome */}
          <div className={`project-card glass reveal ${isIntersecting ? "in" : ""}`}>
            <div
              className="project-visual"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(79,140,255,.24), transparent 60%), radial-gradient(circle at 80% 80%, rgba(236,111,187,.2), transparent 55%)",
              }}
            >
              <div className="browser-frame">
                <div className="browser-bar">
                  <span
                    className="browser-dot"
                    style={{ background: "#ff5f57" }}
                  ></span>
                  <span
                    className="browser-dot"
                    style={{ background: "#febc2e" }}
                  ></span>
                  <span
                    className="browser-dot"
                    style={{ background: "#28c840" }}
                  ></span>
                  <div className="browser-url">stylemyhome.com</div>
                </div>
                <div className="browser-scroll" data-scroll>
                  <img
                    src="/images/image_v5_1.jpg"
                    alt="Style My Home decor e-commerce website - full page design"
                  />
                </div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-cat">
                E-Commerce &amp; Interior — Web App
              </div>
              <h3>StyleMyHome</h3>
              <p>
                A modern e-commerce and interior styling platform showcasing
                home decor, furniture, and curated room concepts for seamless
                online shopping.
              </p>
              <div className="project-results">
                <div className="result-item">
                  <div className="r-num">Full-page</div>
                  <div className="r-lbl">Interactive Mockup</div>
                </div>
                <div className="result-item">
                  <div className="r-num">100%</div>
                  <div className="r-lbl">Pixel Perfect</div>
                </div>
                <div className="result-item">
                  <div className="r-num">UI/UX</div>
                  <div className="r-lbl">Design System</div>
                </div>
              </div>
              <a href="#" className="project-cta">
                View Case Study <span>→</span>
              </a>
            </div>
          </div>

          {/* Project 3: Vastras */}
          <div className={`project-card glass reveal ${isIntersecting ? "in" : ""}`}>
            <div
              className="project-visual"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(139,92,246,.28), transparent 60%), radial-gradient(circle at 80% 80%, rgba(236,111,187,.22), transparent 55%)",
              }}
            >
              <div className="browser-frame">
                <div className="browser-bar">
                  <span
                    className="browser-dot"
                    style={{ background: "#ff5f57" }}
                  ></span>
                  <span
                    className="browser-dot"
                    style={{ background: "#febc2e" }}
                  ></span>
                  <span
                    className="browser-dot"
                    style={{ background: "#28c840" }}
                  ></span>
                  <div className="browser-url">vastras.com</div>
                </div>
                <div className="browser-scroll" data-scroll>
                  <img
                    src="/images/image_v5_2.jpg"
                    alt="Vastras ethnic fashion e-commerce website - full page design"
                  />
                </div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-cat">
                Fashion &amp; E-Commerce — Web App
              </div>
              <h3>Vastras</h3>
              <p>
                An elegant ethnic fashion e-commerce store designed to highlight
                traditional craftsmanship, rich textures, and seamless product
                discovery.
              </p>
              <div className="project-results">
                <div className="result-item">
                  <div className="r-num">Full-page</div>
                  <div className="r-lbl">Interactive Design</div>
                </div>
                <div className="result-item">
                  <div className="r-num">100%</div>
                  <div className="r-lbl">Responsive UI</div>
                </div>
                <div className="result-item">
                  <div className="r-num">Ethnic</div>
                  <div className="r-lbl">Brand Identity</div>
                </div>
              </div>
              <a href="#" className="project-cta">
                View Case Study <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
