import "../styles/squares.scss";
import React, { useEffect, useState } from "react";

export default function () {
  // Generate a random number of squares (maximum of 10)
  const numOfSquares = Math.floor(Math.random() * 15) + 10;

  // Create an array of `numOfSquares` elements
  const squares = Array.from({ length: numOfSquares });

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowImage(true);
    }, 10);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const startPosition = []

  for(let i=0; i<20; i++){
    startPosition.push(getRandomFirstPosition())
  }

  return (
    <div className="squares-container">
      {squares.map((_, index) => (
        <div
          key={index}
          className={`square`}
          style={showImage ? getRandomPosition() : startPosition[index]}
        ></div>
      ))}
    </div>
  );
}

function getRandomPosition() {
  // Generate random positions for each square
  const top = Math.floor(Math.random() * (window.innerHeight - 10));
  const left = Math.floor(Math.random() * window.innerWidth);
  const delay = Math.random() * 5 + "s";
  const duration = Math.random() * 5 + 5 + "s";

  return {
    top: top + "px",
    left: left + "px",
    animationDelay: "0s",
    animationDuration: duration,
  };
}

function getRandomFirstPosition() {
  // Generate random positions for each square
  const top = Math.floor(Math.random() * (window.innerHeight - 10));
  const left = Math.floor(Math.random() * window.innerWidth);
  const delay = Math.random() * 5 + "s";
  const duration = Math.random() * 5 + 5 + "s";

  return {
    bottom:  "-" + top + "px",
    left: "-" + left + "px",
    animationDelay: "0s",
    animationDuration: duration,
  };
}
