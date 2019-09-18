import React from 'react';
import {EquinorIcon, Icon, IProps as EquinorIconProps} from '../../assets/svg/EquinorIcon';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

interface SiteMenuLinkProps {
  to: string,
  name: string,
  icon: Icon,
}
const MenuLink = styled(NavLink).attrs({
  activeStyle: {
    color: '#007079'
  }
})`
  display: flex;
  flex-direction: row;
  padding: 20px 20px 20px 50px;
  align-items: center;
  color: black;
  text-decoration: none;
  font-family: Equinor,serif; // TODO: add Equinor-bold font
`;

const MenuIconStyled = styled.div<React.FunctionComponent>`
  margin-right: 20px;
`;

const MenuIcon: React.FunctionComponent<EquinorIconProps> = (props) => (
  <MenuIconStyled>
    <EquinorIcon {...props}/>
  </MenuIconStyled>
);

export const SiteMenuLink: React.FunctionComponent<SiteMenuLinkProps> = ({to, icon, name}) => (
  <MenuLink to={to}>
    <MenuIcon icon={icon}/>
    {name}
  </MenuLink>
);