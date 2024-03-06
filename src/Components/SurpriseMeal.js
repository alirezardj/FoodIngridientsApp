import React from "react";
import { useGlobalContext } from "../context";

function SurpriseMeal() {
  const { fetchSurpriseMeals } = useGlobalContext();
  return <button onClick={fetchSurpriseMeals}>surprise me! </button>;
}

export default SurpriseMeal;
