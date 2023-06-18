import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/archive">Archive</NavLink>
      </nav>
    </header>
  );
};

export default Header;
