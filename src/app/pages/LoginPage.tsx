import "./loginPage.css";

import { Link } from "react-router-dom";
import React from "react";

export interface IProps { }

export interface IState { }

export class LoginPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  render() {
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
  }
};
