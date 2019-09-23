import './TitleBlock.css';

import React from "react";

export const TitleBlock: React.FunctionComponent = (props) => (
  <div className="TitleBlock">
    <h1>{props.children}</h1>
  </div>
);
