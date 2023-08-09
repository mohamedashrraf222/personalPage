import React, { useEffect, useState } from "react";
import "../styles/profile.css";

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
        src="/personalPage/download.jfif"
        alt="Profile"
        className={`profile-picture ${showImage ? "show" : ""}`}
      />
      <div className={`profile-info ${showName ? "show" : ""}`}>
        <h2 className={`profile-name ${showName ? "show" : ""}`}>
          Hi, I'm Mohamed Ashraf
        </h2>
        <p className={`profile-summary ${showSummary ? "show" : ""}`}>
          I am a skilled web developer with expertise in HTML, CSS, and
          JavaScript, along with Python for backend programming. With hands-on
          experience in popular frameworks like Flask and Django. My proficiency
          extends to front-end technologies like React.js and Bootstrap.
          Additionally, I have a strong grasp of IBM services and have worked
          extensively with Git, GitHub, and version control. My knowledge of
          Node.js, Express.js, and SQL allows me to develop efficient and
          data-driven applications. Moreover, I am well-versed in
          containerization with Docker, ensuring seamless deployment and
          management. With a passion for continuous learning, I am constantly
          seeking new challenges and opportunities to enhance my skills and
          deliver exceptional results.
        </p>
      </div>
    </div>
  );
}

export default Profile;
