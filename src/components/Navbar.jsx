import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <ul>
        <li className="homelink">
        <Link  to="/">
        Home
      </Link>
        </li>
        </ul>
      

      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
