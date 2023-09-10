import React, { useState, useEffect, useRef } from "react";
import myData from "../../../public/courses";
import "./../styles/AllProjectsStyle.css";

const AllCertificates = () => {
  const Certificate = ({ data }) => {
    return (
      <div className="projectCard">
        <div
          className="firstPart"
          style={{ height: "Auto", marginBottom: "15px" }}
        >
          <div className="imgContainer">
            <img src={data.picture} alt={data.name} />
          </div>

          <h1>{data.name}</h1>
          <p>{data.about}</p>
        </div>
        <div className="secondPart" style={{textAlign:"center"}}>
          <div className="allLinks" style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>
            <a href={data.link} target="_blank" style={{textAlign:"center"}}>
              <i className="fas fa-external-link-alt"></i>{" "}
              <span>View certificate</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="AllProjectsContainer">
      {myData.map((project) => {
        return <Certificate data={project} key={project.name} />;
      })}
    </div>
  );
};

export default AllCertificates;
