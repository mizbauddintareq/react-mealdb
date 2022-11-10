import React, { useEffect, useState } from "react";
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
    const newCartData = [...cart, cartData];
    setCart(newCartData);
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
          <div className="basis-1/4">
            <h1>Cart container</h1>
          </div>
        </div>
      )}
      {!meals && <h1>Data Not found</h1>}
    </div>
  );
};

export default Meals;
