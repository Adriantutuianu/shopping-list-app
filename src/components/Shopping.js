import React from "react";

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

  return <div>Shopping</div>;
};

export default Shopping;
