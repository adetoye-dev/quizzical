import React, { useEffect, useState } from "react";
import Option from "./Option";
import { nanoid } from "nanoid";

const Question = (props) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 4);
    const arr = props.incorrect_answers.map((ans) => ans);
    arr.splice(randomNumber, "", props.correct_answer);
    const optionArray = arr.map((item) => ({
      value: item,
      selected: false,
      id: nanoid(),
    }));
    setOptions(optionArray);
  }, []);

  const selectOption = (optionId) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) => {
        return option.id === optionId
          ? { ...option, selected: true }
          : { ...option, selected: false };
      });
    });
  };

  //   console.log(options);

  const renderedOptions = options.map((option) => (
    <Option
      value={option.value}
      selectOption={() => selectOption(option.id)}
      selected={option.selected}
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
