import styled from 'styled-components/macro';
import React from "react";
import {EColor} from '../../common/Color';

export const SiteMenu: React.FunctionComponent = (props) => (
  <StSiteMenu>
    {props.children}
  </StSiteMenu>
);

const StSiteMenu = styled.div`
  min-width: 290px;
  border-right: 2px solid ${EColor.LIGHT_GRAY};
  display: flex;
  flex-direction: column;
  padding: 15px 0 0 0;
`;
