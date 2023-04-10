import Squars from "./Squars";
import Header from "./Header";
import Footer from "./footer";
import data from "../../../public/data";
import "../styles/cirtificates.css";

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
    <div className={`parent-element`}>
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

const Certificates = () => {
  const MyCertificates = ({ className, cirtif }) => {
    return (
      <a
        key={cirtif.name}
        href={cirtif.link}
        className={`cirtif beforeShow ${className}`}
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
    <div>
      <Squars />
      <Header />
      <div className="cirtificatesPage">
        <div className="skills">
          <h1>Skills <i class="fa-solid fa-gears"></i></h1>
          <div className={`logos ${showImage ? "show" : ""}`}>
            <img src="/personalPage/images/html.png" alt="HTML5 Powered" title="HTML5" />
            <img src="/personalPage/images/css.png" alt="css" title="CSS" />
            <img src="/personalPage/images/js.png" alt="css" title="JavaScript" />
            <img src="/personalPage/images/react.png" alt="css" title="ReactJs" />
            <img src="/personalPage/images/node.png" is="node" alt="css" title="NodeJs" />
            <img src="/personalPage/images/redux.png" alt="css" title="ReduxJs" />
          </div>
        </div>
        <div className="skills" style={{marginTop:"10px"}}>
          <h1>Certificates <i class="fa-solid fa-certificate"></i></h1>
          <div className="cirtifContainer">
            <MyComponent>
              {data.map((cirtif) => {
                return <MyCertificates cirtif={cirtif} key={cirtif.name} />;
              })}
            </MyComponent>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Certificates;
