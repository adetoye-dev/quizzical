import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import QuizPage from "./QuizPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="quiz" element={<QuizPage />} />
    </Routes>
  );
};

export default App;
