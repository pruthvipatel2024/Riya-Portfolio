"use client";

import React, { useState, useRef, MouseEvent } from "react";

export default function InteractiveHeroVisual() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeTheme, setActiveTheme] = useState(0); // 0: Holographic, 1: Neon Prism, 2: Cyberpunk, 3: Blueprint Wireframe
  const [activeBadge, setActiveBadge] = useState<string | null>(null);
  const [badgeToast, setBadgeToast] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const themes = [
    { name: "Holographic", class: "theme-holo", filter: "contrast(1.08) brightness(1.05)", accent: "#a78bfa" },
    { name: "Neon Prism", class: "theme-neon", filter: "contrast(1.18) saturate(1.45) hue-rotate(15deg)", accent: "#f472b6" },
    { name: "Cyberpunk", class: "theme-cyber", filter: "contrast(1.22) saturate(1.6) hue-rotate(195deg)", accent: "#60a5fa" },
    { name: "Blueprint Wireframe", class: "theme-blueprint", filter: "grayscale(0.7) brightness(1.15) sepia(0.3) hue-rotate(190deg)", accent: "#34d399" },
  ];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -12;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 12;

    setMousePos({ x: px, y: py });
    setTilt({ rx, ry });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
  };

  const handleCardClick = () => {
    setActiveTheme((prev) => (prev + 1) % themes.length);
  };

  const handleBadgeClick = (e: MouseEvent, badgeName: string, message: string) => {
    e.stopPropagation();
    setActiveBadge(badgeName);
    setBadgeToast(message);
    setTimeout(() => {
      setActiveBadge(null);
      setBadgeToast(null);
    }, 2200);
  };

  const currentTheme = themes[activeTheme];

  return (
    <div className="hero-interactive-container">
      {/* Toast Notification when tools are clicked */}
      {badgeToast && (
        <div className="hero-tool-toast">
          <span>⚡ {badgeToast}</span>
        </div>
      )}

      {/* 3D Tilt Card Wrapper */}
      <div
        ref={cardRef}
        className={`hero-portrait-card ${currentTheme.class} ${isHovered ? "hovered" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        {/* Animated Conic Gradient Border Light */}
        <div className="conic-border-glow" />

        {/* Dynamic Holographic Spotlight Beam */}
        <div
          className="holographic-beam"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.35), rgba(167, 139, 250, 0.2) 35%, transparent 75%)`,
          }}
        />

        <div className="portrait-inner-frame">
          {/* Main Hero Image */}
          <img
            src="/images/Riya-hero.jpeg"
            alt="Riya Jethva — UI/UX & Visual Designer"
            className="portrait-img hero-img-styled"
            style={{ filter: currentTheme.filter }}
          />

          {/* Holographic Grid/Mesh Overlay */}
          <div className="holo-mesh-overlay" />

          {/* Interactive Figma Selection Bounding Box */}
          <div className={`figma-bounding-box ${isHovered ? "active" : ""}`}>
            <div className="handle top-left" />
            <div className="handle top-right" />
            <div className="handle bottom-left" />
            <div className="handle bottom-right" />
            <div className="dimension-badge">Frame: Hero_Portrait [400×500]</div>
          </div>

          {/* Figma Live Cursor Overlay moving with mouse */}
          {isHovered && (
            <div
              className="figma-live-cursor"
              style={{
                left: `${mousePos.x}%`,
                top: `${mousePos.y}%`,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.63604 3.43506L20.4853 11.9203L13.4142 14.7487L10.5858 21.8198L5.63604 3.43506Z" fill="#a78bfa" stroke="#ffffff" strokeWidth="1.5" />
              </svg>
              <span className="cursor-label">Riya (UI/UX)</span>
            </div>
          )}

          {/* Bottom Caption Overlay */}
          <div className="portrait-caption-glow">
            <div className="caption-left">
              <div className="name">Riya Jethva</div>
              <div className="role">UI/UX &amp; Visual Craftsman</div>
            </div>
            <div className="theme-toggle-indicator">
              <span className="theme-pill">🎨 {currentTheme.name}</span>
            </div>
          </div>
        </div>

        {/* Floating Tool Badges with interactive click handlers */}
        <div
          className={`floating-badge badge-top-right ${activeBadge === "Ps" ? "pulse-badge" : ""}`}
          onClick={(e) => handleBadgeClick(e, "Ps", "Photoshop Smart Filters Active!")}
        >
          <div className="ps-icon">Ps</div>
          <span>Photoshop</span>
        </div>

        <div
          className={`floating-badge badge-middle-left ${activeBadge === "Ai" ? "pulse-badge" : ""}`}
          onClick={(e) => handleBadgeClick(e, "Ai", "Illustrator Vector Precision Enabled!")}
        >
          <div className="ai-icon">Ai</div>
          <span>Illustrator</span>
        </div>

        <div
          className={`floating-badge badge-bottom-left ${activeBadge === "Figma" ? "pulse-badge" : ""}`}
          onClick={(e) => handleBadgeClick(e, "Figma", "Figma Design System Connected!")}
        >
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

      {/* Helper text below hero card */}
      <div className="hero-card-hint">
        <span>✨ Click card to switch visual theme | Hover to inspect Figma frame</span>
      </div>
    </div>
  );
}
