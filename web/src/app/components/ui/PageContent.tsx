import styled from 'styled-components/macro';
import React from "react";
import { EColor } from '../../common/Color';

export const PageContent: React.FunctionComponent = (props) => (
  <StPageContent>
    {props.children}
  </StPageContent>
);

const StPageContent = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
  font-family: Equinor, serif;
  color: ${EColor.BLACK};
  font-size: 14px;
  height: fit-content;
`;
