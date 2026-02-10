import React, { useState, useEffect } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", feedback: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    const elems = document.querySelectorAll(
      ".contact-wrapper > .contact-card, .info-item, .social-icons a, input, textarea"
    );
    elems.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="contact-wrapper page-section">
      {/* Right Section - Now First */}
      <div className="contact-card">
        <h2>Send Feedback</h2>

        {/* Formspree Form */}
        <form
          action="https://formspree.io/f/mpwvkdly"
          method="POST"
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Feedback</label>
          <textarea
            name="feedback"
            placeholder="Your feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Left Section - Now Second */}
      <div className="contact-card">
        <h2>Let's Connect</h2>
        <p className="subtitle">Open for opportunities and collaborations</p>

        <div className="contact-info">
          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>Tirunelveli, India</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">🌐</span>
            <div>
              <h4>Remote Work</h4>
              <p>Available Worldwide</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">💼</span>
            <div>
              <h4>Freelancing</h4>
              <p>Open to Opportunities</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/Sahasra-MJ"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sahasra-oliyarasi-m-j18/"><FaLinkedin /></a>
          <a href="https://www.instagram.com/sahasra_mj?igsh=MWRvb3g3a2tldXVkaw=="><FaInstagram /></a>
          <a href="mailto:sahasramayildevv@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
