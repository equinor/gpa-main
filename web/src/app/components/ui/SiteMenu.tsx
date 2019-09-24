import styled from 'styled-components/macro';
import React from "react";
import {Color} from '../../common/Color';

export const SiteMenu: React.FunctionComponent = (props) => (
  <S_SiteMenu>
    {props.children}
  </S_SiteMenu>
);

const S_SiteMenu = styled.div`
  min-width: 290px;
  border-right: 2px solid ${Color.LIGHT_GRAY};
  display: flex;
  flex-direction: column;
  padding: 15px 0 0 0;
`;
