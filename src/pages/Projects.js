import React from "react";
import "./projects.css";

const Projects = () => {

  const boeingTechSkills = [
    "React.js", "JavaScript", "HTML5", "CSS3", "Redux", "Material UI", "Lazy Loading", "Dynamic Imports","React Leaflet","Agile Methodology", "UI Team Lead"];

    const policyTechSkills = [
      "React.js", "JavaScript", "HTML5", "CSS3", "Redux", "Bootstrap UI", "SharePoint Framework (SPFx)", "Role-Based Access Control (RBAC)","RESTful APIs","Agile Methodolgy","postman"];

      const barclaysTechSkills = [
        "React.js", "JavaScript", "HTML5", "CSS3", "Redux", "Jest", "Micro-Frontend Architecture", "Custom Hooks","Reusable UI Components","API Integration","GraphQL", "Swagger", "Agile Methodolgy"];
  
        const hrmsTechSkills = [
          "React Native", "React Navigation", "HTML5", "CSS3", "Redux", "Firebase ", "RESTful APIs", "Axios or Fetch API","JWT (JSON Web Tokens)"];
    
          const pulseRxTechSkills = [
            "Swift", "Push Notifications", "MapKit","Firebase","SwiftUI"];

            const discoverPlacesTechSkills = [
              "Swift", "Core Location", "MapKit","Firebase","SwiftUI","MapKit","Firebase","RESTful APIs","Push Notifications"];
      
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
              <h4>Tapestry ESI – Boeing</h4>
              <p>Led UI development for Boeing's smart middleware solution, integrating real-time sensor data into interactive, map-centric dashboards using React.js, Redux, and Material UI. Optimized performance with lazy loading and dynamic imports, enhancing responsiveness and scalability for seamless data visualization.</p>
            <div className="skills-grid">
          {boeingTechSkills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
            </div>
            <div className="project-card">
              <h4>Policy Portal – Commonwealth Bank of Australia</h4>
              <p>
              Designed and developed a policy management platform using React.js and SharePoint (SPFx), enabling seamless policy creation, review, and management. Integrated secure authentication and role-based access control (RBAC) to ensure data security and controlled access based on user roles.
              </p>
              <div className="skills-grid">
          {policyTechSkills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
            </div>
          </div>

          <div className="project-grid">
            <div className="project-card">
              <h4>Barclays Data Portal – Barclays</h4>
             <p>I worked as a React.js developer on the Barclays Data Portal, contributing to the development of a data-driven web application that enabled users to access and visualize financial data. In addition to coding, I mentored and trained team members on React.js core concepts & best practices, improving the overall development process. My responsibilities included performance optimization and ensuring smooth integration with backend services for real-time data updates.</p>
              <div className="skills-grid">
          {barclaysTechSkills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
            </div>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="experience-item">
          <h3>The Digital Group</h3>
          <p><strong>Mobile Application Developer</strong></p>

          <div className="project-grid">
            <div className="project-card">
              <h4>HRMS - TDG Product</h4>
             <p>HRMS (Digital HR Management System) is a React Native mobile app that automates HR tasks like employee management, payroll, leave, attendance, and recruitment. It offers secure access, push notifications, and cross-platform compatibility for efficient HR operations on both iOS and Android.</p>
             <div className="skills-grid">
          {hrmsTechSkills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
            </div>
            <div className="project-card">
              <h4>PulseRx - TDG Product</h4>
              <p>As a mobile app developer for PulseRx, I contributed to the development of a Swift-based iOS app designed to improve doctor-patient interactions. The app allows patients to book appointments, view medical records, and communicate with doctors, while enabling doctors to track patient history and treatments. My role focused on implementing key features and optimizing the user experience to enhance both patient and doctor workflows.</p>
              <div className="skills-grid">
          {pulseRxTechSkills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
            </div>
          </div>

          <div className="project-grid">
            <div className="project-card">
              <h4>Discover Places - TDG Product</h4>
              <p>As a mobile app developer, I contributed to the development of Discover Places, an iOS app that helps users find nearby services using GPS. The app offers features like real-time navigation, service details, and location-based search. My role focused on implementing location-based features and optimizing user experience for seamless navigation.</p>
              <div className="skills-grid">
          {discoverPlacesTechSkills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
