import React from "react";
import "./contact.css";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Let's connect! Feel free to reach out via LinkedIn or download my resume.</p>
      
      <div className="contact-buttons">
        {/* Download Resume Button */}
        <a href="/SonalMalviyaResume.pdf" download className="btn download-btn">
          Download Resume
        </a>

        {/* LinkedIn Profile Button */}
        <a href="https://www.linkedin.com/in/sonal-malviya-b9824514a" target="_blank" rel="noopener noreferrer" className="btn linkedin-btn">
          <FaLinkedin className="linkedin-icon" /> Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
