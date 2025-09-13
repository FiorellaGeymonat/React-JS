import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { fetchCategories } from "../data/api";
import CartWidget from "./CartWidget";
import "../App.css";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch((err) => console.error("Error cargando categorías:", err));
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">🥞 The Pancake Co.</Link>
      <ul className="nav-links">
        <li><NavLink to="/">Inicio</NavLink></li>
        {categories.slice(0,5).map((cat) => (
          <li key={cat}>
            <NavLink to={`/category/${cat}`}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
