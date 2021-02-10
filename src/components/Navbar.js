import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./../styles/App.css";

const Navbar = () => {
  return (
    <>
      <NavLink exact activeClassName="active" to="/dashboard">
        Home
      </NavLink>
      <NavLink exact activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink exact activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </>
  );
};

export default Navbar;
