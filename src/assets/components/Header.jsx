import React, { useState, useEffect } from "react";
import "../styles/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define a function that closes the navbar when clicking outside of it
  const closeNavbar = (event) => {
    if (event.target.closest(".navbar")) {
      return;
    }
    setIsMenuOpen(false);
  };

  // Add an event listener that calls the closeNavbar function
  useEffect(() => {
    document.addEventListener("click", closeNavbar);
    return () => {
      document.removeEventListener("click", closeNavbar);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="logo-container">
        <a>
          <img src="/personalPage/finalName-01.svg" className="mySVG" />
        </a>
      </div>
      <nav className={`nav-container ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#Certificates-and-Skill">Certificates and Skill</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>
      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
