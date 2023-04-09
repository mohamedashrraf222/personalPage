import Header from "./Header";
import Squars from "./Squars";
import Project from "./projectComp";
import Footer from "./footer";
import Loading from "./Loading";
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
  const [load, setLoad] = useState(false);
  const [mine, setMine] = useState([]);

  useEffect(() => {
    fetch("/myProjectsData")
      .then((res) => res.json())
      .then((res) => setMine(res))
      .then(() => {
        setLoad(true);
      });
  }, []);

  return (
    <div>
      <Squars />
      <Header />
      <div className="container" style={{ marginTop: "13vmin" }}>
        <div className="skills">
          <h1>
            Projects <i className="fa-solid fa-earth-americas"></i>
          </h1>
          <MyComponent>
            {load ? (
              mine.map((project) => {
                return <Project data={project} key={project.key} />;
              })
            ) : (
              <Loading />
            )}
          </MyComponent>
        </div>
      </div>
      <Footer load={load}/>
    </div>
  );
};

export default Projects;
