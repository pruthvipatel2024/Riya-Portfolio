"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="nav-inner">
        <a href="#hero" className="logo" onClick={closeMobileMenu}>
          RJ<span>.</span>
        </a>
        <nav className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            <li>
              <a href="#about" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMobileMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#work" onClick={closeMobileMenu}>
                Work
              </a>
            </li>
            <li>
              <a href="#brand" onClick={closeMobileMenu}>
                Brand
              </a>
            </li>
            <li>
              <a href="#apps" onClick={closeMobileMenu}>
                Apps
              </a>
            </li>
            <li>
              <a href="#characters" onClick={closeMobileMenu}>
                Characters
              </a>
            </li>
            <li>
              <a href="#posters" onClick={closeMobileMenu}>
                Posters
              </a>
            </li>
            <li>
              <a href="#process" onClick={closeMobileMenu}>
                Process
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <a href="#contact" className="nav-cta" onClick={closeMobileMenu}>
          Let's Talk
        </a>
      </div>
    </header>
  );
}
