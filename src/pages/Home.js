import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
      <h1 className="text-primary" style={{ color: '#3399ff !important'}}>Hi, I'm Sonal Malviya 👋</h1>
      <h4>Front-End Developer and AI Enthusiast</h4>
      <p className="intro-text">
        I bring simplicity to life through design and code, and I love doing it.
        I love merging creativity with technology to craft seamless digital experiences. My expertise includes React.js, JavaScript, and modern front-end frameworks. Constantly learning, I aim to create efficient, scalable, and visually stunning applications.
 I'm also passionate about AI and eager to explore opportunities to learn and grow in this field.
      </p>
      
      <div class="button-wrapper">
  <div class="button-container">
    <a href="#work" class="btn">Explore My Work</a>
  </div>
  <div class="button-container">
    <a href="#contact" class="btn">Get In Touch</a>
  </div>
</div>
</section>
 {/* About Me Section */}
 <section id="about-me" className="about-me-section">
 <h2>About Me</h2>
  <div className="container">
  <p>
  I am a front-end developer with <strong>9 years</strong> of experience in building elegant, user-friendly and high-performance
   mobile & web applications, 
  including 5 years of specializing in front-end development, UI team leadership, and scalable web applications. 
  I am Proficient in React.js, TypeScript, JavaScript, Redux, HTML5, CSS3, and SharePoint (SPFx). 
  I Skilled in designing high-performance web applications using modern frameworks, cloud technologies, and AI-driven solutions. 
  I have Strong background in problem-solving, system design, and Agile methodologies. 
  And I am Passionate about continuous learning, innovation, and mentorship.
    </p>
    <h3>Skills</h3>
    <ul>
      <li>React.js</li>
      <li>JavaScript</li>
      <li>CSS, HTML</li>
      <li>AI Enthusiast</li>
    </ul>
  </div>
</section>
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
