import React from "react";
import { NavLink } from "react-router-dom";

export default class Catagories_Main extends React.Component {


  render() {
    let { getProductsByType, findAll } = this.props;
    return (
      <ul className="sidebar">
        <NavLink  to="/products">
            <li onClick={() => findAll()}>All</li>
        </NavLink>
        <NavLink to="/products">
            <li onClick={() => getProductsByType("Jackets")}>Jackets</li>
        </NavLink>
        <NavLink to="/products">
            <li onClick={() => getProductsByType("Tees")}>Tees</li>
        </NavLink>
        <NavLink to="/products">
            <li onClick={() => getProductsByType("Hoods")}>Hoods</li>
        </NavLink>
        <NavLink to="/products">
            <li onClick={() => getProductsByType("Hats")}>Hats</li>
        </NavLink>
        <NavLink to="/products">
            <li onClick={() => getProductsByType("Decks")}>Decks</li>
        </NavLink>

      </ul>
      
    );
  }
}
