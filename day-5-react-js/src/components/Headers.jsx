import { NavLink } from "react-router-dom";
import "../css/Header.css";

function Headers() {
  return (
    <header>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/transactions">Truncations</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Headers;
