"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FormEvent, useState } from "react";

export default function ContactSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver(0.2);
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
              marginBottom: "32px",
            }}
          >
            Open to freelance projects, internships, and full-time UI/UX roles.
            Reach out and let's talk about your product.
          </p>

          <div className="contact-links">
            <a
              href="mailto:riyajethva211@gmail.com"
              className="contact-link glass"
            >
              <div>
                <div className="cl-label">EMAIL</div>
                <div className="cl-value">riyajethva211@gmail.com</div>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/riya-jethva-5b68423b5"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link glass"
            >
              <div>
                <div className="cl-label">LINKEDIN</div>
                <div className="cl-value">/in/riya-jethva-5b68423b5</div>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
            <a
              href="tel:+919265911944"
              className="contact-link glass"
            >
              <div>
                <div className="cl-label">CONTACT</div>
                <div className="cl-value">+91 8866390211</div>
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
            <label htmlFor="cf-name">NAME</label>
            <input
              id="cf-name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="cf-email">EMAIL</label>
            <input
              id="cf-email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="cf-msg">MESSAGE</label>
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
