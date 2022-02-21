import React from "react";

const Form = ({ inputText, setInputText, shopping, setShopping }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitShoppingHandler = (e) => {
    e.preventDefault();
    setShopping([
      ...shopping,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="shopping-input"
      />
      <button
        onClick={submitShoppingHandler}
        className="shopping-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
