import React from 'react';
import '../styles/loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <div className="text">Loading...</div>
    </div>
  );
};

export default Loading;