import React from "react";
import blobRight from "../assets/home-blob-right.png";
import blobLeft from "../assets/home-blob-left.png";
const HomePage = ({ startQuiz }) => {
  return (
    <div className="home container">
      <img src={blobRight} className="right-blob" />
      <h1 className="title">Quizzical</h1>
      <button className="start-quiz" onClick={startQuiz}>
        Start quiz
      </button>
      <img src={blobLeft} className="left-blob" />
    </div>
  );
};

export default HomePage;
