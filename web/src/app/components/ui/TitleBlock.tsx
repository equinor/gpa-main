import React from "react";
import styled from "styled-components/macro";

export const S_TitleBlock = styled.div`
    width: 100%;
    height: 160px;
    float: left;
    background-color: #f7f7f7;
    h1 {
        font-family: "Equinor";
        font-size: 32px;
        font-weight: normal;
        margin: 30px;
        color: black;
    }
`;

export const TitleBlock: React.FunctionComponent = (props) => (
  <S_TitleBlock>
    <h1>{props.children}</h1>
  </S_TitleBlock>
);
