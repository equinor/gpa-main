import React from "react";
import { EquinorIcon, EIcon } from '../../assets/svg/EquinorIcon';
import styled from "styled-components/macro";

export const NavBar = () => {
  return (
    <StNavBar>
      <StHeader>
        <EquinorIcon icon={EIcon.MENU} size={24} />
        <span>Neqsim</span>
      </StHeader>
      <div style={{ marginRight: '50px', height: "24px" }}>
        <EquinorIcon icon={EIcon.USER} size={24} />
      </div>
    </StNavBar>
  );
};

const StNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 64px;
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
  > span {
    margin: 2px 0 0 25px;
    font-size: 18px; 
    font-weight: 500;
  }
`;