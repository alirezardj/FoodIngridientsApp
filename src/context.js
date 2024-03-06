import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = React.createContext();
const allMealUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [myModal, setMyModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };
  const fetchSurpriseMeals = () => fetchMeals(randomMealUrl);
  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    meal = meals.find((meal) => meal.idMeal === idMeal);
    setSelectedMeal(meal);
    setMyModal(true);
  };
  const closeModal = () => {
    setMyModal(false);
  };
  useEffect(() => {
    fetchMeals(`${allMealUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        setSearchTerm,
        fetchSurpriseMeals,
        myModal,
        selectedMeal,
        selectMeal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { useGlobalContext };
export { AppContext, AppProvider };
