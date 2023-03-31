import Header from "./Header";
import Squars from "./Squars";
import Project from "./projectComp";
import Footer from "./footer";
import projects from "../../../public/projects";
import "../styles/projects.css";

import React, { useState, useEffect, useRef } from "react";

const MyComponent = ({ children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < React.Children.count(children)) {
        setIndex((prev) => prev + 1);
      }

    }, 200);

    return () => clearTimeout(timer);
  }, [index, children]);

  return (
    <div className="project-card-container show">
      {React.Children.map(children, (child, i) => {
        let className = "";
        if (React.isValidElement(child)) {
          className = i < index ? "show" : "";
        }

        return React.cloneElement(child, { className });
      })}
    </div>
  );
};

const Projects = () => {

  return (
    <div>
      <Squars />
      <Header />
      <div className="container" style={{ marginTop: "13vh" }}>
        <MyComponent>
          {projects.map((project) => {
            
            return <Project data={project} key={project.key} />;
          })}
        </MyComponent>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;