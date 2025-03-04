import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <h1 className="text-primary">Hi, I'm Sonal Malviya 👋</h1>
      <h4>Front-End Developer and AI Enthusiast</h4>
      <p className="intro-text">
        I bring simplicity to life through design and code, and I love doing it.
With 9 years of experience in mobile and web development, including 5 years in React.js, I build elegant, high-performance applications. I'm also passionate about AI and eager to explore opportunities to learn and grow in this field.
      </p>
      <div class="button-wrapper">
  <div class="button-container">
    <a href="#work" class="btn">Explore My Work</a>
  </div>
  <div class="button-container">
    <a href="#contact" class="btn">Get In Touch</a>
  </div>
</div>

      {/* Professional Summary Section */}
      {/* <div className="summary-container">
        <h2>Professional Summary</h2>
        <p>
      I am a front-end developer with <strong>9 years</strong> of experience in building elegant, user-friendly web applications. Passionate about AI, I love merging creativity with technology to craft seamless digital experiences. My expertise includes <strong>React.js, JavaScript, and modern front-end frameworks</strong>. Constantly learning, I aim to create efficient, scalable, and visually stunning applications.
    </p>
      </div> */}
    </div>
  );
};

export default Home;
