import React from "react";
import blobLeft from "../assets/quiz-blob-left.png";
import blobRight from "../assets/quiz-blob-right.png";

const QuizPage = () => {
  return (
    <div className="container quiz">
      <img src={blobRight} className="right-blob" />
      <h1 className="title">Quiz</h1>
      <img src={blobLeft} className="left-blob" />
    </div>
  );
};

export default QuizPage;
