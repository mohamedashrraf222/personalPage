import "../styles/profile.css";
import React, { useEffect, useState } from 'react';

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
        className={`profile-picture ${showImage ? 'show' : ''}`}
      />
      <div className={`profile-info ${showName ? 'show' : ''}`}>
        <h2 className={`profile-name ${showName ? 'show' : ''}`}>Mohamed Ashraf</h2>
        <p className={`profile-summary ${showSummary ? 'show' : ''}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ullamcorper enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit nam similique corporis quod perferendis itaque, voluptatibus molestias, pariatur quos repellat. Magnam libero est atque ratione doloribus voluptate unde dolor!
        </p>
      </div>
    </div>
  );
}

export default Profile;