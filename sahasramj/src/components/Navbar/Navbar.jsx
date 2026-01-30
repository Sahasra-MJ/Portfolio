import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="glass-navbar">
      <div className="logo">Sahasra</div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div className="nav-actions">
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>

        {/* Hamburger */}
        {/* Hamburger */}
<button
  className={`hamburger ${open ? "open" : ""}`}
  onClick={() => setOpen(!open)}
  aria-label="Toggle Menu"
>
  {open ? "✕" : "☰"}
</button>

      </div>
    </nav>
  );
};

export default Navbar;
