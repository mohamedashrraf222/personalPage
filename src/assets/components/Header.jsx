import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img
            src="/finalName-01.svg"
            className="mySVG"
          />
        </Link>
      </div>
      <nav className={`nav-container ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Certificates-and-Skills">Certificates and Skills</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Me</Link>
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
