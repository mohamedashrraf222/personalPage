import "../styles/nav.css";
import React, { useState, useEffect } from "react";

const Header = (props) => {
  // Define the initial state of the navbar
  const [isOpen, setIsOpen] = useState(false);

  // Define a function that toggles the navbar state
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Define a function that closes the navbar when clicking outside of it
  const closeNavbar = (event) => {
    if (event.target.closest(".navbar")) {
      return;
    }
    setIsOpen(false);
  };

  // Add an event listener that calls the closeNavbar function
  useEffect(() => {
    document.addEventListener("click", closeNavbar);
    return () => {
      document.removeEventListener("click", closeNavbar);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <a href="/" className="mySVG">
          <img
            src="/finalName-01.svg"
            className="mySVG"
            style={{ padding: "10px" }}
          />
        </a>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li className="navbar-link">
            <a href="/">Home</a>
          </li>
          <li className="navbar-link">
            <a href="/projects">Projects</a>
          </li>
          <li className="navbar-link">
            <a href="/certificates">Certificates and Skills</a>
          </li>
          <li className="navbar-link">
            <a href="/contact">Contact Me</a>
          </li>
        </ul>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>
    </div>
  );
};

export default Header;
