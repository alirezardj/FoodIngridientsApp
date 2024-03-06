import React from "react";
import { useGlobalContext } from "../context";

import Search from "../Components/Search";

function Meals() {
  const { loading, meals, selectMeal } = useGlobalContext();

  if (loading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }
  if (meals.length < 1) {
    return (
      <div>
        <Search />
        <h4>no meals matched your searchterm. please try again.</h4>
      </div>
    );
  }

  return (
    <div className="meal-background bg-gray-900">
      <Search />

      <div className="main-meals ">
        {meals.map((singleMeal) => {
          const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
          return (
            <div key={idMeal}>
              <img
                className="picture"
                src={image}
                alt={title}
                onClick={() => selectMeal(idMeal)}
              />

              <footer className="theFooter">
                <h5 className="theName">{title}</h5>
              </footer>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Meals;
