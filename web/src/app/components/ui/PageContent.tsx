import styled from 'styled-components/macro';
import React from "react";

export const PageContent: React.FunctionComponent = (props) => (
  <S_PageContent>
    {props.children}
  </S_PageContent>
);

const S_PageContent = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  height: 100%;
  flex-direction: column;
`;
