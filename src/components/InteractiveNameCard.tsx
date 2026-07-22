"use client";

import React, { useState, useRef, MouseEvent } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
}

export default function InteractiveNameCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const particleIdRef = useRef(0);

  const firstName = "Riya".split("");
  const lastName = "Jethva".split("");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    // Calculate subtle 3D tilt
    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -10;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 10;

    setMousePos({ x: px, y: py });
    setTilt({ rx, ry });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setIsClicked(true);
    setClickCount((prev) => prev + 1);

    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;

    // Generate sparkle explosion
    const colors = ["#a78bfa", "#f472b6", "#60a5fa", "#34d399", "#fbbf24"];
    const newParticles: Particle[] = [];
    for (let i = 0; i < 14; i++) {
      const angle = (Math.PI * 2 * i) / 14 + (Math.random() - 0.5);
      const speed = 2 + Math.random() * 4;
      newParticles.push({
        id: particleIdRef.current++,
        x: clickX,
        y: clickY,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      });
    }

    setParticles((prev) => [...prev.slice(-20), ...newParticles]);

    // Reset click effect trigger after animation completes
    setTimeout(() => {
      setIsClicked(false);
    }, 1200);
  };

  const isActive = isHovered || isClicked || clickCount > 0;

  return (
    <div
      ref={cardRef}
      className={`interactive-name-card ${isActive ? "active" : ""} ${isClicked ? "clicked" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
    >
      {/* Background Interactive Mesh & Spotlight */}
      <div
        className="card-spotlight"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(167, 139, 250, 0.25), rgba(244, 114, 182, 0.12) 40%, transparent 80%)`,
        }}
      />

      {/* Floating Ambient Orbs inside card */}
      <div className="card-orb orb-a" />
      <div className="card-orb orb-b" />

      {/* Decorative Grid Lines */}
      <div className="card-grid-bg" />

      {/* Interactive Sparkle Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="sparkle-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            transform: `translate(${p.vx * 12}px, ${p.vy * 12}px) scale(0)`,
          }}
        />
      ))}

      {/* Top Banner Chip */}
      <div className="interactive-status-badge">
        <span className="live-dot" />
        <span>{isActive ? "✨ Animation Active" : "👈 Hover or Click Area"}</span>
      </div>

      {/* Main Interactive Content Area */}
      <div className="name-animation-wrapper">
        {/* Calligraphy Pen Icon / Sparkle cursor indicator when active */}
        <div
          className={`animated-pen-tip ${isActive ? "writing" : ""}`}
          style={{
            left: isActive ? `${Math.min(85, Math.max(15, mousePos.x))}%` : "50%",
            top: isActive ? `${Math.min(80, Math.max(20, mousePos.y))}%` : "38%",
          }}
        >
          ✍️
        </div>

        {/* Dynamic Name Animation Container */}
        <div className="name-display">
          <div className="name-word">
            {firstName.map((char, index) => (
              <span
                key={`first-${index}`}
                className={`animated-char ${isActive ? "animate" : ""}`}
                style={{
                  animationDelay: `${index * 0.09}s`,
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>

          <div className="name-word second-word">
            {lastName.map((char, index) => (
              <span
                key={`last-${index}`}
                className={`animated-char ${isActive ? "animate" : ""}`}
                style={{
                  animationDelay: `${(firstName.length + index) * 0.09 + 0.1}s`,
                  transitionDelay: `${(firstName.length + index) * 0.05}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Animated Cursive Stroke SVG Path overlay */}
        <div className="signature-stroke-container">
          <svg viewBox="0 0 340 60" className="signature-svg">
            <defs>
              <linearGradient id="sigGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="50%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            {/* Elegant underline flourish */}
            <path
              d="M 20 48 Q 110 58 170 46 T 320 50"
              className={`flourish-path ${isActive ? "draw" : ""}`}
              stroke="url(#sigGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Interactive Subtitle & Skills Chips */}
        <div className={`interactive-meta ${isActive ? "visible" : ""}`}>
          <div className="role-tag">UI/UX &amp; Visual Designer</div>
          <div className="mini-chips">
            <span className="chip">Figma</span>
            <span className="chip">UI/UX</span>
            <span className="chip">Design Systems</span>
            <span className="chip">Prototyping</span>
          </div>
        </div>
      </div>

      {/* Bottom Hint Footer */}
      <div className="card-footer-hint">
        <span>{clickCount > 0 ? `🎉 Clicked ${clickCount}x — Keep exploring!` : "Touch, hover, or click to draw name"}</span>
      </div>
    </div>
  );
}
