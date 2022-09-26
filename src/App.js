import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";

const App = () => {
  const [quiz, setQuiz] = useState(false);

  const startQuiz = () => {
    setQuiz(true);
  };

  return (
    <main className="main">
      {quiz ? <QuizPage /> : <HomePage startQuiz={startQuiz} />}
    </main>
  );
};

export default App;
