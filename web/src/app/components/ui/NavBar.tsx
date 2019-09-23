import React from "react";
import {EquinorIcon, Icon} from '../../assets/svg/EquinorIcon';
import styled from 'styled-components';

const NavBarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 64px;
  border-bottom: 2px solid #f7f7f7;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  align-items: center;
  font-family: Equinor, serif;
`;

export const NavBar = () => {
  return (
    <NavBarStyled>
      <Header>
        <EquinorIcon icon={Icon.MENU} size={24}/>
        <span style={{marginLeft: '25px'}}>Neqsim</span>
      </Header>
      <div style={{marginRight: '50px'}}>
        <EquinorIcon icon={Icon.USER} size={24}/>
      </div>
    </NavBarStyled>
  );
};
