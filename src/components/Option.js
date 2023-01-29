import React from "react";

const Option = (props) => {
  const style = {
    backgroundColor: props.background,
  };

  return (
    <button
      className="option"
      style={style}
      onClick={props.selectOption}
      dangerouslySetInnerHTML={{ __html: props.value }}
    ></button>
  );
};

export default Option;
