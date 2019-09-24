import React from "react";
import { EquinorIcon, Icon } from '../../assets/svg/EquinorIcon';
import styled from "styled-components/macro";

export const NavBar = () => {
  return (
    <S_NavBar>
      <S_Header>
        <EquinorIcon icon={Icon.MENU} size={24} />
        <span>Neqsim</span>
      </S_Header>
      <div style={{ marginRight: '50px', height: "24px" }}>
        <EquinorIcon icon={Icon.USER} size={24} />
      </div>
    </S_NavBar>
  );
};

const S_NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 64px;
  border-bottom: 2px solid #f7f7f7;
  align-items: center;
  justify-content: space-between;
`;

const S_Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  align-items: center;
  font-family: Equinor, serif;
  > span {
    margin: 2px 0 0 25px;
    font-size: 18px; 
    font-weight: 500;
  }
`;