"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";

export default function FeaturedWork() {
  const { elementRef, isIntersecting } = useIntersectionObserver();
  const browserContainerRef = useRef<HTMLDivElement>(null);
  const browserImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = browserContainerRef.current;
    const img = browserImgRef.current;
    if (!container || !img) return;

    const compute = () => {
      if (!img.naturalWidth) return;
      const scale = container.clientWidth / img.naturalWidth;
      const scaledHeight = img.naturalHeight * scale;
      const distance = Math.min(0, container.clientHeight - scaledHeight);
      img.style.setProperty("--scroll-dist", `${distance}px`);
    };

    if (img.complete) {
      compute();
    } else {
      img.addEventListener("load", compute);
    }

    window.addEventListener("resize", compute);

    return () => {
      img.removeEventListener("load", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <section id="work" ref={elementRef}>
      <div className="wrap">
        <div className={`section-head reveal ${isIntersecting ? "in" : ""}`}>
          <div className="eyebrow">Featured Work</div>
          <h2>Case studies, not just screens.</h2>
          <p>
            Three products, three different problems — each solved with
            research-backed structure and a distinct visual voice.
          </p>
        </div>

        <div className="projects-list">
          <div className={`project-card glass reveal ${isIntersecting ? "in" : ""}`}>
            <div
              className="project-visual"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(139,92,246,.28), transparent 60%), radial-gradient(circle at 80% 80%, rgba(79,140,255,.22), transparent 55%)",
              }}
            >
              <div className="mock">
                <div className="mock-bar w60"></div>
                <div className="mock-bar w40"></div>
                <div className="mock-block"></div>
                <div className="mock-bar w60"></div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-cat">
                Travel &amp; Hospitality — Mobile App
              </div>
              <h3>StayScape</h3>
              <p>
                An end-to-end travel and stay booking experience designed to make
                discovering, comparing, and reserving stays feel effortless —
                from search to confirmation.
              </p>
              <div className="project-results">
                <div className="result-item">
                  <div className="r-num">30+</div>
                  <div className="r-lbl">Screens Designed</div>
                </div>
                <div className="result-item">
                  <div className="r-num">4</div>
                  <div className="r-lbl">User Flows Mapped</div>
                </div>
                <div className="result-item">
                  <div className="r-num">1</div>
                  <div className="r-lbl">Design System</div>
                </div>
              </div>
              <a href="#" className="project-cta">
                View Case Study <span>→</span>
              </a>
            </div>
          </div>

          <div className={`project-card glass reveal ${isIntersecting ? "in" : ""}`}>
            <div
              className="project-visual"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(79,140,255,.28), transparent 60%), radial-gradient(circle at 80% 80%, rgba(236,111,187,.22), transparent 55%)",
              }}
            >
              <div className="mock">
                <div className="mock-bar w40"></div>
                <div className="mock-bar w60"></div>
                <div className="mock-block"></div>
                <div className="mock-bar w40"></div>
              </div>
            </div>
            <div className="project-body">
              <div className="project-cat">
                Healthcare &amp; Services — Web App
              </div>
              <h3>Online Appointment Booking System</h3>
              <p>
                A streamlined scheduling platform that removes friction from
                booking appointments — clear availability, minimal steps, and
                confirmation at every stage.
              </p>
              <div className="project-results">
                <div className="result-item">
                  <div className="r-num">3-step</div>
                  <div className="r-lbl">Booking Flow</div>
                </div>
                <div className="result-item">
                  <div className="r-num">100%</div>
                  <div className="r-lbl">Responsive Layout</div>
                </div>
                <div className="result-item">
                  <div className="r-num">2</div>
                  <div className="r-lbl">User Personas</div>
                </div>
              </div>
              <a href="#" className="project-cta">
                View Case Study <span>→</span>
              </a>
            </div>
          </div>

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
                <div
                  className="browser-scroll"
                  data-scroll
                  ref={browserContainerRef}
                >
                  <img
                    ref={browserImgRef}
                    src="/images/image_1.jpg"
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
        </div>
      </div>
    </section>
  );
}
