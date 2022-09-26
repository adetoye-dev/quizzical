import React from "react";

const Question = () => {
  return (
    <div className="question">
      <h3 className="question-title">How would one say goodbye in Spanish?</h3>
      <div className="question-options">
        <button className="option">option 1</button>
        <button className="option">option 2</button>
        <button className="option">option 3</button>
        <button className="option">option 4</button>
      </div>
      <hr />
    </div>
  );
};

export default Question;
