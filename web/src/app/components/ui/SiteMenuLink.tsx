import React from 'react';
import { EquinorIcon, EIcon } from '../../assets/svg/EquinorIcon';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { EColor } from '../../common/Color';

interface SiteMenuLinkProps {
  to: string,
  name: string,
  icon?: EIcon,
}

export const SiteMenuLink: React.FunctionComponent<SiteMenuLinkProps> = ({ to, icon, name }) => (
  <StMenuLink to={to}>
    {icon &&
      <EquinorIcon icon={icon} />
    }
    <span>{name}</span>
  </StMenuLink>
);

const StMenuLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  padding: 20px 20px 20px 53px;
  align-items: center;
  text-decoration: none;
  font-family: Equinor,serif; 
  font-weight: 500;
  color: ${EColor.GRAY};
  > svg, rect {
    margin-right: 30px;
    path {
      fill: ${EColor.GRAY};
    }
  } 
  > span {
  }
  &:hover {
    background-color: ${EColor.LIGHT_GREEN};
    > svg, rect {
      fill: ${EColor.BLACK};
      path {
        fill: ${EColor.BLACK};
      }
    }
    > span {
      color: ${EColor.BLACK};
    }
  }
  &.active {
    > span {
      color: ${EColor.GREEN};
    }
    > svg, rect {
      fill: ${EColor.GREEN};
      path {
        fill: ${EColor.GREEN};
      }
    }
  }
`;