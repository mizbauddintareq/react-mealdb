import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Meals = ({ searchText }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data?.meals));
  }, [searchText]);
  return (
    <div class="flex flex-row mt-10 w-11/12 mx-auto">
      <div class="basis-3/4">
        <div class="grid grid-cols-3 gap-4">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} data={meal} />
          ))}
        </div>
      </div>
      <div class="basis-1/4">
        <h1>Cart container</h1>
      </div>
    </div>
  );
};

export default Meals;
