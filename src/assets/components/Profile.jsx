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
      <div className={`profile-picture ${showImage ? "show" : ""}`}>
        <img src="/personalPage/Mohamed Asharf.jpeg" alt="Profile" />
      </div>
      <div className={`profile-info ${showName ? "show" : ""}`}>
        <h2 className={`profile-name ${showName ? "show" : ""}`}>
          Hi, I'm Mohamed Ashraf !
        </h2>
        <p className={`profile-summary ${showSummary ? "show" : ""}`}>
          Skilled web developer with proficiency extends to front-end
          technologies like React.js and Bootstrap. along with Python for
          backend programming. With experience in popular frameworks like Flask
          and Django. worked with Git, GitHub, and version control. My knowledge
          of Node.js, Express.js allows me to develop efficient applications.
          Moreover, I am well-versed in containerization with Docker. With a
          passion for continuous learning, I am constantly seeking new
          challenges and opportunities to enhance my skills and deliver
          exceptional results.
        </p>
      </div>
    </div>
  );
}

export default Profile;
