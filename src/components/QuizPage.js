import React, { useEffect, useState } from "react";
import blobLeft from "../assets/quiz-blob-left.png";
import blobRight from "../assets/quiz-blob-right.png";
import Question from "./Question";
import quiz from "../apis/opentdb";
import { nanoid } from "nanoid";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const allNewQuestions = () => {
    quiz
      .get("/", {
        params: {
          category: 18,
          difficulty: "easy",
        },
      })
      .then((res) => {
        const newQuestions = res.data.results.map((question) => {
          const randomNumber = Math.floor(Math.random() * 4);
          const arr = question.incorrect_answers.map((ans) => ans);
          arr.splice(randomNumber, "", question.correct_answer);
          const optionArray = arr.map((item) => ({
            value: item,
            selected: false,
            background: "",
            id: nanoid(),
          }));
          return { ...question, questionId: nanoid(), options: optionArray };
        });

        setQuestions(newQuestions);
      });
  };

  useEffect(() => {
    allNewQuestions();
  }, []);

  const selectOption = (optionId) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        const someWasSelected = question.options.some(
          (option) => option.selected
        );
        if (someWasSelected) {
          return question;
        }
        const newOptions = question.options.map((option) => {
          return option.id === optionId
            ? { ...option, selected: true, background: "#d6dbf5" }
            : option;
        });
        return { ...question, options: newOptions };
      });
    });
  };

  const checkAnswers = () => {
    if (submitted) {
      setSubmitted(false);
      setScore(0);
      allNewQuestions();
      return;
    }
    setSubmitted(true);
    setQuestions((oldQuestions) => {
      return oldQuestions.map((question) => {
        const newOptionsValue = question.options.map((option) => {
          if (option.selected) {
            if (option.value === question.correct_answer) {
              setScore((oldScore) => oldScore + 1);
              return { ...option, background: "#94D7A2" };
            } else {
              return { ...option, background: "#F8BCBC" };
            }
          } else if (option.value === question.correct_answer) {
            return { ...option, background: "#94D7A2" };
          } else {
            return option;
          }
        });
        return { ...question, options: newOptionsValue };
      });
    });
  };

  const questionElements = questions.map((question) => {
    return (
      <Question
        key={question.questionId}
        question={question.question}
        options={question.options}
        selectOption={selectOption}
      />
    );
  });

  return (
    <div className="container quiz">
      <img src={blobRight} className="right-blob" alt="blob" />
      <div className="questions-container">{questionElements}</div>
      <div className="score-board">
        {submitted && (
          <p className="score-text">You scored {score}/5 correct answers</p>
        )}
        <button className="score-btn" onClick={checkAnswers}>
          {submitted ? "Play Again" : "Check Answers"}
        </button>
      </div>
      <img src={blobLeft} className="left-blob" alt="blob" />
    </div>
  );
};

export default QuizPage;
