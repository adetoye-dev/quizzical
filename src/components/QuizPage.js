import React from "react";
import blobLeft from "../assets/quiz-blob-left.png";
import blobRight from "../assets/quiz-blob-right.png";
import Question from "./Question";

const QuizPage = () => {
  return (
    <div className="container quiz">
      <img src={blobRight} className="right-blob" />
      <div className="questions-container">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
      <img src={blobLeft} className="left-blob" />
    </div>
  );
};

export default QuizPage;
