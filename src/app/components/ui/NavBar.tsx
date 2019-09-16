import './NavBar.css';

import React from "react";
import { EquinorIcon } from '../../assets/svg/EquinorIcon';

export interface IProps { }

export interface IState { }

export class NavBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="NavBar">
        <div className="left">
          <EquinorIcon icon="menu"></EquinorIcon>
          <span>Neqsim</span>
        </div>
        <div className="right">
          <EquinorIcon icon="user"></EquinorIcon>
        </div>
      </div> 
    );
  }
};
