import React from 'react';
import { EquinorIcon, EIcon} from '../../assets/svg/EquinorIcon';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { EColor } from '../../common/Color';

interface SiteMenuLinkProps {
  to: string,
  name: string,
  icon: EIcon,
}

export const SiteMenuLink: React.FunctionComponent<SiteMenuLinkProps> = ({ to, icon, name }) => (
  <StMenuLink to={to}>
    <EquinorIcon icon={icon} />
    <span>{name}</span>
  </StMenuLink>
);

const StMenuLink = styled(NavLink)`
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
      fill: ${EColor.BLACK};
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
    }
  }
`;