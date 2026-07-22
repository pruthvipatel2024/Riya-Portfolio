"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FormEvent, useState } from "react";

export default function ContactSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver();
  const [btnText, setBtnText] = useState("Send Message");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setBtnText("Message Sent ✓");
  };

  return (
    <section id="contact" ref={elementRef}>
      <div className="wrap contact-grid">
        <div className={`reveal ${isIntersecting ? "in" : ""}`}>
          <div className="eyebrow">Contact</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,44px)", marginBottom: "16px" }}>
            Let's design something people remember.
          </h2>
          <p
            style={{
              color: "var(--ink-dim)",
              fontSize: "16px",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Open to freelance projects, internships, and full-time UI/UX roles.
            Reach out and let's talk about your product.
          </p>

          <div className="contact-links">
            <a href="mailto:hello@riyajethva.design" className="contact-link glass">
              <div>
                <div className="cl-label">Email</div>
                <div className="cl-value">hello@riyajethva.design</div>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
            <a href="#" className="contact-link glass">
              <div>
                <div className="cl-label">LinkedIn</div>
                <div className="cl-value">/in/riyajethva</div>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
            <a href="#" className="contact-link glass">
              <div>
                <div className="cl-label">Behance</div>
                <div className="cl-value">be.net/riyajethva</div>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
            <a href="#" className="contact-link glass">
              <div>
                <div className="cl-label">Dribbble</div>
                <div className="cl-value">dribbble.com/riyajethva</div>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </div>

        <form
          className={`contact-form glass reveal ${isIntersecting ? "in" : ""}`}
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <label htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="cf-msg">Message</label>
            <textarea
              id="cf-msg"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            {btnText}
          </button>
        </form>
      </div>
    </section>
  );
}
