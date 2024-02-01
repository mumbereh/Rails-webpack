import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{width:'100%'}}>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-between",
          textDecoration: "none",
          padding: 0
        }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/greetings">Greetings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
