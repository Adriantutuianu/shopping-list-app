import React from "react";
import { Input } from "antd";

const Shopping = ({ text, shop, shopping, setShopping }) => {
  // Events
  const deleteHandler = () => {
    setShopping(shopping.filter((el) => el.id !== shop.id));
  };

  const completeHandler = () => {
    setShopping(
      shopping.map((item) => {
        if (item.id === shop.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const onChangeQuantity = (e) => {
    if (e.target.value === "0") {
      console.log("Is equal to 0. Will not be submitted");
      e.preventDefault();
    }
  };

  return (
    <div className="shop">
      <Input
        onChange={onChangeQuantity}
        placeholder="Qty"
        className="input-quantity"
      />
      <li className={`shop-item ${shop.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Shopping;
