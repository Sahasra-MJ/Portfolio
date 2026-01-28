import React from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="intro-section page-section">
      <div className="intro-container">
        {/* Left: Image */}
        <div className="intro-image">
          <img src="/Intro.jpeg" alt="Intro" />
        </div>

        {/* Right: Content */}
        <div className="intro-content">
          <h1>
            Hello, I'm <span>Sahasra Oliyarasi MJ</span>
          </h1>
          <p>
            I'm a <span>Frontend Developer</span> and <span>UI/UX Designer</span> passionate about creating
            interactive and beautiful web experiences.
          </p>

          {/* Buttons */}
          <div className="intro-buttons">
            {/* Download CV */}
            <a href="/Resume.pdf" className="btn" download>
              Download CV
            </a>

            {/* Contact Me button navigates to /contact */}
            <button
              className="btn-outline"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
