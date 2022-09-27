import React from "react";

const Option = (props) => {
  const style = {
    backgroundColor: props.selected ? "#d6dbf5" : "",
  };

  return (
    <button className="option" style={style} onClick={props.selectOption}>
      {props.value}
    </button>
  );
};

export default Option;
