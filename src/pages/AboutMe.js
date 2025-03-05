import React from "react";
import Skills from "./Skills";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section">
    <h2>About Me</h2>
     <div className="container">
     <p>
             I am a front-end developer with <strong>9 years</strong> of experience in building elegant, user-friendly, and high-performance mobile & web applications. 
             I have specialized in front-end development for the past 5 years, leading UI teams and building scalable web applications.
           </p>
       <Skills />
     </div>
   </section>
  );
};

export default AboutMe;
