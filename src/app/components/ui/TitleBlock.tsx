import './TitleBlock.css';

import React from "react";

export interface IProps { 
  title:string;
}

export interface IState { }

export class TitleBlock extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="TitleBlock">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
};
