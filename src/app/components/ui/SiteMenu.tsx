import './SiteMenu.css';
import styled from 'styled-components';
import React from "react";
import {Color} from '../../common/Color';

const SiteMenuStyled = styled.div`
  min-width: 290px;
  border-right: 2px solid ${Color.LIGHT_GRAY};
  display: flex;
  flex-direction: column;
  
  // This does not fit here, but not sure where to put it. Sets the fill color for the svg-icons in the links.
  // react-router NavLink sets the .active css class on the a-tag when the page url matches the path.
  .active {
    rect, svg {
      fill: ${Color.GREEN} !important;
    }
  }
`;

export const SiteMenu: React.FunctionComponent = (props) => (
  <SiteMenuStyled>
    {props.children}
  </SiteMenuStyled>
);
