import './PageContent.css';

import React from "react";

export interface IProps { }

export interface IState { }

export class PageContent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="PageContent">
        {this.props.children}
      </div>
    );
  }
};
