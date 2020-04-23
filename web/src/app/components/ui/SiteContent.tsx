import styled from 'styled-components/macro';
import React from 'react';

export const SiteContent: React.FunctionComponent = props => (
  <SiteContentStyled>{props.children}</SiteContentStyled>
);

const SiteContentStyled = styled.div`
  width: 100%;
  height: calc(100% - 64px);
  display: flex;
  flex-direction: row;
`;
