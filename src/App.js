import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router basename="/my-portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

