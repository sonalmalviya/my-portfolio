import React from "react";
import "./Navbar.css"; // Make sure the CSS file is imported

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#certifications">Licenses & certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
