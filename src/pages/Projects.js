import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Professional Experience</h2>
      <div className="container">
        {/* Experience Item 1 */}
        <div className="experience-item">
          <h3>Tata Consultancy Services (TCS), Pune</h3>
          <p><strong>Information Technology Analyst | Nov 2018 – Nov 2023</strong></p>

          <div className="project-grid">
            <div className="project-card">
              <h4>Project: Tapestry ESI (Enterprise Sensor Integration) – Boeing</h4>
              <ul>
                <li>Led UI development for a smart middleware solution integrating real-time sensor data.</li>
                <li>Developed interactive, map-centric dashboards using React.js, Redux, and Material UI.</li>
                <li>Optimized performance by implementing lazy loading and dynamic imports.</li>
              </ul>
            </div>
            <div className="project-card">
              <h4>Project: Policy Portal – Commonwealth Bank of Australia</h4>
              <ul>
                <li>Developed a policy management platform using React.js and SharePoint (SPFx).</li>
                <li>Integrated secure authentication and role-based access control (RBAC).</li>
              </ul>
            </div>
          </div>

          <div className="project-grid">
            <div className="project-card">
              <h4>Project: Barclays Data Portal (BDP) – Barclays</h4>
              <ul>
                <li>Built scalable web applications using React.js, Jest, and micro frontend architecture.</li>
                <li>Enhanced UX by implementing custom hooks and reusable UI components.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="experience-item">
          <h3>The Digital Group</h3>
          <p><strong>Mobile Application Developer</strong></p>

          <div className="project-grid">
            <div className="project-card">
              <h4>Project: HRMS (Digital HR Management System)</h4>
              <ul>
                <li>Developed React Native mobile applications for HR automation.</li>
              </ul>
            </div>
            <div className="project-card">
              <h4>Project: PulseRx (Doctor-Patient Interaction Platform)</h4>
              <ul>
                <li>Built Swift-based iOS applications to manage medical data.</li>
              </ul>
            </div>
          </div>

          <div className="project-grid">
            <div className="project-card">
              <h4>Project: Discover Places (Navigation & Location Services)</h4>
              <ul>
                <li>Designed an iOS application for finding nearby services using GPS.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
