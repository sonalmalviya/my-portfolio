import React from "react";
import Skills from "./Skills";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section">
    <h2>About Me</h2>
     <div className="container">
     <p>
             I am an experienced IT professional with 9 years of experience
in software development, specializing in front-end
development, Ul team leadership, and scalable web
applications. Proficient in React.js, TypeScript,
JavaScript, Redux, HTML5, CSS3, and SharePoint
(SPFx). Skilled in designing high-performance web
applications using modern frameworks, cloud
technologies, and Al-driven solutions. Strong
background in problem-solving, system design, and
Agile methodologies. Passionate about continuous
learning, innovation, and mentorship.

           </p>
       <Skills />
     </div>
   </section>
  );
};

export default AboutMe;
