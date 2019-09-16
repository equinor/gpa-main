import './SiteContent.css';

import React from "react";

export interface IProps { }

export interface IState { }

export class SiteContent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="SiteContent">
        {this.props.children}
      </div>
    );
  }
};
