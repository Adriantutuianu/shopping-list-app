import React from "react";

const Form = ({ inputText, setInputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="shopping-input"
      />
    </form>
  );
};

export default Form;
