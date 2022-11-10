import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";

const Meals = ({ searchText }) => {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data?.meals));
  }, [searchText]);

  const handleAddToCart = (cartData) => {
    const quantity = cart.find((cart) => cart.idMeal === cartData.idMeal);
    if (quantity) {
      quantity.quantity = quantity.quantity + 1;
    } else {
      const newCartData = [...cart, cartData];
      setCart(newCartData);
    }
  };
  console.log(cart);
  return (
    <div>
      {meals && (
        <div className="flex flex-row mt-10 w-11/12 mx-auto">
          <div className="basis-3/4">
            <div className="grid grid-cols-3 gap-4">
              {meals.map((meal) => (
                <Meal
                  key={meal.idMeal}
                  data={meal}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
          <div className="basis-1/4 ml-20">
            <div className="bg-pink-100 h-screen fixed p-10">
              <h1 className="text-4xl text-center font-semibold mb-10">
                Order Summary
              </h1>
              {cart.map((data) => (
                <Cart key={Math.random()} cartData={data} />
              ))}
            </div>
          </div>
        </div>
      )}
      {!meals && <h1>Data Not found</h1>}
    </div>
  );
};

export default Meals;
