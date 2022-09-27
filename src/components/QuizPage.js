import React, { useEffect, useState } from "react";
import blobLeft from "../assets/quiz-blob-left.png";
import blobRight from "../assets/quiz-blob-right.png";
import Question from "./Question";
import axios from "axios";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php", {
        params: {
          amount: 5,
          category: 18,
          difficulty: "easy",
          type: "multiple",
        },
      })
      .then((res) => setQuestions(res.data.results));
  }, []);

  console.log(questions);

  const questionElements = questions.map((item) => {
    return (
      <Question
        question={item.question}
        correct_answer={item.correct_answer}
        incorrect_answers={item.incorrect_answers}
      />
    );
  });

  return (
    <div className="container quiz">
      <img src={blobRight} className="right-blob" alt="blob" />
      <div className="questions-container">{questionElements}</div>
      <img src={blobLeft} className="left-blob" alt="blob" />
    </div>
  );
};

export default QuizPage;
