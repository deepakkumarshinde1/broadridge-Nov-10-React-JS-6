import { NavLink } from "react-router-dom";
import "../css/Header.css";

function Headers() {
  return (
    <header className="row">
      <section className="col-12 m-0 p-0">
        <nav className="my-navbar">
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
          <ul className="menu">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/create-account">Create Account</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Headers;
