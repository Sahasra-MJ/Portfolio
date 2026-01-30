import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const h1 = document.querySelector(".intro-content h1");
      h1?.classList.add("finished");
    }, 4200); // cursor stops after typing

    return () => clearTimeout(timer);
  }, []);

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
            I'm a <span>Frontend Developer</span> and{" "}
            <span>UI/UX Designer</span> passionate about creating
            interactive and beautiful web experiences.
          </p>

          {/* Buttons */}
          <div className="intro-buttons">
            <a href="/Resume.pdf" className="btn" download>
              Download CV
            </a>

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
