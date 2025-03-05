import React from "react";
import "./Navbar.css"; // Ensure you have styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-nav mx-auto"> {/* Center align items */}
          <a className="nav-link" href="#hero" to="/">Home</a>
          <a className="nav-link" href="#about-me" to="/about me">About Me</a>
          {/* <a className="nav-link" to="/projects">Projects</a>
          <a className="nav-link" to="/contact">Contact</a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
