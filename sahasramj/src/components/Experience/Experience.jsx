import React, { useEffect } from "react";
import "./Experience.css"; // reuse your existing CSS

const experienceData = [
  {
    company: "Pinnacle Labs Pvt Ltd",
    duration: "1 month",
    role: "Web Development Intern",
  },
  {
    company: "InternPe",
    duration: "1 month",
    role: "Web Development Intern",
  },
  {
    company: "TechOctaNet Services",
    duration: "1 month",
    role: "Web Development Intern",
  },
];

const certificatesData = [
  {
    title: "JavaScript Fundamentals",
    issuer: "GreatStack",
    date: "2025",
    img: "/certificates/greatstack.jpeg",
  },
  {
    title: "Git, GitHub and Markdown Crash Course",
    issuer: "Udemy",
    date: "2025",
    img: "/certificates/udemy.jpeg",
  },
  {
    title: "Foundations of UX Design",
    issuer: "Google Coursera",
    date: "2024",
    img: "/certificates/google.jpeg",
  },
];

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.18 }
    );

    const elems = document.querySelectorAll(
      "#experience h2, .experience-grid .experience-card"
    );
    elems.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      {/* Experience Section */}
      <h2 className="section-heading">Experience</h2>
      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card" tabIndex="0">
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
            <span>{exp.duration}</span>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <h2 className="section-heading" style={{ marginTop: "50px" }}>Certificates</h2>
      <div className="experience-grid">
        {certificatesData.map((cert, index) => (
          <a
            key={index}
            href={cert.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-card"
            style={{ textDecoration: "none" }}
          >
            <img
              src={cert.img}
              alt={cert.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <span>{cert.date}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
