import React, { useEffect } from "react";
import "./About.css";

const About = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(
      ".about-section h2, .about-section p, .timeline-item"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section page-section">
      <div className="about-container">
        {/* About Me Description */}
        <h2 className="section-heading">About Me</h2>
        <p>
          Hi! I'm <span>Sahasra Oliyarasi</span>, a <span>Frontend Developer</span> and <span>UI/UX Designer</span>. 
          I love designing intuitive interfaces and building responsive websites that provide seamless user experiences. 
          My passion is turning creative ideas into beautiful and functional web projects.
        </p>

        {/* Education Timeline */}
        <h2>My Education</h2>
        <div className="education-timeline">
          <div className="timeline-item">
            <h3>SSLC</h3>
            <span>Amrita Vidyalayam, Kanyakumari, 2021</span>
            <p>
              Completed secondary school with a score of 93.6%
            </p>
          </div>
          <div className="timeline-item">
            <h3>HSC</h3>
            <span>Amrita Vidyalayam, Kanyakumari, 2023</span>
            <p>
              Successfully completed higher secondary studies with a score of 87.4%
            </p>
          </div>
          <div className="timeline-item">
            <h3>College</h3>
            <span>Francis Xavier Engineering College, 2023 - 2027</span>
            <p>
              Currently in 3rd year of B.E in Computer Science & Engineering with a CGPA of 8.72
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
