import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  const navigate = useNavigate();

  const fullText = "Hello, I'm Sahasra Oliyarasi MJ";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // Human typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const speed = 90 + Math.random() * 120; // irregular speed
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <section id="home" className="intro-section page-section">
      <div className="intro-container">
        <div className="intro-image">
          <img src="/Intro.jpeg" alt="Intro" />
        </div>

        <div className="intro-content">
          <h1 className="intro-typing">
            <span className="intro-js-typing">{text}</span>
            <span className="cursor"></span>
          </h1>

          <p>
            I'm a <span>Frontend Developer</span> and{" "}
            <span>UI/UX Designer</span> passionate about creating
            interactive and beautiful web experiences.
          </p>

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
