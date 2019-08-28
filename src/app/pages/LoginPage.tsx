import "./loginPage.css";

import { Link } from "react-router-dom";
import React from "react";

export const LoginPage: React.FC = () => {
  return (
    <div className="loginPage">
      <h1>Login page:</h1>
      <p>
        Test router:
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
