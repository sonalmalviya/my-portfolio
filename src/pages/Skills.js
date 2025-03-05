import React from "react";
import "./Skills.css";

const Skills = () => {
  const techSkills = [
    "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "AngularJS",
    "Redux", "Context API", "Material-UI", "Bootstrap UI",
    "Lazy Loading", "Code Splitting", "Memoization", "Webpack",
    "Jest", "React Native"
  ];

  const cloudDevTools = [
    "SharePoint (SPFx)", "Azure DevOps", "GitHub Actions", "Azure Pipelines",
    "RESTful APIs", "GraphQL", "Postman", "Swagger",
    "Micro Frontends Architecture", "Agile & Scrum", "Code Reviews"
  ];

  return (
    <div className="skills-columns">
      {/* Front-End Skills Column */}
      <div className="skills-column">
        <h3>Front-End Skills</h3>
        <div className="skills-grid">
          {techSkills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      {/* Cloud & Dev Tools Column */}
      <div className="skills-column">
        <h3>Cloud & Dev Tools</h3>
        <div className="skills-grid">
          {cloudDevTools.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
