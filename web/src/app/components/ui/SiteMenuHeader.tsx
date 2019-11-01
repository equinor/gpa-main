import styled from "styled-components";
import React from "react";
import { EColor } from "../../common/Color";

interface ISiteMenuHeader {
    name: string;
}

export const SiteMenuHeader: React.FunctionComponent<ISiteMenuHeader> = (props) => (
    <StSiteMenuHeader>
        {props.name}
    </StSiteMenuHeader>
)

const StSiteMenuHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px 10px 53px;
  color: ${EColor.GRAY};
  align-items: center;
  text-decoration: none;
  font-family: Equinor,serif; 
  font-weight: 500; 
`; 