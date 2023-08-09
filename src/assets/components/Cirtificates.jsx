import "../styles/cirtificates.css";
import myData from "../../../public/courses";

import React, { useState, useEffect } from "react";

const Certificates = () => {
  const windowWidth = window.innerWidth;

  console.log(`Window width: ${windowWidth}px`);
  const MyCertificates = ({ cirtif }) => {
    return (
      <a
        key={cirtif.name}
        href={cirtif.link}
        className={`cirtif beforeShow show`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="cirtif-front">
          <img src={cirtif.picture} alt="" />
          <h1>{cirtif.name}</h1>
        </div>
        <div className="cirtif-back">
          <p>{cirtif.about}</p>
          <p>
            <span> You can see the certificate by clicking on this card </span>
          </p>
        </div>
      </a>
    );
  };

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);

  return (
    <>
      <div className="cirtificatesPage" id="Certificates-and-Skill">
        <div className="skills">
          <h1>
            Skills <i className="fa-solid fa-gears"></i>
          </h1>
          <div className={`logos ${showImage ? "show" : ""}`}>
            <img
              src="/personalPage/images/html.png"
              alt="HTML5 Powered"
              title="HTML5"
            />
            <img src="/personalPage/images/css.png" alt="css" title="CSS" />
            <img
              src="/personalPage/images/js.png"
              alt="css"
              title="JavaScript"
            />
            <img
              src="/personalPage/images/react.png"
              alt="css"
              title="ReactJs"
            />
            <img
              src="/personalPage/images/node.png"
              is="node"
              alt="css"
              title="NodeJs"
            />
            <img
              src="/personalPage/images/redux.png"
              alt="css"
              title="ReduxJs"
            />
          </div>
        </div>
        <div className="skills" style={{ marginTop: "10px" }}>
          <h1>
            Certificates <i className="fa-solid fa-certificate"></i>

          </h1>
          {windowWidth >= 900 ? <div className="skillsNote">
              Note: Hover over the cirtificate to know details about the course.
            </div> : ""}
          <div className="cirtifContainer">
          <div className={`parent-element`}>
              {myData.map((cirtif) => {
                return <MyCertificates cirtif={cirtif} key={cirtif.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
