"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";

const steps = ["Research", "Wireframe", "Prototype", "Test", "Launch"];

export default function ProcessSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver(0.3);
  const ringProgressRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (isIntersecting && ringProgressRef.current) {
      ringProgressRef.current.style.transition =
        "stroke-dashoffset 1.8s cubic-bezier(.16,1,.3,1)";
      ringProgressRef.current.style.strokeDashoffset = "0";
    }
  }, [isIntersecting]);

  const R = 168;
  const CX = 200;
  const CY = 200;

  return (
    <section id="process" ref={elementRef}>
      <div className="wrap">
        <div
          className={`section-head reveal ${isIntersecting ? "in" : ""}`}
          style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
        >
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span></span>Design Process
          </div>
          <h2>How an idea becomes an interface.</h2>
          <p style={{ marginLeft: "auto", marginRight: "auto" }}>
            A five-stage loop I return to on every project — research grounds it,
            testing keeps it honest.
          </p>
        </div>

        <div className="process-wrap">
          <div
            className={`process-ring reveal ${isIntersecting ? "in" : ""}`}
            id="processRing"
          >
            <svg viewBox="0 0 400 400">
              <circle
                cx="200"
                cy="200"
                r="168"
                fill="none"
                stroke="rgba(255,255,255,.08)"
                strokeWidth="1.5"
              />
              <circle
                ref={ringProgressRef}
                id="ringProgress"
                cx="200"
                cy="200"
                r="168"
                fill="none"
                stroke="url(#grad)"
                strokeWidth="1.5"
                strokeDasharray="1055"
                strokeDashoffset="1055"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#4f8cff" />
                  <stop offset="100%" stopColor="#ec6fbb" />
                </linearGradient>
              </defs>
            </svg>
            <div className="ring-center">
              <span>Design Loop</span>
              <small>continuous &amp; iterative</small>
            </div>
            {steps.map((label, i) => {
              const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
              const x = CX + R * Math.cos(angle);
              const y = CY + R * Math.sin(angle);
              const leftPercent = (x / 400) * 100;
              const topPercent = (y / 400) * 100;

              return (
                <div
                  key={label}
                  className="process-node"
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                  }}
                >
                  <div className="node-dot">0{i + 1}</div>
                  <div className="p-label">{label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
