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
              <h4>Tapestry ESI – Boeing</h4>
              <p>
              Developed interactive, map-centric dashboards for real-time sensor data visualization using React.js, Redux, and Material UI. Optimized performance with lazy loading and dynamic imports, enhancing responsiveness and scalability for Boeing's smart middleware solution.
            </p>
            </div>
            <div className="project-card">
              <h4>Policy Portal – Commonwealth Bank of Australia</h4>
              <p>
              Designed and developed a policy management platform using React.js and SharePoint (SPFx), enabling seamless policy creation, review, and management. Integrated secure authentication and role-based access control (RBAC) to ensure data security and controlled access based on user roles.
              </p>
            </div>
          </div>

          <div className="project-grid">
            <div className="project-card">
              <h4>Barclays Data Portal – Barclays</h4>
              <p>
              Developed scalable web application from scratch using React.js, Jest, and a micro frontend architecture, ensuring modularity and maintainability. Improved user experience by implementing custom hooks and reusable UI components, enhancing efficiency and consistency across the platform.
              </p>
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
            </div>
            <div className="project-card">
              <h4>PulseRx - TDG Product</h4>
              <p>
              PulseRx is a Swift-based iOS app that improves doctor-patient interaction by managing medical data. Patients can book appointments, view records, and communicate with doctors, while doctors can access patient history and track treatments, enhancing care and efficiency.
              </p>
            </div>
          </div>

          <div className="project-grid">
            <div className="project-card">
              <h4>Discover Places - TDG Product</h4>
              <p>
              Discover Places is an iOS app that helps users find nearby services using GPS, offering features like real-time navigation, service details, and location-based search.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
