/*import React from "react";
import { useGlobalContext } from "../context";

function Search() {
  const { } = useGlobalContext();
  const filteredMeals = meals.filter((meals) => {
    return meals.strMeal.toLowerCase().includes(query.toLowerCase());
  });
  const [query, setQuery] = useState("");
  const searchInput = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <input
        value={query}
        type="search"
        placeholder="search a meal"
        onChange={searchInput}
      />
      <button className="fbtn">search</button>
      <button type="button" className="sbtn">
        Random
      </button>
    </div>
  );
}

export default Search;*/

import React, { useState } from "react";
import { useGlobalContext } from "../context";

function Search() {
  const { setSearchTerm, fetchSurpriseMeals } = useGlobalContext();

  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      setSearchTerm(query);
      setQuery("");
    }
  };
  const searchInput = (e) => {
    setQuery(e.target.value);
  };
  const handleRandomMeal = () => {
    setSearchTerm("");
    setQuery("");
    fetchSurpriseMeals("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="searchbar-container">
        <input
          className="search-input"
          value={query}
          type="search"
          placeholder="search a meal"
          onChange={searchInput}
        />
        <button className="search-button" type="submit">
          search
        </button>
        <button
          type="button"
          className="random-button"
          onClick={handleRandomMeal}
        >
          Random
        </button>
      </div>
    </form>
  );
}

export default Search;
