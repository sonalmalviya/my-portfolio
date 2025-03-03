import React from "react";
import styles from "./Home.module.css"; // Import the CSS Module


const Home = () => {
    return (
      <div className="container text-center mt-5">
        <h1 className="text-primary">Hi, I'm Sonal Malviya 👋</h1>
        <p className="lead">Actively looking for H1B visa sponsorship | React JS Developer| Front End Developer | UI Developer | Ex-TCSer</p>
       
        <p className="text-lg mt-4">Professional Summary :
Experienced Senior Frontend Engineer with 9+ years in the industry, specializing in frontend infrastructure, UI development, and scalable web applications. Passionate about developer productivity, performance optimization, and scalable architecture. Proficient in React.js, Node.js, Webpack, Bazel, and frontend security best practices. Adept at collaborating with cross-functional teams to build high-performance enterprise applications.
</p>

<p className="text-lg mt-4">Technical Skills :
•	Frontend Infrastructure: React.js, Node.js, Webpack, Babel, Redux, TypeScript, JavaScript (ES6+)
•	Performance & Optimization: Code Splitting, Lazy Loading, Webpack Optimization, Caching Strategies
•	Security & Observability: OWASP Secure Coding Practices, SAST/DAST, Performance Monitoring
•	Development Tools: Git, Jest, Postman, Swagger, Docker, Agile Methodologies
•	Build & Deployment: CI/CD (Jenkins, GitHub Actions), Micro Frontends, Monorepo Architecture
</p>
      </div>
    );
  };
  
  export default Home;
  