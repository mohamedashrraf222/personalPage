import myProjects from "./../../../public/projects";
import React, { useState, useEffect, useRef } from "react";
import "./../styles/AllProjectsStyle.css";

const AllProjects = () => {
  const Project = ({ data }) => {
    return (
      <div className="projectCard">
        <div className="firstPart">
          <div className="imgContainer">
            <img src={data.pic} alt={data.name} />
          </div>

          <h1>{data.name}</h1>
          <p>{data.descreption}</p>
        </div>
        <div className="secondPart">
          {data.skills && (
            <div className="projectSkills">
              {data.skills.map((skillPath) => {
                return <img className="projectSkill" src={skillPath} />;
              })}
            </div>
          )}
          <div className="allLinks">
            <a href={data.demo} target="_blank">
              <i className="fas fa-external-link-alt"></i>{" "}
              <span>Live demo project</span>
            </a>
            {data.github && (
              <a href={data.github} target="_blank">
                <i className="fab fa-github"></i> <span>Github Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="skillsNote">
        Note: Node web apps take time to load becuase the server is deployed for
        free.
      </div>
      <div className="AllProjectsContainer">
        {myProjects.map((project) => {
          return <Project data={project} key={project.key} />;
        })}
      </div>
    </>
  );
};

export default AllProjects;
