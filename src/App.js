import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Meals from "./Components/Meals";
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
