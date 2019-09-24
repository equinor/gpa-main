import React from 'react';
import { EquinorIcon, Icon, IProps as EquinorIconProps } from '../../assets/svg/EquinorIcon';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { Color } from '../../common/Color';

interface SiteMenuLinkProps {
  to: string,
  name: string,
  icon: Icon,
}

export const SiteMenuLink: React.FunctionComponent<SiteMenuLinkProps> = ({ to, icon, name }) => (
  <S_MenuLink to={to}>
    <EquinorIcon icon={icon} />
    <span>{name}</span>
  </S_MenuLink>
);

const S_MenuLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  padding: 20px 20px 20px 53px;
  align-items: center;
  color: black;
  text-decoration: none;
  font-family: Equinor,serif; 
  font-weight: 500;
  > svg, rect {
    margin-right: 30px;
    fill: #6f6f6f;
  }
  > span {
    color: #6f6f6f;
  }
  &:hover {
    background-color: #fdfdfd;
    > svg, rect {
      fill: ${Color.BLACK};
    }
    > span {
      color: ${Color.BLACK};
    }
  }
  &.active {
    > span {
      color: ${Color.GREEN};
    }
    > svg, rect {
      fill: ${Color.GREEN};
    }
  }
`;