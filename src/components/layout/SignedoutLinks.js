import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <li className="navbar-list-item">
      <NavLink to="/" className="nav-link link">
        Sign In
      </NavLink>
    </li>
  );
};

export default SignedOutLinks;
