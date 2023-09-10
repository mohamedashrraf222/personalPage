import Project from "./projectComp";
import myProjects from "./../../../public/projects";
import "../styles/projectComp.css";

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
    
    <div className="Projectscontainer">
      <div className="skills">
        <h1>
          web apps <i className="fa-brands fa-medapps"></i>
        </h1>
        {/* note that the class skillsNote is in the cirtificates.css file */}
        <div className="skillsNote">
          Note: Node web apps take time to load becuase the server is deployed
          for free.
        </div>
        <MyComponent>
          {myProjects.map((project) => {
            return <Project data={project} key={project.key} type="app" />;
          })}
        </MyComponent>
      </div>
      <div className="skills">
        <h1>
          Static Projects <i className="fa-solid fa-earth-americas"></i>
        </h1>
        <MyComponent>
          {myProjects.map((project) => {
            return <Project data={project} key={project.key} type="project" />;
          })}
        </MyComponent>
      </div>
    </div>
  );
};

export default Projects;
