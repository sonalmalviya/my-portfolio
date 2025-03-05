import React from "react";
import "./Home.css";
import Skills from "./Skills";

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
          I am a front-end developer with <strong>9 years</strong> of experience in building elegant, user-friendly, and high-performance mobile & web applications. 
          I have specialized in front-end development for the past 5 years, leading UI teams and building scalable web applications.
          {/* <br /><br />
          Proficient in **React.js, TypeScript, JavaScript, Redux, HTML5, CSS3**, and **SharePoint (SPFx)**. 
          Skilled in designing high-performance applications using modern frameworks, cloud technologies, and AI-driven solutions.
          <br /><br />
          Passionate about continuous learning, innovation, and mentorship. I thrive in Agile environments, ensuring high-quality and efficient development processes. */}
        </p>
  {/* <p>
  I am a front-end developer with <strong>9 years</strong> of experience in building elegant, user-friendly and high-performance
   mobile & web applications, 
  including 5 years of specializing in front-end development, UI team leadership, and scalable web applications. 
  I am Proficient in React.js, TypeScript, JavaScript, Redux, HTML5, CSS3, and SharePoint (SPFx). 
  I Skilled in designing high-performance web applications using modern frameworks, cloud technologies, and AI-driven solutions. 
  I have Strong background in problem-solving, system design, and Agile methodologies. 
  And I am Passionate about continuous learning, innovation, and mentorship.
    </p> */}
    {/* <div className="skills-container">
        <div className="skills-column">
            <h3>Front-End Development</h3>
            <ul>
                <li><strong>Languages & Frameworks:</strong> React.js, TypeScript, JavaScript, HTML5, CSS3, AngularJS</li>
                <li><strong>State Management:</strong> Redux, Context API</li>
                <li><strong>UI Libraries:</strong> Material-UI, UI Fabric React</li>
                <li><strong>Performance Optimization:</strong> Lazy Loading, Code Splitting, Memoization, Webpack</li>
                <li><strong>Testing:</strong> Jest, React Testing Library</li>
            </ul>
        </div>
        <div className="skills-column">
            <h3>Cloud & Dev Tools</h3>
            <ul>
                <li><strong>Platforms:</strong> SharePoint (SPFx), Azure DevOps</li>
                <li><strong>CI/CD:</strong> GitHub Actions, Azure Pipelines</li>
                <li><strong>API Integration:</strong> RESTful APIs, GraphQL</li>
                <li><strong>Development Tools:</strong> Webpack, Postman, Swagger</li>
                <li><strong>Best Practices:</strong> Agile & Scrum, Micro Frontends Architecture, Code Reviews</li>
            </ul>
        </div>
    </div> */}
    <Skills />
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
