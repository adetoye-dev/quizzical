import React, { useState } from "react";
import "./App.css";
import HomePage from "./HomePage";

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  return <main className="main">{!startQuiz && <HomePage />}</main>;
};

export default App;
