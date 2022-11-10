import React from "react";

const Cart = ({ cartData }) => {
  const { strMeal, quantity } = cartData;
  return (
    <div>
      <ul>
        <li className="text-xl font-semibold">
          {strMeal} : {quantity}
        </li>
      </ul>
    </div>
  );
};

export default Cart;
