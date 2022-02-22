import React from "react";
import Shopping from "./Shopping";

const ShoppingList = ({ shopping, setShopping, filteredShopping }) => {
  return (
    <div className="shopping-container">
      <ul className="shopping-list">
        {filteredShopping.map((shop) => (
          <Shopping
            setShopping={setShopping}
            shopping={shopping}
            key={shop.id}
            shop={shop}
            text={shop.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
