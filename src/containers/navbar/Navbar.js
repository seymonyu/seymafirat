import React from "react";
import "../../stylesheets/navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-main">
      <ul className="navbar-main-container">
        <li className="navbar-item">
          {" "}
          <Link className="navbar-link" to="/">
            HOME
          </Link>
        </li>

        <li className="navbar-item">
          {" "}
          <Link className="navbar-link" to="/about">
            ABOUT
          </Link>
        </li>
        <li className="navbar-item">
          {" "}
          <Link className="navbar-link" to="/work">
            WORK
          </Link>
        </li>

        <li className="navbar-item">
          {" "}
          <Link className="navbar-link" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
