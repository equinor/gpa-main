import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
// @ts-ignore
import { TopBar } from '@equinor/eds-core-react';

const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const NavBar = () => {
  return (
    <TopBar>
      <HomeLink to="/gpa">GPA</HomeLink>
    </TopBar>
  );
};
