import React from 'react';
import './Certifications.css'; // Assuming you will add custom styles

const certifications = [
  {
    name: 'Generative AI for Everyone',
    organization: 'DeepLearning.AI',
    certificateLink: 'https://www.coursera.org/account/accomplishments/verify/8AY7NPS089DW',
  },
  {
    name: 'Introduction to Generative AI',
    organization: 'Google',
    certificateLink: 'https://www.cloudskillsboost.google/public_profiles/95a70760-490a-4e08-8f6c-23b86909cbb9/badges/8389432?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Licenses & certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <div className="certification-info">
              <h3>{cert.name}</h3>
              <p>{cert.organization}</p>
            </div>
            <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer" className="view-certificate-btn">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
