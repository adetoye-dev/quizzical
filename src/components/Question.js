import React from "react";
import Option from "./Option";

const Question = (props) => {
  const renderedOptions = props.options.map((option) => (
    <Option
      key={option.id}
      value={option.value}
      selectOption={() => props.selectOption(option.id)}
      selected={option.selected}
      background={option.background}
    />
  ));

  return (
    <div className="question">
      <h3 className="question-title">{props.question}</h3>
      <div className="question-options">{renderedOptions}</div>
      <hr />
    </div>
  );
};

export default Question;
