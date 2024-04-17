//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
//import Navbar from "./Components/Navbar";
import Meals from "./Components/Meals";
//import Search from "./Components/Search";
import { useGlobalContext } from "./context";
import MyModal from "./Components/MyModal";

function App() {
  const { myModal } = useGlobalContext();
  return (
    <div className="theApp ">
      {myModal && <MyModal />}
      <Routes>
        <Route path="/" element={<Meals />} />
      </Routes>
    </div>
  );
}

export default App;
