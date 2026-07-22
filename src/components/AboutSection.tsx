"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AboutSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver(0.2);

  return (
    <section id="about" ref={elementRef}>
      <div className="wrap about-grid">
        <div className={`about-portrait reveal ${isIntersecting ? "in" : ""}`}>
          <div className="about-portrait-inner">
            <img
              src="/images/riya_about.jpg"
              alt="Riya Jethva — UI/UX & Visual Designer"
              className="about-portrait-img"
            />
          </div>
        </div>
        <div>
          <div className="eyebrow">About</div>
          <h2
            className={`reveal ${isIntersecting ? "in" : ""}`}
            style={{ fontSize: "clamp(28px,3.6vw,40px)", marginBottom: "26px" }}
          >
            A designer obsessed with the small details that make big
            experiences feel effortless.
          </h2>
          <div className={`about-copy reveal ${isIntersecting ? "in" : ""}`}>
            <p>
              I'm <strong>Riya Jethva</strong>, a UI/UX and Visual Designer
              who believes great design is invisible — it just feels right. My
              process blends structured research with a strong visual instinct,
              so every interface I design is both usable and unforgettable.
            </p>
            <p>
              My journey started in college, grew through hands-on internship
              experience, and continues through every case study I take on. I
              care about clarity, hierarchy, and the tiny interactions that
              make a product feel premium.
            </p>
          </div>

          <div className={`timeline reveal ${isIntersecting ? "in" : ""}`}>
            <div className="t-item">
              <div className="t-title">BCA Student</div>
              <div className="t-desc">
                Built a foundation in computer applications while discovering a
                passion for how people interact with digital products.
              </div>
            </div>
            <div className="t-item">
              <div className="t-title">UI/UX Learning Journey</div>
              <div className="t-desc">
                Self-driven study of design systems, usability principles, and
                interaction patterns — turning theory into practice.
              </div>
            </div>
            <div className="t-item">
              <div className="t-title">Internship at MageComp LLP</div>
              <div className="t-desc">
                Applied design skills on real client work, collaborating with
                developers to ship polished, production-ready interfaces.
              </div>
            </div>
            <div className="t-item">
              <div className="t-title">Portfolio Projects</div>
              <div className="t-desc">
                Designed end-to-end case studies — from booking platforms to
                e-commerce — to sharpen craft and product thinking.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
