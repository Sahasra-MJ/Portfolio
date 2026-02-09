// src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Text-to-Speech Converter",
      description:
        "A simple web app that converts text into speech using the Web Speech API.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sahasra-MJ/Text-Speech-Convertor",
    },
    {
      title: "Music Player",
      description:
        "A responsive music player with play, pause, skip, and seek features.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sahasra-MJ/Music-Player",
    },
    {
      title: "Notes App",
      description:
        "A simple notes app with local storage support to persist data.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sahasra-MJ/Notes-App",
    },
    {
      title: "QR Code Generator",
      description:
        "Generates QR codes instantly from any text or URL entered by the user.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sahasra-MJ/QR-Code-generator",
    },
    {
      title: "Weather Forecasting App",
      description: "A simple weather app providing real-time weather updates.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sahasra-MJ/Weather-Forecasting",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio to showcase skills, projects, and contact details.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sahasra-MJ/Portfolio",
    },
    {
      title: "Random Password Generator",
      description:
        "A simple and interactive Random Password Generator built using HTML, CSS, and JavaScript. It allows users to generate secure passwords.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sahasra-MJ/Random-Password-Generator",
    },
    {
      title: "Flappy Bird",
      description:
        "A fun 2D Flappy Bird game built using Unity and C#. Players navigate the bird through obstacles while avoiding collisions.",
      tech: ["Unity", "C#"],
      link: "https://github.com/Sahasra-MJ/Flappy-Bird",
    },
  ];

  const figmaProjects = [
    {
      title: "ATG Hotels Website",
      description: "A modern travel and hospitality website design.",
      tech: ["Figma", "UI/UX"],
      link: "https://www.figma.com/proto/ERVPSfilKo76QaEyheQVJJ/ATGHotels?node-id=1-2&p=f&t=KBmfejjWnCTYVPys-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2", // replace with your actual figma link
    },
    {
      title: "ReachOut - Mental Health Platform",
      description: "UI/UX design for a mental health support platform.",
      tech: ["Figma", "UI/UX"],
      link: "https://www.figma.com/proto/GEizm8GPP9b03L6Kr32Fz5/ReachOut?node-id=1-2&p=f&t=QBolAnhI5BKQTaQ7-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2", // replace with your actual figma link
    },
  ];

  const upcoming = [
    {
      title: "Scamlens: A fake internship detection web page",
      description:
        "An upcoming React.js project for detecting fake internships.",
      tech: ["React", "JavaScript"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <p className="projects-description">
        A collection of my development and design projects.
      </p>

      {/* Development Projects */}
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Figma Projects */}
      <h3 className="sub-heading">UI/UX (Figma) Projects</h3>
      <div className="projects-grid">
        {figmaProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Upcoming Projects */}
      <h3 className="sub-heading">Upcoming</h3>
      <div className="projects-grid">
        {upcoming.map((project, index) => (
          <div key={index} className="project-card coming-soon">
            <h3>{project.title} 🚀</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
