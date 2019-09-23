import styled from 'styled-components';
import React from "react";

const SiteContentStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const SiteContent: React.FunctionComponent = (props) => (
  <SiteContentStyled>
    {props.children}
  </SiteContentStyled>
);
