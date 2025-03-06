import React from "react";
import "./Home.css";
import Projects from "./Projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "./AboutMe";
import Contact from "./contact";

const Home = () => {
  return (
    <div>
    <Navbar/>

    <div className="home-container">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
      <h1 className="text-primary" style={{ color: '#3399ff !important'}}>Hi, I'm Sonal Malviya 👋</h1>
      <h4>Front-End Developer and AI Enthusiast</h4>
      <p className="intro-text">
        I bring simplicity to life through design and code, and I love doing it.
       My expertise includes React.js, JavaScript, and modern front-end frameworks. Constantly learning, I aim to create efficient, scalable, and visually stunning applications.
 I'm also passionate about AI and eager to explore opportunities to learn and grow in this field.
      </p>
      
      <div class="button-wrapper">
  <div class="button-container">
  <a href="#experience" className="btn">Explore My Work</a>
  </div>
  <div class="button-container">
    <a href="#contact" class="btn">Get In Touch</a>
  </div>
</div>
</section>

 {/* About Me Section */}
 <AboutMe/>

<Projects/>
<Contact/>
    </div>

    <Footer/>

    </div>
  );
};

export default Home;
