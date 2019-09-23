import styled from 'styled-components';
import React from "react";

const PageContentStyled = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  height: 100%;
  flex-direction: column;
`;

export const PageContent: React.FunctionComponent = (props) => (
  <PageContentStyled>
    {props.children}
  </PageContentStyled>
);
