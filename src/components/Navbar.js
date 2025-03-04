import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure you have styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-nav mx-auto"> {/* Center align items */}
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about me">About Me</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
