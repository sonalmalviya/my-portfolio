import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li><a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
        <li><a href="#about-me" onClick={() => setIsMobileMenuOpen(false)}>About Me</a></li>
        <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a></li>
        <li><a href="#certifications" onClick={() => setIsMobileMenuOpen(false)}>Licenses & Certifications</a></li>
        <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
