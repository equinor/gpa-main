import "./homePage.css";

import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/equinor-logo-primary.svg";

export const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <img src={logo} alt=""></img>
      Home page:
      <p>
        Test router:
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
