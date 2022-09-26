import React, { useState } from "react";
import "./App.css";
import HomePage from "./HomePage";

const App = () => {
  const [quiz, setQuiz] = useState(false);

  const startQuiz = () => {
    setQuiz(true);
  };

  return (
    <main className="main">{!quiz && <HomePage startQuiz={startQuiz} />}</main>
  );
};

export default App;
