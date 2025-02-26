import React from "react";
import "./Header.css";

function Header() {

  return (
    <>
    <div className="h">
      <div className="find">
        <img src="/img/logo.PNG" alt="" />
        <input type="text" placeholder="cakescasca"/>
      </div>

      <div className="nav">
        <ul>
            <li>What to cook</li>
            <li>Recipes</li>
            <li>Ingredients</li>
            <li>Occasions</li>
            <li>About Us</li>
        </ul>
      </div>

      <div className="avar">
        <button>Your Recipe Box</button>
        <img src="/img/avar.PNG" alt="" />
      </div>
    </div>

    </>
  )
}

export default Header;