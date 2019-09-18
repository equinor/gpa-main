import './SiteMenu.css';
import styled from 'styled-components';
import React from "react";

const SiteMenuStyled = styled.div`
  min-width: 290px;
  border-right: 2px solid #f7f7f7;
  display: flex;
  flex-direction: column;
  
  // This does not fit here, but not sure where to put it. Sets the fill color for the svg-icons in the links.
  // react-router NavLink sets the .active css class on the a-tag when the page url matches the path.
  .active {
    rect, svg {
      fill: #007079 !important;
    }
  }
`;

export const SiteMenu: React.FunctionComponent = (props) => (
  <SiteMenuStyled>
    {props.children}
  </SiteMenuStyled>
);
