import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { EquinorIcon, EIcon } from '../../assets/svg/EquinorIcon';

export const NavBar = () => {
  return (
    <StNavBar>
      <StHeader>
        {/* Logo */}
        {/* <Link to="/neqsim">
          <img className="logo" src="./logo.png"></img>
        </Link> */}
        <Link to="/neqsim">
          <EquinorIcon icon={EIcon.MENU} size={24} />
        </Link>
        <span>
          <Link to="/neqsim">Neqsim</Link>
        </span>
      </StHeader>
      <div style={{ marginRight: '50px', height: "24px" }}>
      </div>
    </StNavBar >
  );
};

const StNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 64px;
  border-bottom: 2px solid #f7f7f7;
  align-items: center;
  justify-content: space-between;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  align-items: center;
  font-family: Equinor, serif;
  img.logo {
    width: 80px;
    height: 55px;
    margin: 3px 0;
    object-fit: cover;
  }
  > span {
    margin: 2px 0 0 25px;
    font-size: 18px; 
    font-weight: 500;
    cursor: pointer;
    > a, a:hover {
      color: black;
      text-decoration: none
    }
  }
`;