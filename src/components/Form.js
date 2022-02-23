import React from "react";

const Form = ({
  inputText,
  setInputText,
  shopping,
  setShopping,
  setStatus,
}) => {
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

  const statusHandler = (e) => {
    setStatus(e.target.value);
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
      <div className="select">
        <select
          onChange={statusHandler}
          name="shopping"
          className="filter-shop"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
