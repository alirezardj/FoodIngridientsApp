import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="header">
      <Link className="sty" to="/Meals">
        Meals
      </Link>
    </div>
  );
}

export default Navbar;
