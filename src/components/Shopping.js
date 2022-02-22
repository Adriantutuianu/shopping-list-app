import React from "react";

const Shopping = ({ text, shop, shopping, setShopping }) => {
  // Events
  const deleteHandler = () => {
    setShopping(shopping.filter((el) => el.id !== shop.id));
  };

  return <div>Shopping</div>;
};

export default Shopping;
