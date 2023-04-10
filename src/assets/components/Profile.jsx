import "../styles/profile.css";
import React, { useEffect, useState } from "react";

function Profile() {
  const [showImage, setShowImage] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    setShowImage(true);
    setTimeout(() => setShowName(true), 200);
    setTimeout(() => setShowSummary(true), 500);
  }, []);

  return (
    <div className="profile-container">
      <img
        src="/download.jfif"
        alt="Profile"
        className={`profile-picture ${showImage ? "show" : ""}`}
      />
      <div className={`profile-info ${showName ? "show" : ""}`}>
        
        <h2 className={`profile-name ${showName ? "show" : ""}`}>
          Hi, I'm Mohamed Ashraf
        </h2>
        <p className={`profile-summary ${showSummary ? "show" : ""}`}>
          Front-End Developer with proven skills in building professional
          responsive web project applications with HTML, CSS, and JavaScript.
          Proficient with CSS and JS Frameworks and libraries like Reactjs and
          jquery. Constantly improve my skills in web development through online
          courses and projects I build for practice. I write effective
          algorithms, break a problem down into smaller parts and think
          carefully about how to solve each part with code. Have strong
          knowledge of the fundamentals of algorithmic thinking and principles
          of object-oriented programming. Always aim to learn new skills to make
          a promising career.
        </p>
      </div>
    </div>
  );
}

export default Profile;
