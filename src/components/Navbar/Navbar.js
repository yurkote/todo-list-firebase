import React from "react";
import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav
    className={`navbar navbar-dark navbar-expand bg-primary justify-content-between ${styles.pl_2}`}
  >
    <NavLink className="navbar-brand" to="/">
      Note App
    </NavLink>
    <ul className="navbar-nav ">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);
